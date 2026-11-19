import React from 'react';

export default function TacticalTools({
    overLays={}, onToggleOverlay, isDrawingPass, onToggleDrawPass, onClearArrows, arrowCount,

}) {
    const overLayItems=[
        { key: 'deluanay', label: 'Triangles', icon: '△', color: '#06b6d4', desc: 'Passing network'},
        {key: 'halfspaces', label: 'Half-spaces', icon: '▯', color: '#f59e0b', desc: 'Inside Vertical Channels'},
        {key: 'unitLines', label: 'Formation Lines', icon: '||', color: '#10b981', desc: 'DEF | MID | ATT'},
        {key: 'betweenLines', label: 'Between the Lines', icon:'◈', color: '#a855f7', desc: 'No. 10 receiving pockets' },

    ]


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

            <button
                type="button"
                onClick={()=> onToggleOverlay('unitLines')}
                style={getButtonStyle(overLays.unitLines, "#66bb6a")}
            >
                Formation Lines
            </button>

            <button
                type='button'
                onClick={()=> onToggleOverlay('betweenLines')}
                style={getButtonStyle(overLays.betweenLines, "#ab47bc")}
            >
                Between The Lines
            </button>


            {/*Divider */}
            <div style={{width: "1px", backgroundColor: "#333", margin: "0 4px", }} />

            {/*Line BREAKING PASS AAROW TOOL */}
            <button
                type='button'
                onClick={()=> onToggleDrawPass}
                style={getButtonStyle(isDrawingPass, "#ff5252")}

            >
                {isDrawingPass ? 'Drawing Pass (Drag on Pitch) ' : 'Line-Breaking Pass'}

            </button>

            {arrowCount > 0 && (
                <button
                    type="button"
                    onClick={onClearArrows}
                    style={{ 
                        padding: "8px 12px", borderRadius: "6px", border: "1px solid #555", backgroundColor: "#2a1515",
                         color: "#ff8a80", fontSize: "13px", cursor: "pointer",
                        }}
                >
                    Clear Passes ({arrowCount})
                </button>
                )
            }

        </div>
    )

}

