import passwordHide from '../../assets/images/password-hide.svg'
import passwordShow from '../../assets/images/password-show.svg'
import AuthSlice, {asyncSignUp, setError, setRegError, setStatus} from '../../store/slice/AuthSlice'
import Button from '../../components/ui/Button/Button'
import Input from '../../components/ui/Input/Input'
import Google from '../../assets/images/google.svg'
import React, {useEffect, useState} from 'react'
import back from '../../assets/images/back.svg'
import logo from '../../assets/images/logo.svg'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './RegPage.css'
import RegErrorModal from "../../components/objectRegisterComponents/RegErrorModal/RegErrorModal";


const RegPage = () => {
    const { status, regErrorModal, error } = useSelector(state => state.authSlice)
    const dispatch = useDispatch(), navigate = useNavigate()

    const [ password2, setPassword2 ] = useState(''),
        [ password, setPassword ] = useState(''),
        [ email, setEmail ] = useState(''),
        [ name, setName ] = useState('')

    const [ passConfirmError, setPassConfirmError ] = useState(false),
        [ emailError, setEmailError ] = useState(false),
        [ nameError, setNameError ] = useState(false),
        [ passError, setPassError ] = useState(false),
        [ passShow1, setPassShow1 ] = useState(false),
        [ passShow2, setPassShow2 ] = useState(false)

    const gmailRegExp = /^[a-zA-Z0-9.]{3,60}@gmail.com$/
    const nameRegExp = /^[a-zA-Z0-9]{3,60}$/
    const passRegExp = /^[a-zA-Z0-9]{6,60}$/

    const addSignUp = () => {
        if (gmailRegExp.test(email) && password === password2 &&
            passRegExp.test(password) && nameRegExp.test(name)
        ) {
            const userData = {email: email, username: name, user_type: 'client', password: password}
            console.log(userData) // Собираем обьект из инпутов и передаем его в запрос
            localStorage.setItem('userData', JSON.stringify(userData))
            dispatch(asyncSignUp({ userData }))
        }
        if (!gmailRegExp.test(email)) setEmailError(true)
        if (!nameRegExp.test(name)) setNameError(true)
        if (!passRegExp.test(password)) setPassError(true)
        if (password !== password2) setPassConfirmError(true)
    }

    // Функции для смены видимости пароля
    const handlePassShow1 = () => setPassShow1(passShow1 => passShow1 = !passShow1)
    const handlePassShow2 = () => setPassShow2(passShow2 => passShow2 = !passShow2)

    // Убираем ошибки которые вышли через 8 секунд
    nameError && setTimeout(() => setNameError(false), 8000)
    passError && setTimeout(() => setPassError(false), 8000)
    emailError && setTimeout(() => setEmailError(false), 8000)
    passConfirmError && setTimeout(() => setPassConfirmError(false), 8000)

    // Если запрос успешен то перекидываем в страницу Confirm
    useEffect(() => {
        if (status) {
            setEmail('')
            setName('')
            setPassword('')
            setPassword2('')
            navigate('/confirmCode')
            dispatch(setStatus(''))
        }
    }, [status])

    useEffect(() => {
        if (error) {
            dispatch(setRegError())
            dispatch(setError(''))
        }
    }, [error])

    return (
        <>
            {regErrorModal && <RegErrorModal/>}
            <div>
                <span className='flex justify-self-start '>
                    <a href='' onClick={() => navigate('/')}>
                        <img src={back} alt=''/>
                    </a>
                </span>
                <span className='flex justify-center'><img className='justify-self-center' src={logo} alt=''/></span>
            </div>
            <div className='AuthPage'>
                <div className='Login'>
                    <div className='container'>
                        <p className='signIn'>Зарегистрироваться</p>
                        <div className='flex flex-col gap-[10px]'>
                            <label htmlFor='email'>Имя и фамилия</label>
                            <input
                                value={name}
                                onChange={event => setName(event.target.value)}
                                type='text'
                                placeholder={'Введите свое имя'}
                                className={'formInput'}
                                required
                            />
                            {nameError && <p className={'errorMessage'}>Поле имени должен содержать минимум 3 символа</p>}
                        </div>
                        <div className='flex flex-col gap-[10px] pt-[18px]'>
                            <label htmlFor='email'>Адрес Электронной почты</label>
                            <input
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                type='text'
                                placeholder={'Введите адрес электронной почты'}
                                className={'formInput'}
                                required
                            />
                            {emailError && <p className={'errorMessage'}>Почта должна иметь минимум 3 символа и @gmail.com</p>}
                        </div>
                        <div className='inputBoxes'>
                            <label htmlFor='password'>Пароль</label>
                            <input
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                                type={passShow1 ? 'text' : 'password'}
                                placeholder={'Введите пароль'}
                                className={'formInput'}
                                required
                            />
                            {passShow1
                                ? <img
                                    src={passwordShow}
                                    alt="passwordShow"
                                    onClick={handlePassShow1}
                                    className={'passwordIcon'}
                                />
                                : <img
                                    src={passwordHide}
                                    alt="passwordHide"
                                    onClick={handlePassShow1}
                                    className={'passwordIcon'}
                                />
                            }
                            {passError && <p className={'errorMessage'}>Пароль должен содержать минимум 6 символа!</p>}
                        </div>
                        <div className='inputBoxes'>
                            <label htmlFor='password'>Подтвердите пароль</label>
                            <input
                                value={password2}
                                onChange={event => setPassword2(event.target.value)}
                                type={passShow2 ? 'text' : 'password'}
                                placeholder={'Введите пароль'}
                                className={'formInput'}
                                required
                            />
                            {passShow2
                                ? <img
                                    src={passwordShow}
                                    alt="passwordShow"
                                    onClick={handlePassShow2}
                                    className={'passwordIcon'}
                                />
                                : <img
                                    src={passwordHide}
                                    alt="passwordHide"
                                    onClick={handlePassShow2}
                                    className={'passwordIcon'}
                                />
                            }
                            {passConfirmError && <p className={'errorMessage'}>Пароли не совпадают!</p>}
                        </div>
                        <Button
                            clickFunc={addSignUp}
                            classes={'mt-[30px]'}
                            width={520}
                            text={'Зарегистрироваться'}
                        />
                        <p className='Or'>
                            <span className='line_1'></span>
                            или
                            <span className='line_2'></span>
                        </p>
                        <div className='flex justify-center flex-col items-center'>
                            <p className='pt-[10px]'>Войдите через соц.сеть</p>
                            <span className='pt-[20px] pb-[35px]'><img src={Google} alt=''/></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegPage