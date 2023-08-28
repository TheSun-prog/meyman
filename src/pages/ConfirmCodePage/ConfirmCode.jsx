import React from 'react';
import back from '../../assets/images/back.svg'
import logo from '../../assets/images/logo.svg'


const ConfirmCode = () => {
    return (
        <>
            <div>
                <span className="flex justify-self-star t ">
                    <a href=""><img src={back} alt=""/></a>
                </span>
                <span className="flex justify-center"><img className="justify-self-center" src={logo} alt=""/></span>
            </div>
            <div className="AuthPage">
                <div className="Login">
                    <div className="container">

                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmCode;