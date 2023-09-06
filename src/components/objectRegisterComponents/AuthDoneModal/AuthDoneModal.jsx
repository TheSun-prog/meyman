import { setAuthModal } from '../../../store/slice/AuthSlice'
import classes from './AuthDoneModal.module.sass'
import { useDispatch } from 'react-redux'
import React from 'react'


export default function AuthDoneModal() {
    const user = JSON.parse(localStorage.getItem('userData'))
    const dispatch = useDispatch()

    return (
        <>
            <div className={classes.AuthDoneModal__wrapper}></div>
            <div className={classes.AuthDoneModal__Content}>
                <h4>Добро пожаловать, {user.username}!</h4>
                <p>
                    Зарегистрировавшись, вы получаете доступ к лучшим
                    предложениям и возможность бронирования онлайн.
                    Мы рады приветствовать вас!
                </p>
                <button onClick={() => dispatch(setAuthModal())}>Продолжить</button>
            </div>
        </>
    )
}