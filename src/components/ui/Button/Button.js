import React from 'react'

const Button = ({
                    width, height = 50, text, clickFunc, classes, children
                }) => {

    const buttonStyle = {
        width: `${width}px`, height: `${height}px`
    };
    return (<button
            className={`rounded-full bg-blue flex justify-center items-center text-white shadow-btn hover:bg-light-blue disabled:bg-grey ${classes}`}
            onClick={clickFunc}
            style={buttonStyle}
        >
            {text}
            {children}
        </button>)
}

export default Button

