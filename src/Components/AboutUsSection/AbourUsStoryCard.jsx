import React from 'react'

function AbourUsStoryCard({year, title, description}) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="text-yellow-500 text-sm font-bold">{year}</h3>
            <h4 className="text-xl font-bold mt-2">{title}</h4>
            <p className="text-gray-700 mt-2 lg:text-sm text-xs">
               {description}
            </p>
        </div>
    )
}

export default AbourUsStoryCard