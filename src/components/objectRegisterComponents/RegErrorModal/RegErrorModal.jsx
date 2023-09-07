import {setRegError} from '../../../store/slice/AuthSlice'
import classes from './RegErrorModal.module.sass'
import {useDispatch} from 'react-redux'
import React from 'react'


export default function RegErrorModal() {
    const dispatch = useDispatch()

    return (
        <>
            <div className={classes.RegErrorModalWrapper} onClick={() => dispatch(setRegError())}></div>
            <div className={classes.RegErrorModalContent}>
                <h3>Данная почта занята</h3>
                <h4>Эта электронная почта уже зарегистрированна</h4>
                <p>Введите другую электронную почту или войдите в акккаунт</p>
            </div>
        </>
    )
}