import React from 'react'

function Card({title, description, icon, linkAddress}) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-left">
            <div className="bg-primary rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-base sm:text-lg font-bold">{title}</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {description}
            </p>
            <a href={linkAddress} className="text-primary mt-4 inline-block font-semibold hover:text-primaryHover">Learn More &rarr;</a>
        </div>
    )
}

export default Card