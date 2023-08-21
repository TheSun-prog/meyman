import React from 'react'

function Button({width=300, height=50, text='abc', clickFunc}) {
    return (
        <button
            className={`w-[${width}px] h-[${height}px] rounded-full bg-blue flex justify-center items-center text-white shadow-btn hover:bg-light-blue disabled:bg-grey`}
            onClick={clickFunc}
        >
            {text}
        </button>
    )
}

export default Button

