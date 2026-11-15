import React from 'react';

export default function FormationSelector({
    selectedFormation, onSelectFormation, formations
}) {
    return(
        <div style={{ marginBottom: "16px", display: 'flex', alignItems: 'center', gap: "10px" }}>
            <label
                htmlFor="formation-select"
                style={{ color: "#ffffff", fontFamily:"sans-serif", fontWeight: "600"}}
            >
                Formation:
            </label>

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