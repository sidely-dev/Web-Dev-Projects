import React, { useState, useRef } from 'react';
import Pitch from './components/Pitch.jsx';
import PlayerToken from './components/PlayerToken.jsx';
import FormationSelector  from './components/FormationSelector.jsx';
import TacticalTools from './components/TacticalTools.jsx';
import { FORMATIONS } from './data/formations.js';
import { calculateDelaunayTriangles } from './utils/geometry.js';
import './index.css';



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
    const [draggedPlayerID, setDraggedPlayerID] = useState(null);
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
            return applyFormation(safeSquad, newFormation);
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
    let cursor= 1; //Skips goalkepper
    const unitLinesData =unitCounts.map((count, idx) => {
        const group = players.slice(group, count + count);
        cursor += count;
        const avgX = group.length ? group.reduce((sum, p) => sum + p.x, 0) / length : 0;
        const labels = ['DENFENSIVE LINE', 'MIDLFIELD LINE', 'ATTACKING MID', 'ATTACKING LINE'];
        const label = unitCounts.length === 3 ? ['DENFENSIVE LINE', 'MIDLFIELD LINE', 'ATTACKING LINE'][idx] : labels[idx] || `LINE ${idx + 1}`;
        return { label, x: avgX};


    })



    //HANDLE CLICKING ON THE PITCH GRASS
    function handlePitchPointerDown(e){
        if(!isDrawingPass) return;
        const coords = getPitchCoordinate(e);
        setDraftArrow({ x1: coords.x, y1: coords.y, x2: coords.x, y2: coords.y});

    }

    function handlePointerMove(e){
        const coords = getPitchCoordinate(e);

        //Update Dragged Player Position
        if(draggedPlayerID !== null){
            setPlayers((prevPlayers) => prevPlayers.map((player) => 
                player.id === draggedPlayerID ? { ...player, x: coords.x, y: coords.y} : player));
            return;
        }

        //Update Pass Arrow Endpoint
        if(draftArrow !== null){
            setDraftArrow((prev) => ({ ...prev, x2: coords.x, y2: coords.y }));
        }



    }

return (
    <div className="studio-shell">
        {/* 1. TOP STUDIO HEADER BAR */}
        <header
            className="bento-card"
            style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', padding: '14px 20px',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                    style={{
                        width: '34px', height: '34px', borderRadius: '8px', backgroundColor: '#10b981', color: '#062c1e', fontWeight: '900',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
                    }}
                >
                    LS
                </div>

                <div>
                    <h1 style={{ fontSize: '17px', fontWeight: '700', letterSpacing: '-0.01em' }}>
                        LineUP Studio
                    </h1>
                    <p style={{ fontSize: '12px', color: '#94a3b8' }}>
                        Interactive Tactical Board & Spatial Analysis
                    </p>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                    style={{
                        padding: '6px 12px', borderRadius: '99px', backgroundColor: '#0f172a', border: '1px solid #334155',
                        fontSize: '12px', fontWeight: '600', color: '#10b981',
                    }}
                >
                    Active Shape: {selectedFormation}
                </span>

                <button
                    type="button"
                    onClick={() => handleFormationChange(selectedFormation)}
                    style={{
                        padding: '7px 14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0f172a',
                        color: '#e2e8f0', fontSize: '12px', fontWeight: '600', cursor: 'pointer',
                    }}
                >
                    ↺ Reset Positions
                </button>
            </div>
        </header>

        {/* 2. MAIN BENTO WORKSPACE */}
        <main className="bento-workspace">

            {/* LEFT CARD: TACTICAL PITCH */}
            <section className="bento-card" style={{ padding: '16px' }}>
                <div
                    style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px',
                    }}
                >
                    <span className="section-label" style={{ marginBottom: 0 }}>
                        Tactical Pitch View
                    </span>

                    <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                        {isDrawingPass ? 'Click & drag on grass to draw pass' : 'Drag any player token to adjust shape'}
                    </span>
                </div>

                <Pitch
                    svgRef={svgRef}
                    onPointerDown={handlePitchPointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                >
                    {/* SVG ARROWHEAD */}
                    <defs>
                        <marker
                            id="pass-arrowhead" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto"
                        >
                            <polygon
                                points="0 0, 10 3.5, 0 7" fill="#ff5252"
                            />
                        </marker>
                    </defs>

                    {/* 1. HALF-SPACES OVERLAY */}
                    {overlays.halfSpaces && (
                        <g pointerEvents="none">
                            <rect
                                x="25" y="138.5" width="1000" height="110" fill="rgba(255, 202, 40, 0.16)" stroke="rgba(255, 202, 40, 0.5)"
                                strokeDasharray="6 4"
                            />

                            <text
                                x="40" y="160" fill="#ffca28" fontSize="12" fontWeight="bold" opacity="0.85"
                            >
                                LEFT HALF-SPACE
                            </text>

                            <rect
                                x="25" y="431.5" width="1000" height="110" fill="rgba(255, 202, 40, 0.16)" stroke="rgba(255, 202, 40, 0.5)"
                                strokeDasharray="6 4"
                            />

                            <text
                                x="40" y="530" fill="#ffca28" fontSize="12" fontWeight="bold" opacity="0.85"
                            >
                                RIGHT HALF-SPACE
                            </text>
                        </g>
                    )}

                    {/* 2. BETWEEN-THE-LINES POCKETS */}
                    {overlays.betweenLines && (
                        <g pointerEvents="none">
                            <rect
                                x={Math.min(defenseX, midfieldX) + 22}
                                y="45"
                                width={Math.max(
                                    10,
                                    Math.abs(midfieldX - defenseX) - 44
                                )}
                                height="590"
                                rx="8"
                                fill="rgba(171, 71, 188, 0.22)"
                                stroke="#ce93d8"
                                strokeWidth="1.5"
                                strokeDasharray="5 5"
                            />

                            <rect
                                x={Math.min(midfieldX, attackX) + 22}
                                y="45"
                                width={Math.max(
                                    10,
                                    Math.abs(attackX - midfieldX) - 44
                                )}
                                height="590" rx="8" fill="rgba(171, 71, 188, 0.22)" stroke="#ce93d8" strokeWidth="1.5"
                                strokeDasharray="5 5"
                            />
                        </g>
                    )}

                    {/* 3. FORMATION UNIT LINES */}
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

                    {/* 4. DELAUNAY TRIANGULATION */}
                    {overlays.delaunay && (
                        <g pointerEvents="none">
                            {(triangles || []).map((tri, idx) => (
                                <polygon
                                    key={idx}
                                    points={`${tri[0].x},${tri[0].y} ${tri[1].x},${tri[1].y} ${tri[2].x},${tri[2].y}`}
                                    fill="rgba(0, 229, 255, 0.1)"
                                    stroke="#00e5ff"
                                    strokeWidth="2"
                                />
                            ))}
                        </g>
                    )}

                    {/* 5. PASS ARROWS */}
                    <g pointerEvents="none">
                        {(passArrows || []).map((arrow) => (
                            <line
                                key={arrow.id}
                                x1={arrow.x1}
                                y1={arrow.y1}
                                x2={arrow.x2}
                                y2={arrow.y2}
                                stroke="#ff5252"
                                strokeWidth="4"
                                strokeDasharray="8 4"
                                markerEnd="url(#pass-arrowhead)"
                            />
                        ))}

                        {draftArrow && (
                            <line
                                x1={draftArrow.x1}
                                y1={draftArrow.y1}
                                x2={draftArrow.x2}
                                y2={draftArrow.y2}
                                stroke="#ff8a80"
                                strokeWidth="4"
                                strokeDasharray="6 4"
                                markerEnd="url(#pass-arrowhead)"
                            />
                        )}
                    </g>

                    {/* 6. PLAYER TOKENS */}
                    {(players || []).map((player) => (
                        <PlayerToken
                            key={player.id}
                            number={player.number}
                            name={player.name}
                            x={player.x}
                            y={player.y}
                            color={player.color}
                            isDragging={draggedPlayerID === player.id}
                            onPointerDown={(e) => {
                                if (isDrawingPass) return;

                                e.stopPropagation();
                                setDraggedPlayerID(player.id);
                            }}
                        />
                    ))}
                </Pitch>
            </section>

            {/* RIGHT CARD: TACTICAL CONTROLS */}
            <aside className="bento-card">
                <FormationSelector
                    selectedFormation={selectedFormation}
                    onSelectFormation={handleFormationChange}
                    formations={Object.keys(FORMATIONS)}
                />

                <TacticalTools
                    overlays={overlays}
                    onToggleOverlay={toggleOverlay}
                    isDrawingPass={isDrawingPass}
                    onToggleDrawPass={() =>
                        setIsDrawingPass((prev) => !prev)
                    }
                    onClearArrows={() => setPassArrows([])}
                    arrowCount={passArrows?.length || 0}
                />
            </aside>
        </main>

        {/* 3. STARTING XI ROSTER */}
        <footer
            className="bento-card"
            style={{ padding: '14px 18px' }}
        >
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                }}
            >
                {(players || []).map((player) => (
                    <div
                        key={player.id}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 10px', borderRadius: '8px',
                            backgroundColor: '#0f172a', border: '1px solid #334155',fontSize: '12px',
                        }}
                    >
                        <span
                            style={{
                                fontWeight: '700', color: player.color || '#ef4444',
                            }}
                        >
                            #{player.number}
                        </span>

                        <span
                            style={{
                                color: '#e2e8f0',fontWeight: '500',
                            }}
                        >
                            {player.name}
                        </span>
                    </div>
                ))}
            </div>
        </footer>
    </div> 
);
}
