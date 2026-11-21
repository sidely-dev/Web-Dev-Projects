import React from 'react';

export default function TacticalTools({
    overlays = {}, onToggleOverlay, isDrawingPass, onToggleDrawPass, onClearArrows, arrowCount,
}) {
    const overLayItems = [
        { key: 'delaunay', label: 'Triangles', icon: '△', color: '#06b6d4', desc: 'Passing network' },
        { key: 'halfSpaces', label: 'Half-Spaces', icon: '▯', color: '#f59e0b', desc: 'Inside Vertical Channels' },
        { key: 'unitLines', label: 'Formation Lines', icon: '||', color: '#10b981', desc: 'DEF | MID | ATT' },
        { key: 'betweenLines', label: 'Between the Lines', icon: '◈', color: '#a855f7', desc: 'No. 10 receiving pockets' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Spatial Structures & Overlays */}
            <div>
                <span className="section-label">Tactical Overlays</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {overLayItems.map((item) => {
                        const isActive = !!overlays[item.key];
                        return (
                            <button
                                key={item.key}
                                type="button"
                                onClick={() => onToggleOverlay(item.key)}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px',
                                    borderRadius: '10px', border: isActive ? `1px solid ${item.color}` : '1px solid #334155',
                                    backgroundColor: isActive ? 'rgba(15, 23, 42, 0.85)' : '#0f172a', color: '#f8fafc', cursor: 'pointer',
                                    textAlign: 'left', transition: 'all 0.18s ease',
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
                                    <div>
                                        <div style={{ fontSize: '13px', fontWeight: '600',}}>{item.label}</div>
                                        <div style={{ fontSize: '11px', color: '#94a3b8'}}>{item.desc}</div>
                                    </div>
                                </div>

                                {/* Status Pill */}
                                <span
                                    style={{ fontSize: '10px', fontWeight: '700', padding: '3px 7px', borderRadius: '99px',
                                        backgroundColor: isActive ? item.color : '#1e293b', color: isActive ? '#0f172a' : '#64748b',
                                    }}
                                >
                                    {isActive ? 'ON' : 'OFF'}
                                </span>

                            </button>
                        )
                    })}

                </div>
            </div>

            {/*Drawing Tools */}
            <div>
                <span className='section-label'> Drawings</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <button
                        type="button" onClick={onToggleDrawPass} 
                        style={{width: '100%', padding: '11px 14px', borderRadius: '10px', border: isDrawingPass ? '1px solid #ef4444' : '1px solid #334155',
                            backgroundColor: isDrawingPass ? 'rgba(239, 68, 68, 0.18)' : '#0f172a', color: isDrawingPass ? '#fca5a5' : '#f8fafc',
                            fontWeight: '600', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', gap: '8px',
                        }}
                    >
                    <span>↗</span>
                    <span>{isDrawingPass ? 'Drawing Mode Active (Drag on Pitch)' : 'Draw Line-Breaking Pass'}</span>
                    </button>
                    {arrowCount > 0 && (
                        <button
                        type="button"
                        onClick={onClearArrows}
                        style={{
                            width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid #475569',
                            backgroundColor: 'transparent', color: '#94a3b8', fontSize: '12px', fontWeight: '600', cursor: 'pointer',
                        }}
                        >
                            Clear All Pass Arrows ({arrowCount})
                        </button>
                    )}
                    </div>
            </div>
        </div>
    )

}

