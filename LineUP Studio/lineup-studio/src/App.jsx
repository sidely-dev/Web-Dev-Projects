import React, { useState, useRef } from 'react';
import Pitch from './components/Pitch.jsx';
import PlayerToken from './components/PlayerToken.jsx';
import FormationSelector  from './components/FormationSelector.jsx';
import TacticalTools from './components/TacticalTools.jsx';
import { FORMATIONS } from './data/formations.js';
import { calculateDelaunayTriangles } from './utils/geometry.js'


//Staring XI From Left to Right
const baseSquad = [
    { id:1, number: 1, name: 'Alisson', x: 90, y: 340, color:'#fcb02d'}, //GK
    { id:2, number: 2, name: 'Walker', x: 260, y: 110 }, //RB
    { id:3, number: 3, name: 'Van Dijk', x: 230, y: 260 }, //CB
    { id:4, number: 4, name: 'Senesi', x: 230, y: 420 }, //CB
    { id:5, number: 5, name: 'Robertson', x: 260, y: 570 }, //LB
    { id:6, number: 6, name: 'Tonali', x: 430, y: 340 }, //CDM
    { id:7, number: 8, name: 'Fernades', x: 560, y: 200 }, //CM
    { id:8, number: 10, name: 'Maddison', x: 560, y: 480 }, //CM
    { id:9, number: 17, name: 'Rodrigo', x: 800, y: 130 }, //RW
    { id:10, number: 9, name: 'Halaand', x: 860, y: 340 }, //ST
    { id:11, number: 7, name: 'Mbappe', x: 800, y: 550 }, //LW
    
];

//Function that attaches formation coordinates to all players
function applyFormation(squad, formationName){
    const positions = FORMATIONS[formationName];

    if(!positions){
        console.warn(`Formation "${formationName}" not found in Formations`);
        return squad; // Keep existing players instead of returning null/undefined
    }

    return squad.map((player, index) => ({
        ...player, 
        x: positions[index].x,
        y: positions[index].y,
    }));

}




export default function App(){
    const [selectedFormation, setSelectedFormation] = useState('4-3-3');
    const [players, setPlayers] = useState(() => applyFormation(baseSquad, '4-3-3'));
    const [draggePlayerID, setDraggedPlayerID] = useState(null);
    const svgRef = useRef(null);


    //Tactical Overlays Toggles
    const [overlays, setOverlays] = useState({
        delaunay: false,
        halfSpaces: false,
        unitLines: false,
        betweenLines: false,
    });

    //LINE BREAKING PASS ARROW STATE
    const [isDrawingPass, setIsDrawingPass] = useState(false);
    const [passArrows, setPassArrows] = useState([]);
    const [draftArrow, setDraftArrow] = useState(null);

    function toggleOverlay(key){
        setOverlays((prev) => ({...prev, [key]: !prev[key]}));

    }


    //Switch Formation & Reset Players to new Formation coordinates
    function handleFormationChange(newFormation){
        setSelectedFormation(newFormation);
        setPlayers((prevPlayers) => {
            const safeSquad = prevPlayers || baseSquad;
            return applyFormation(prevPlayers, newFormation);
        });
        
    }

    //Convert Screen Cursor Coordinates into Svg Coordinates
    function getPitchCoordinate(e){
        const svg = svgRef.current;
        const point = svg.createSVGPoint();
        point.x = e.clientX;
        point.y = e.clientY;
        const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());

        //To keep players inside the white lines
        const stuckX = Math.max(35, Math.min(1015, svgPoint.x));
        const stuckY = Math.max(35, Math.min(645, svgPoint.y));

        return{x: stuckX, y: stuckY};
    }

    

    function handlePointerUp(){
        setDraggedPlayerID(null);

        if(draftArrow !== null){
            //Only save arrow if dragged aleast 20 UNITS.
            const distance = Math.hypot(draftArrow.x2 - draftArrow.x1, draftArrow.y2 -draftArrow.y1);

            if(distance > 20){
                setPassArrows((prev) => [...prev ,{ ...draftArrow, id: Date.now()}])
            }
        }
        setDraftArrow(null);
    }

    //CALCULATE DELAUNCY TRIANGLE FOR OUTFIELD PLAYERS (GOALKEEPER IS INDEX 0)
    const outFieldPlayer = players.slice(1);
    const triangles = overlays.delaunay ? calculateDelaunayTriangles(outFieldPlayer) :  [];


    //CALCUALATE TACTICAL FROM PLAYER POSITIONS
    const unitCounts = selectedFormation.split('-').map(Number);
    const defEnd = 1 + unitCounts[0];
    const midEnd = defEnd + unitCounts[1];

    const defenseX = players.slice(1, defEnd).reduce((sum, p) => sum + p.x, 0) / unitCounts[0];
    const midfieldX = players.slice(defEnd, midEnd).reduce((sum, p) => sum + p.x, 0) / unitCounts[1];
    const attackX = players.slice(midEnd).reduce((sum, p) => sum + p.x, 0) / unitCounts[2];



    //HANDLE CLICKING ON THE PITCH GRASS
    function handlePitchPointerDown(e){
        if(!isDrawingPass) return;
        const coords = getPitchCoordinate(e);
        setDraftArrow({ x1: coords.x, y1: coords.y, x2: coords.x, y2: coords.y});

    }

    function handlePointerMove(e){
        const coords = getPitchCoordinate(e);

        //Update Dragged Player Position
        if(draggePlayerID !== null){
            setPlayers((prevPlayers) => prevPlayers.map((player) => 
                player.id === draggePlayerID ? { ...player, x: coords.x, y: coords.y} : player));
            return;
        }

        //Update Pass Arrow Endpoint
        if(draftArrow !== null){
            setDraftArrow((prev) => ({ ...prev, x2: coords.x, y2: coords.y }));
        }



    }



    return(
        <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto'}}>
            <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}
            >   
                <FormationSelector
                    selectedFormation={selectedFormation}
                    onSelectFormation={handleFormationChange}
                    formations={Object.keys(FORMATIONS)}
                />
            </div>
            <TacticalTools
                overlays={overlays}
                onToggleOverlay={toggleOverlay}
                isDrawingPass={isDrawingPass}
                onToggleDrawPass={() => setIsDrawingPass((prev) => !prev)}
                onClearArrows={() => setPassArrows([])}
                arrowCount={passArrows?.length || 0}

            />

            <Pitch
                svgRef={svgRef}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerDown={handlePitchPointerDown}

            
            >

            {/*SVG Arrow Head Marker */}
            <def>
                <marker id='pass-arrowhead' markerWidth="70" markerHeight="7" refX="8" refY="3.5" orient="auto">
                    <shapes points="0 0, 10 3.5,  0 7" fill="#ff5252"/>
                </marker>
            </def>

            {/*HALFSPACES OVERLAY */}
            {overlays.halfSpaces && (
                <g pointerEvents="none">
                    {/*LEFT HALF SPACES [y: 138.5  to 248.5] */}
                    <rect 
                        x="25" y="138.5" width="1000" height="110" fill="rgba(255, 202, 40, 0.16)" stroke="rgba(255, 202, 40, 0.5)"
                        strokeDasharray="6 4"
                    />
                    <text x="40" y="160" fill="#ffca28" fontSize="12" fontWeight="bold" opacity="0.85"  >
                        LEFT HALF SPACE
                    </text>

                    {/*RIGHT HALF SPACE [y: 431 to 541.5 ] */}
                    <rect
                        x="25" y="431" width="1000" height="110" fill="rgba(255, 202, 40, 0.16)" stroke="rgba(255, 202,40, 0.5)" 
                        strokeDasharray="6 4"
                    />
                    <text x="40" y="530" fill="#ffca28" fontSize="12" fontWeight="bold" opacity="0.85">
                        RIGHT HALF SPACE
                    </text>

                </g>


                
            )}
            {/* BETWEEN THE LINES*/}
            {overlays.betweenLines && (
                <g pointerEvents="none">
                    {/*POCKET SPACE BETWEEN DEFENSE & MIDFIELD */}
                    <rect
                        x={Math.min(defenseX, midfieldX) + 22}
                        y="45"
                        width={Math.max(10, Math.abs(midfieldX - defenseX) - 44)}
                        height="590" rx="8" fill="rgba(171, 71, 188, 0.22)" stroke="#ce93d8" strokeWidth="8" strokeDasharray="5 5"

                    />
                    {/*POCKET BETWEEN MIDFIELD & ATTACK */}
                    <rect
                        x={Math.min(midfieldX - attackX) + 22}
                        y="45"
                        width={Math.max(10, Math.abs(attackX - defenseX) - 44)}
                        height="590" rx="8" fill="rgba(171, 71, 188, 0.22)" stroke="#ce93d8" strokeWidth="1.5" strokeDasharray="5 5"

                    />
                </g>

            )}

            {/* DELAUNAY TRIANGULATION MESH */}
            {overlays.delaunay && (
            <g pointerEvents="none">
                {triangles.map((tri, idx) => (
                <polygon
                    key={idx}
                    points={`${tri[0].x},${tri[0].y} ${tri[1].x},${tri[1].y} ${tri[2].x},${tri[2].y}`}
                    fill="rgba(0, 229, 255, 0.12)"
                    stroke="#00e5ff"
                    strokeWidth="2"
                />
                ))}
            </g>
            )}

            {/*Line Breaking Pass Arrow */}
            <defs>
                <marker
                    id="pass-arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="8"
                    refY="3.5"
                    orient="auto"
                >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ff5252" />
                </marker>
            </defs>
            <g pointerEvents="none">
                {(passArrows || []).map((arrow) => (
                    <line  
                        key={arrow.id} x1={arrow.x1} y1={arrow.y1} x2={arrow.x2} y2={arrow.y2} stroke="#ff5252" strokeWidth="4"
                        strokeDasharray=" 8 4"
                        markerEnd='url(#pass-arrowhead)'
                    />
                ))}
                {draftArrow && (
                    <line
                        x1={draftArrow.x1} y1={draftArrow.y1} x2={draftArrow.x2} y2={draftArrow.y2} stroke='#ff5252' strokeWidth="4"
                        strokeDasharray="6 4"
                        markerEnd='url(#pass-arrowhead)'
                    />
                )}

            </g>

            {/* FORMATION UNIT LINES */}
            {overlays.unitLines && (
            <g pointerEvents="none">
                {[
                { label: 'DEFENSIVE LINE', x: defenseX },
                { label: 'MIDFIELD LINE', x: midfieldX },
                { label: 'ATTACKING LINE', x: attackX },
                ].map((unit) => (
                <g key={unit.label}>
                    <line
                    x1={unit.x}
                    y1="25"
                    x2={unit.x}
                    y2="655"
                    stroke="#69f0ae"
                    strokeWidth="3"
                    strokeDasharray="10 6"
                    />
                    <text
                    x={unit.x}
                    y="45"
                    textAnchor="middle"
                    fill="#69f0ae"
                    fontSize="11"
                    fontWeight="bold"
                    >
                    {unit.label}
                    </text>
                </g>
                ))}
            </g>
            )}

            {/*Player Tokens */}
                {(players || []).map((player) => {
                    return (
                    <PlayerToken
                        key={player.id} number={player.number} name={player.name} x={player.x} y={player.y} color={player.color}
                        isDragging={draggePlayerID === player.id}
                        onPointerDown={(e) =>{
                            if(isDrawingPass) return; // Let the Pitch handle pass drawing when active
                            e.stopPropagation();
                            setDraggedPlayerID(player.id);
                        }}
                    />
                    );
                })};
            </Pitch>
        </div>
    );

}