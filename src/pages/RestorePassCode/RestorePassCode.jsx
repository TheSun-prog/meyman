import {asyncRestoreCode, asyncRestoreEmail, setStatus2} from '../../store/slice/RestoreSlice'
import restorePass from '../../assets/images/restorePassword/restorePass.svg'
import {useDispatch, useSelector} from 'react-redux'
import classes from './RestorePassCode.module.sass'
import React, {useEffect, useState} from 'react'
import logo from '../../assets/images/logo.svg'
import {useNavigate} from 'react-router-dom'
import SweetAlert from 'sweetalert2'


export default function RestorePassCode() {
    const { status2 } = useSelector(state => state.restore)
    const [ code, setCode ] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRestoreCode = (event) => {
        event.preventDefault()
        if (code.trim() !== '') {
            dispatch(asyncRestoreCode({ code }))
        }
    }

    const handleAgainEmail = () => {
        const email = localStorage.getItem('restore_email')
        dispatch(asyncRestoreEmail({ email }))
        SweetAlert.fire({
            icon: `success`,
            title: `200`,
            text: `Код для восстановления отправлен вам на почту, код действителен в течении 5 минут`,
        })
    }

    useEffect(() => {
        if (status2) {
            localStorage.setItem('restore_code', code)
            navigate(`/restorePassNewPass`)
            dispatch(setStatus2(''))
        }
    }, [status2])

    return (
        <div className={classes.RestorePassCode}>
            <div className={classes.RestorePassCode__inner}>
                <img
                    src={logo}
                    alt='logo'
                    className={classes.RestorePassCode__inner__Logo}
                />
                <img
                    src={restorePass}
                    alt='restorePass'
                    className={classes.RestorePassCode__inner__Image}
                />
                <form onSubmit={handleRestoreCode} className={classes.RestorePassCode__inner__Form}>
                    <h4>
                        Напишите код потверждения
                    </h4>
                    <p className={classes.RestorePassCode__inner__Form__p1}>
                        Мы отправили код на вашу электронную почту
                    </p>
                    <input
                        value={code}
                        onChange={event => setCode(event.target.value)}
                        type='text'
                        placeholder={'Введите код'}
                        required
                    />
                    <p className={classes.RestorePassCode__inner__Form__p2}>
                        Не получили код? <span onClick={handleAgainEmail}>Отправить снова</span>
                    </p>
                    <button>
                        Подтвердить
                    </button>
                </form>
            </div>
        </div>
    )
}