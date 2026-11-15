import React from "react";

{/*This is a function to generate the field and export it to other functions */}
export default function Pitch ({ children }){
    return(
        <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
            <svg
                viewBox="0 0 1050 680"
                style={{ width: '100%', height: 'auto', display:'block' ,borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)'}}
            >
                {/* 1. Pitch Grass Background */}
                <rect x="0" y="0" width="1050" height="680" fill="#2e7d32" />

                {/* 2. Outer Boundary & Halfway Line */}
                <rect x="25" y="25" width="1000" height="630" fill="none" stroke="white" strokeWidth="3" />
                <line x1="525" y1="25" x2="525" y2="655" stroke="white" strokeWidth="3" />

                {/* 3. Centre Circle & Spot */}
                <circle cx="525" cy="340" r="91.5" fill="none" stroke="white" strokeWidth="3" />
                <circle cx="525" cy="340" r="4" fill="white" />

                {/* 4. Left & Right Penalty Areas (18-yard boxes) */}
                <rect x="25" y="138.5" width="165" height="403" fill="none" stroke="white" strokeWidth="3" />
                <rect x="860" y="138.5" width="165" height="403" fill="none" stroke="white" strokeWidth="3" />

                {/* 5. Left & Right 6-Yard Boxes & Penalty Spots */}
                <rect x="25" y="248.5" width="55" height="183" fill="none" stroke="white" strokeWidth="3" />
                <rect x="970" y="248.5" width="55" height="183" fill="none" stroke="white" strokeWidth="3" />
                <circle cx="135" cy="340" r="4" fill="white" />
                <circle cx="915" cy="340" r="4" fill="white" />
                {/*The Player Profiles Go Here */}
                { children }

            </svg>
        </div>
    )
}