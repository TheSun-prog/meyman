import restorePass from '../../assets/images/restorePassword/restorePass.svg'
import {asyncRestoreNewPass} from '../../store/slice/RestoreSlice'
import passHideImage from '../../assets/images/password-hide.svg'
import passShowImage from '../../assets/images/password-show.svg'
import classes from './RestorePassNewPass.module.sass'
import logo from '../../assets/images/logo.svg'
import {useDispatch} from 'react-redux'
import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";


export default function RestorePassNewPass() {
    const [ password, setPassword ] = useState('')
    const [ password2, setPassword2 ] = useState('')
    const [ passShow, setPassShow ] = useState(false)
    const [ passShow2, setPassShow2 ] = useState(false)
    const [ passError, setPassError ] = useState(false)
    const [ passError2, setPassError2 ] = useState(false)
    const passRegExp = /^[a-zA-Z0-9]{6,60}$/
    const dispatch = useDispatch(), navigate = useNavigate()

    const handleRestoreNewPass = (event) => {
        event.preventDefault()
        if (password === password2 && passRegExp.test(password)) {
            const pass = password
            dispatch(asyncRestoreNewPass({ pass }))
            navigate('/')
        }
        if (!passRegExp.test(password)) setPassError(true)
        if (password !== password2) setPassError2(true)
    }

    const handleShow = () => setPassShow(passShow => passShow = !passShow)
    const handleShow2 = () => setPassShow2(passShow2 => passShow2 = !passShow2)

    useEffect(() => {
        if (passError) {
            setTimeout(() => {
                setPassError(false)
            }, 5000)
        }
    }, [passError])

    useEffect(() => {
        if (passError2) {
            setTimeout(() => {
                setPassError2(false)
            }, 5000)
        }
    }, [passError2])

    return (
        <div className={classes.RestorePassNewPass}>
            <div className={classes.RestorePassNewPass__inner}>
                <img
                    src={logo}
                    alt='logo'
                    className={classes.RestorePassNewPass__inner__Logo}
                />
                <img
                    src={restorePass}
                    alt='restorePass'
                    className={classes.RestorePassNewPass__inner__Image}
                />
                <div className={classes.RestorePassNewPass__inner__TextBox}>
                    <h4>
                        Обновите пароль
                    </h4>
                    <p>
                        Введите 6-20 символов. Пароль
                        должен содержать буквы и цифры
                    </p>
                </div>
                <form onSubmit={handleRestoreNewPass} className={classes.RestorePassNewPass__inner__Form}>
                    {passError && (
                        <p className={classes.RestorePassNewPass__inner__Form__PassError}>
                            Пароль должен содержать минимум 6 символов!
                        </p>
                    )}
                    <p>Пароль</p>
                    <div className={classes.RestorePassNewPass__inner__Form__inputBox}>
                        <input
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            type={passShow ? 'text' : 'password'}
                            placeholder={'Введите пароль'}
                            required
                        />
                        {passShow
                            ? <img src={passHideImage} alt='passHideImage' onClick={handleShow}/>
                            : <img src={passShowImage} alt='passShowImage' onClick={handleShow}/>
                        }
                    </div>
                    {passError2 && (
                        <p className={classes.RestorePassNewPass__inner__Form__PassError}>
                            Пароль не совпадают!
                        </p>
                    )}
                    <p>Подтвердите пароль</p>
                    <div className={classes.RestorePassNewPass__inner__Form__inputBox}>
                        <input
                            value={password2}
                            onChange={event => setPassword2(event.target.value)}
                            type={passShow2 ? 'text' : 'password'}
                            placeholder={'Введите пароль повторно'}
                            required
                        />
                        {passShow2
                            ? <img src={passHideImage} alt='passHideImage' onClick={handleShow2}/>
                            : <img src={passShowImage} alt='passShowImage' onClick={handleShow2}/>
                        }
                    </div>
                    <button>
                        Подтвердить
                    </button>
                </form>
            </div>
        </div>
    )
}