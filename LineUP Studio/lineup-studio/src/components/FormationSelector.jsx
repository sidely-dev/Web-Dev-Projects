import React from 'react';

export default function FormationSelector({
    selectedFormation, onSelectFormation, formations
}) {
    return(
        <div style={{ marginBottom: "20px"}}>
            <span className='selection-label'> Formation: </span>
            <div
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", backgroundColor: "#0f172a", padding: "6px",
                    borderRadius: "10px", border: "1px solid #3334155",
                }}
            >
                {formations.map((formationName) => {
                    const isActive = selectedFormation === formationName;
                    return(
                        <button
                            key={formationName} type='button' onClick={() => onSelectFormation(formationName)}
                            style={{
                                padding: "8px 10px", borderRadius: "7px", border: "none", backgroundColor: isActive ? "#10bd98" : "transparent",
                                color: isActive ? "0621ce":"#cbd5e1", fontWeight: "700", fontSize: "13px", cursor: "pointer", 
                                transition: "all 0.2s ease",
                            }}
                        >
                            {formationName}
                        </button>
                    )
                })}
       
            </div>
        </div>
    );
}