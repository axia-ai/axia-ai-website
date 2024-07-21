import React from 'react'

function Button({ children, backgroundColor, hoverColor, textColor }) {
    return (
        <button className={`bg-${backgroundColor} hover:bg-${hoverColor} text-${textColor} px-6 py-3 rounded-2xl text-sm font-medium font-semibold text-xs md:text-sm`}>
            <span className="flex items-center">{children}</span>
        </button>
    )
}

export default Button