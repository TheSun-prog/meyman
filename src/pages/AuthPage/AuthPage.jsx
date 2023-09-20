import {asyncLogin, setError3, setStatus3} from '../../store/slice/AuthSlice'
import passHide from '../../assets/images/password-hide.svg'
import passShow from '../../assets/images/password-show.svg'
import {useDispatch, useSelector} from 'react-redux'
import Google from '../../assets/images/google.svg'
import React, {useEffect, useState} from 'react'
import back from '../../assets/images/back.svg'
import logo from '../../assets/images/logo.svg'
import {useNavigate} from 'react-router-dom'
import './AuthPage.css'


const AuthPage = () => {
    const { status3, error3 } = useSelector(state => state.authSlice)
    const dispatch = useDispatch(), navigate = useNavigate()
    const [ emailRegError, setEmailRegError ] = useState(false)
    const [ passRegError, setPassRegError ] = useState(false)
    const [ emailError, setEmailError ] = useState(false)
    const [ isShow, setIsShow ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')

    const gmailRegExp = /^[a-zA-Z0-9.]{3,60}@gmail.com$/
    const passRegExp = /^[a-zA-Z0-9]{6,60}$/

    const SignIn = event => {
        event.preventDefault()
        if (gmailRegExp.test(email) && passRegExp.test(pass)) {
            const user = {email: email, password: pass}
            dispatch(asyncLogin({ user }))
        }
        if (!gmailRegExp.test(email)) setEmailRegError(true)
        if (!passRegExp.test(pass)) setPassRegError(true)
    }

    useEffect(() => {
        emailRegError && setTimeout(() => setEmailRegError(false), 5000)
    }, [emailRegError])

    useEffect(() => {
        passRegError && setTimeout(() => setPassRegError(false), 5000)
    }, [passRegError])

    useEffect(() => {
        if (status3) {
            setEmail('')
            setPass('')
            navigate('/')
            setTimeout(() => dispatch(setStatus3('')), 100)
        }
    }, [status3])

    useEffect(() => {
        if (error3) {
            setEmailError(true)
            setTimeout(() => setEmailError(false), 5000)
            setTimeout(() => dispatch(setError3(false)), 100)
        }
    }, [error3])

    return (
        <>
            <div>
                <span className='flex justify-self-star t '>
                    <a href='' onClick={() => navigate('/')}>
                        <img src={back} alt=''/>
                    </a>
                </span>
                <span className='flex justify-center'><img className='justify-self-center' src={logo} alt=''/></span>
            </div>
            <div className='AuthPage'>
                <form onSubmit={SignIn} className={'AuthForm'}>
                    <h3>Войти</h3>
                    {emailError && (
                        <p className={'AuthEmailError'}>Данной почты не существует!</p>
                    )}
                    {emailRegError && (
                        <p className={'AuthEmailError'}>Почта должна содержать минимум 3 символа и @gmail.com</p>
                    )}
                    <p className={'AuthP'}>Адрес электронной почты</p>
                    <label className={'AuthLabel'}>
                        <input
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            type='text'
                            placeholder={'Введите свой адрес электронной почты '}
                            className={'AuthInput'}
                            required
                        />
                    </label>
                    {passRegError && (
                        <p className={'AuthEmailError'}>Пароль должен содержать минимум 6 символов!</p>
                    )}
                    <p className={'AuthP'}>Пароль</p>
                    <label className={'AuthLabel'}>
                        <input
                            value={pass}
                            onChange={event => setPass(event.target.value)}
                            type={isShow ? 'text' : 'password'}
                            placeholder={'Введите пароль'}
                            className={'AuthInput'}
                            required
                        />
                        {isShow
                            ? <img className='' src={passHide} alt='passHide' onClick={() => setIsShow(false)}/>
                            : <img className='' src={passShow} alt='passShow' onClick={() => setIsShow(true)}/>
                        }
                    </label>
                    <p className={'losePassword'} onClick={() => navigate('/restorePassEmail')}>
                        Забыли пароль?
                    </p>
                    <button className={'logButton'}>Войти</button>
                    <div className={'AuthAnd'}>
                        <div className={'AuthAndDivider'}></div>
                        <p>или</p>
                        <div className={'AuthAndDivider'}></div>
                    </div>
                    <p className={'AuthLogDivider'}>Войдите через соц.сеть</p>
                    <img className={'AuthGoogleImage'} src={Google} alt='Google'/>
                </form>
            </div>
        </>
    )
}

export default AuthPage