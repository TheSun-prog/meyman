import React from 'react';
import logo from '../../assets/images/logo.svg'
import lock from '../../assets/images/lock.svg'
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";

const ConfirmCode = () => {
    return (
        <>
            <div>
                <span className="flex justify-center"><img className="pt-[45px]" src={logo} alt=""/></span>
            </div>
            <div className="pt-[80px] w-[421px] h-[496px] m-auto">
                <div className="flex justify-center">
                    <img src={lock} alt=""/>
                </div>
                <div>
                    <div className="flex justify-center flex-wrap pt-[40px]">
                        <p className="text-sm">Напишите код подтверждения</p>
                        <p className="text-sn text-sendCode pt-[20px]">Мы отправили код на вашу электронную почту</p>
                    </div>
                    <div className=" m-auto flex justify-between flex-wrap">
                        <div className=" w-[360px] m-auto flex justify-between pt-[30px] pb-[20px] gap-[40px]">
                            <Input type="text" classes={"w-[60px] h-[60px] rounded-[12px] outline-transparent"}/>
                            <Input type="text" classes={"w-[60px] h-[60px] rounded-[12px] outline-transparent"}/>
                            <Input type="text" classes={"w-[60px] h-[60px] rounded-[12px] outline-transparent"}/>
                            <Input type="text" classes={"w-[60px] h-[60px] rounded-[12px] outline-transparent"}/>
                        </div>
                        <div className="m-auto">
                            <p>Не получили код?<a href="">Отправить снова</a></p>
                        </div>
                        <Button text="Подтвердить" classes={"w-[421px] h-[53px] mt-[40px]"}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmCode;