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
        setPlayers((prevPlayers) => applyFormation(prevPlayers, newFormation));
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

    function handlePointerMoves(e){
        if(draggePlayerID === null )
        return;

        const {x, y}=getPitchCoordinate(e);

        setPlayers((prevPlayers) => 
            prevPlayers.map((player) => 
                player.id === draggePlayerID ? {...player,x,y} : player
            )
        );
    }

    function handlePointerUp(){
        setDraggedPlayerID(null);

        if(draftArrow !== null){
            //Only save arrow if dragged aleast 20 UNITS.
            const distance = Math.hypot();
        }
    }

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

            <FormationSelector
                selectedFormation={selectedFormation}
                onSelectFormation={setSelectedFormation}
                formations={Object.keys(FORMATIONS)}
            />

            <Pitch
                svgRef={svgRef}
                onPointerMove={handlePointerMoves}
                onPointerUp={handlePointerUp}
            
            >
                {players.map((player) => {
                    return (
                    <PlayerToken
                        key={player.id} number={player.number} name={player.name} x={player.x} y={player.y} color={player.color}
                        isDragging={draggePlayerID === player.id}
                        onPointerDown={(e) =>{
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