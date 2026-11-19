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

            </div>


            <select
                id="formation-select" value={selectedFormation} onChange={(e) => onSelectFormation(e.target.value)}
                style={{
                    padding: "8px 12px", borderRadius:"6px", border: "1px solid #444", backgroundColor: "#ffffff",
                    fontSize: "15px", cursor: 'pointer'
                 }}
            >
                {formations.map((formationName) => (
                    <option key={formationName}  value={formationName}  >
                        {formationName}
                    </option>
                ))}
            </select>

        </div>
    );
}