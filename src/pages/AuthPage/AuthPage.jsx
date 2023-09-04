import React from 'react';
import back from '../../assets/images/back.svg'
import logo from '../../assets/images/logo.svg'
import "./AuthPage.css"
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import Google from "../../assets/images/google.svg"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


const AuthPage = () => {
    const dispatch = useDispatch(), navigate = useNavigate()

    return (
        <>
            <div>
                <span className="flex justify-self-star t ">
                    <a href="" onClick={() => navigate('/')}>
                        <img src={back} alt=""/>
                    </a>
                </span>
                <span className="flex justify-center"><img className="justify-self-center" src={logo} alt=""/></span>
            </div>
            <div className="AuthPage">
                <div className="Login">
                    <div className="container">
                        <p className="signIn">Войти</p>
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="email">Адрес Электронной почты</label>
                            <Input
                                type="email"
                                text={"Введите адрес электронной почты"}
                            />
                        </div>
                        <div className="flex flex-col gap-[10px] pt-[18px]">
                            <label htmlFor="password">Пароль</label>
                            <Input
                                type="password"
                                text="Введите пароль"
                            />
                        </div>
                        <p className="py-[20px] text-blue">Забыли пароль</p>
                        <Button width={520} text={"Войти"}/>
                        <p className="Or">
                            <span className="line_1"></span>
                            или
                            <span className="line_2"></span>
                        </p>
                        <div className="flex justify-center flex-col items-center">
                            <p className="pt-[10px]">Войдите через соц.сеть</p>
                            <span className="pt-[20px] pb-[35px]"><img src={Google} alt=""/></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPage;