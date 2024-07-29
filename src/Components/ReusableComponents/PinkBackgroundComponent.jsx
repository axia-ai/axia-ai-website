import React from 'react'
import backgroundVectorImage from '../../assets/background_vector.png';

function PinkBackgroundComponent({ children }) {
    return (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
            <div
                className="bg-center bg-no-repeat bg-[length:0%] sm:bg-[length:0%] md:bg-[length:75%] bg-none sm:bg-cover"
                style={{ backgroundImage: `url(${backgroundVectorImage})` }}
            >
                {children}
            </div>
        </div>
    )
}

export default PinkBackgroundComponent