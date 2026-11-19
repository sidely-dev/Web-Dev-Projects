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
            style={{display: 'flex', flexDirection: "column", gap: "20px"}}

        >
            {/*Shaptial Structures & Overlays*/}
            <div>
                <span className='section-label'> Tactical Overlays</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    {overLayItems.map((item) => {
                        const isActive = !!overLays[item.keys];
                        return(
                            <button
                                key={item.key} type="button" onClick={() => onToggleOverlay(item.key)}
                                style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px',
                                    borderRadius: '10px', border: isActive ?'rgba(15, 23, 42, 0.85)' : '#0f172a', color: '#f8fafc',
                                    cursor: 'pointer', textAlign: 'left', transition: 'all 0.18s ease',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <span
                                        style={{ width: '28px', height: '28px', borderRadius: '7px', backgroundColor: isActive ? item.color : '#1e293b',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px',
                                        }}
                                    >
                                        {item.icon}
                                    </span>

                                </div>

                            </button>
                        )
                    })}

                </div>
            </div>
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

