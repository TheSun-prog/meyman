import {asyncConfirmCode, setAuthModal} from "../../store/slice/AuthSlice"
import Button from "../../components/ui/Button/Button"
import Input from "../../components/ui/Input/Input"
import React, {useEffect, useState} from 'react'
import logo from '../../assets/images/logo.svg'
import lock from '../../assets/images/lock.svg'
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import './ConfirmCode.css'


const ConfirmCode = () => {
    const { status2, error2 } = useSelector(state => state.authSlice)
    const dispatch = useDispatch(), navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('userData'))
    const [ codeError, setCodeError ] = useState(false)
    const [ code, setCode ] = useState('')
    const numRegExp = /[0-9]{4}/

    const handleChange = (event) => {
        const value = event.target.value
        const replacedInput = value.replace(/[^+\d]/g, '')
        setCode(replacedInput)
    }

    const addCode = () => {
        if (numRegExp.test(code)) {
            console.log(code)
            dispatch(asyncConfirmCode({ code, user }))
            setCode('')
        }
        if (!numRegExp.test(code)) setCodeError(true)
    }

    codeError && setTimeout(() => setCodeError(false), 6500)

    useEffect(() => {
        if (status2) {
            navigate('/')
            dispatch(setAuthModal())
        }
    }, [status2])

    useEffect(() => {
        console.log(user)
    }, [])

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
                        <div className=" w-[360px] m-auto flex flex-col justify-between pt-[30px] pb-[20px] gap-[40px]">
                            <input
                                value={code}
                                onChange={handleChange}
                                type="text"
                                placeholder={'number'}
                                className={'fourCircle'}
                                maxLength={4}
                                required
                            />
                            {codeError && <p className={"m-auto"}>Код должен быть из 4 цифр</p>}
                        </div>
                        <div className="m-auto">
                            <p>Не получили код? <a href="">Отправить снова</a></p>
                        </div>
                        <Button
                            clickFunc={addCode}
                            text="Подтвердить"
                            classes={"w-[421px] h-[53px] mt-[40px]"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmCode