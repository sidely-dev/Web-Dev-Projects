import React from 'react'

export default function PlayerToken({ number, name, x, y, color='#d32f2f'}){
    return(
        <g 
            
            transform={`translate(${x}, ${y})`}
            style={{ cursor:'pointer', transition: 'transform 0.4s ease-in-out'}}
            
        >

            {/*Player Shirts shown in a Circle*/}
            <circle
                cx="0" cy="0" r="22" fill={color} stroke="#ffffff" strokeWidth="3"
            />

            {/*Player Numbers in Circles */}
            <text
                x="0" y="6" textAnchor='Middle' fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="sans-serif"
            >
                {number}
            </text>
            
            {/* Player Name in Bakcgroud */}
            <rect
                x="-45" y="25" width="90" height="20" rx="4" fill="rgba(0,0,0,0.75)"
            />

            {/*Player Name Text */}
            <text
                x="0" y="42" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="600" fontFamily="sans-serif"
            >
                {number}
            </text>

            
        </g>
    );
}