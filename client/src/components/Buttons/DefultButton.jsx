import React from 'react'

const DefultButton = ({ text = 'Click Me', onClick, btntype }) => {
    return (
        <button
            type={btntype}
            onClick={onClick}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:from-cyan-400 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
        >
            {text}
        </button>
    )
}

export default DefultButton
