{/*This is a function to generate the field and export it to other functions */}
export default function Pitch ({ children }){
    return(
        <div style={{ width: '100', maxWidth: '1000px', margin: '0 auto' }}>
            <svg
                viewBox="0 0 1050 680"
                style={{ width: '100', height: 'auto', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)'}}
            >
                {/* Pitch Grass Bacground*/}
                <rect x='0' y='0' height='1050' width='680' fill="#2e7d32" />

                {/* HalfwayLine & Field Outline */}
            </svg>
        </div>
    )
}