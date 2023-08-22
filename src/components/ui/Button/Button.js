import React from 'react'

const Button = ({
                    width = 400,
                    height = 50,
                    text = 'abc',
                    clickFunc
                }) => {

    const buttonStyle = {
        width: `${width}px`,
        height: `${height}px`
    };
    return (
        <button
            className="rounded-full bg-blue flex justify-center items-center text-white shadow-btn hover:bg-light-blue disabled:bg-grey"
            style={buttonStyle}
            onClick={clickFunc}
        >
            {text}
        </button>
    )
}

export default Button

