import restorePasswordIcon from '../../assets/images/restorePassword/restorePassword.svg'
import {asyncRestoreEmail, setStatus} from '../../store/slice/RestoreSlice'
import {useDispatch, useSelector} from 'react-redux'
import classes from './RestorePassEmail.module.sass'
import React, {useEffect, useState} from 'react'
import logo from '../../assets/images/logo.svg'
import {useNavigate} from 'react-router-dom'
import SweetAlert from "sweetalert2";


export default function RestorePassEmail () {
    const { status } = useSelector(state => state.restore)
    const dispatch = useDispatch(), navigate = useNavigate()
    const gmailRegExp = /^[a-zA-Z0-9.]{3,60}@gmail.com$/
    const [ emailError, setEmailError ] = useState(false)
    const [ email, setEmail ] = useState('')

    const handleRestoreEmail = (event) => {
        event.preventDefault()
        if (email.trim() !== '' && gmailRegExp.test(email)) {
            dispatch(asyncRestoreEmail({ email }))
        }
        if (!gmailRegExp.test(email)) setEmailError(true)
    }

    useEffect(() => {
        if (emailError) {
            setTimeout(() => {
                setEmailError(false)
            }, 5000)
        }
    }, [emailError])

    useEffect(() => {
        if (status) {
            localStorage.setItem('restore_email', email)
            setEmail('')
            navigate('/restorePassCode')
            dispatch(setStatus(''))
            SweetAlert.fire({
                icon: `success`,
                title: `200`,
                text: `Код для восстановления отправлен вам на почту, код действителен в течении 5 минут`,
            })
        }
    }, [status])

    return (
        <div className={classes.RestorePassEmail}>
            <div className={classes.RestorePassEmail__inner}>
                <img
                    src={logo} alt='logo'
                    className={classes.RestorePassEmail__inner__Logo}
                />
                <img
                    src={restorePasswordIcon}
                    alt='restorePasswordIcon'
                    className={classes.RestorePassEmail__inner__Image}
                />
                <form onSubmit={handleRestoreEmail} className={classes.RestorePassEmail__inner__Form}>
                    <h4>
                        Забыли пароль?
                    </h4>
                    <p className={classes.RestorePassEmail__inner__Form__p1}>
                        Мы отправим код на вашу электронную почту
                    </p>
                    <input
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        type='text'
                        placeholder={'Введите свой адрес электронной почты'}
                        required
                    />
                    {emailError && (
                        <p className={classes.RestorePassEmail__inner__Form__gmailError}>
                            Почта должна содержать минимум 3 символа и @gmail.com
                        </p>
                    )}
                    <button>
                        Получить код
                    </button>
                </form>
            </div>
        </div>
    )
}