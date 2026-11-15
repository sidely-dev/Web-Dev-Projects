import React from 'react';

export default function TacticalTools({
    overLays, onToggleOverlay, isDrawingPass, onToggleDrawPass, onClearArrows, arrowCount,

}) {
    const getButtonStyle = (isActive, accentColor="#00e5ff") => ({
        padding: "8px 12px",
        borderRadius: "3px",
        border: isActive ?  `1px solid ${accentColor}` : "1px solid #444",
        backgroundColor: isActive ? "rgba(0, 229, 225, 0.18)" : "#1e1e1e",
        color: isActive ? accentColor : "#e0e0e0",
        fontSize: "13px",
        fontWeight: "600",
        cursor: "pointer",
        transition: " all 0.2s ease",
        
    })

    return(
        <div
            style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px', padding: '10px', backgroundColor: '#181818', borderRadius: '9px', border: '1px solid #33'}}

        >
            {/*Tactical shape & Structure Toggles*/}
            <button 
                type="button" onClick={()=> onToggleOverlay('delaunay')} 
                style={getButtonStyle(overLays.delaunay, "#00e5ff")}
            >
                Triangles
            </button>

            <button
                type="button"
                onClick={()=> onToggleOverlay('halfSpaces')}
                style={getButtonStyle(overLays.halfSpaces, "#ffca28")}
            >
                Half Spaces
            </button>

            <button>
                
            </button>







        </div>
    )

}

