// modules
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import 'animate.css'
// icons
import arrow from '../../assets/images/arrow2.svg'
// components
import Input from '../../components/ui/Input/Input'
import Button from '../../components/ui/Button/Button'

const PersonalInfoPage = () => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newPass, setNewPass] = useState({
    currPass: '',
    newPass: '',
    confPass: ''
  })

  const [dropDownName, setDropDownName] = useState(false)
  const [dropDownPhone, setDropDownPhone] = useState(false)
  const [dropDownPass, setDropDownPass] = useState(false)

  const [errorName, setErrorName] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)
  const [errorCurrPass, setErrorCurrPass] = useState(false)
  const [errorNewPass, setErrorNewPass] = useState(false)
  const [errorConfPass, setErrorConfPass] = useState(false)
  const [errorLengthPass, setErrorLengthPass] = useState(false)

  const activeDropDownMenu = () => {
    setDropDownName(prev => !prev)
  }
  const activeDropDownPhone = () => {
    setDropDownPhone(prev => !prev)
  }
  const activeDropDownPass = () => {
    setDropDownPass(prev => !prev)
  }

  const handleChangeName = e => {
    setNewName(e.target.value)
  }
  const handleChangePhone = e => {
    setNewPhone(e.target.value)
  }
  const handleChangeCurrPass = e => {
    setNewPass(prev => ({
      ...prev,
      currPass: e.target.value
    }))
  }
  const handleChangeNewPass = e => {
    setNewPass(prev => ({
      ...prev,
      newPass: e.target.value
    }))
  }
  const handleChangeConfPass = e => {
    setNewPass(prev => ({
      ...prev,
      confPass: e.target.value
    }))
  }

  const handleFocusName = () => {
    setErrorName(false)
  }
  const handleFocusPhone = () => {
    setErrorPhone(false)
    if (newPhone === '') {
      setNewPhone('+996')
    }
  }
  const handleFocusNewPass = () => {
    setErrorNewPass(false)
    setErrorConfPass(false)
    setErrorLengthPass(false)
  }
  const handleFocusConfPass = () => {
    setErrorNewPass(false)
    setErrorConfPass(false)
  }

  const handleBlurInput = () => {
    if (newPhone === '+996') {
      setNewPhone('')
    }
  }

  const handleSubmitName = e => {
    e.preventDefault()
    const regex = /^\s*[a-zA-Zа-яА-Я]+\s+[a-zA-Zа-яА-Я]+\s*$/
    if (regex.test(newName)) {
      setErrorName(false)
    } else {
      setErrorName(true)
      setNewName('')
    }
  }
  const handleSubmitPhone = e => {
    e.preventDefault()
    const regex =
      /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/
    if (regex.test(newPhone)) {
      setErrorPhone(false)
    } else {
      setErrorPhone(true)
      setNewPhone('')
    }
  }
  const handleSubmitPass = e => {
    const regex = /^[a-zA-Zа-яА-Я]{6,}$/
    e.preventDefault()
    if (newPass.newPass === newPass.confPass) {
      console.log('good')
    } else {
      console.log('wrong')
      setErrorNewPass(true)
      setErrorConfPass(true)
      setNewPass(prev => ({
        ...prev,
        newPass: '',
        confPass: ''
      }))
    }
    if (!regex.test(newPass.newPass)) {
      setNewPass(prev => ({
        ...prev,
        newPass: ''
      }))
      setErrorLengthPass(true)
    }
  }

  return (
    <div className="mx-auto w-[1240px] pb-[263px]">
      <div className="flex items-center mb-[50px] mt-[43px] text-[16px]">
        <NavLink to={'/'}>Главная</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={`/personal-area`}>Личный кабинет</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={`/personal-area/personal-information`}>
          Личная информация
        </NavLink>
      </div>
      <h1 className="text-[28px]">Личная информация</h1>
      <div className="mt-[50px] pb-[25px] border-b border-[#A1A1A1]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[22px] mb-[6px]">Имя</h2>
            <span className="text-[18px] text-[#8C8C8C]">
              {dropDownName ? 'Укажите ваше имя и фамилию' : 'Арууке Жалилова'}
            </span>
          </div>
          <p
            onClick={activeDropDownMenu}
            className="text-[22px] px-[10px] border-b border-black h-[41px] cursor-pointer"
          >
            {dropDownName ? 'Отменить' : 'Редактировать'}
          </p>
        </div>
        <form
          onSubmit={handleSubmitName}
          className={`flex flex-col transition-all h-0 overflow-hidden ${
            dropDownName ? '!h-[210px] mt-[52px]' : ''
          }`}
        >
          <label className="text-[18px] mb-[8px]" htmlFor="nameInput">
            Имя и Фамилия
          </label>
          <Input
            value={newName}
            onChange={handleChangeName}
            onFocus={handleFocusName}
            isError={errorName}
            id={'nameInput'}
            text={`${
              errorName
                ? 'Введите имя и фамилию через пробел'
                : 'Арууке Жалилова'
            }`}
            classes={`mb-[52px] ${
              errorName ? 'animate__animated animate__headShake' : ''
            }`}
          />
          <Button
            text={'Сохранить'}
            classes={'px-[70px] py-[14px] w-[235px] shadow-lg z-50'}
          />
        </form>
      </div>
      <div className="mt-[50px] pb-[25px] border-b border-[#A1A1A1]">
        <h2 className="text-[22px] mb-[6px]">Электронный адрес</h2>
        <span className="text-[18px] text-[#8C8C8C]">
          akuzalilova@gmail.com
        </span>
      </div>
      <div className="mt-[50px] pb-[25px] border-b border-[#A1A1A1]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[22px] mb-[6px]">Номер телефона</h2>
            <span className="text-[18px] text-[#8C8C8C]">
              Добавьте свой номер телефона
            </span>
          </div>
          <p
            onClick={activeDropDownPhone}
            className="text-[22px] px-[10px] border-b border-black h-[41px] cursor-pointer"
          >
            {dropDownPhone ? 'Отменить' : 'Редактировать'}
          </p>
        </div>
        <form
          onSubmit={handleSubmitPhone}
          className={`flex flex-col transition-all h-0 overflow-hidden ${
            dropDownPhone ? '!h-[210px] mt-[52px]' : ''
          }`}
        >
          <label className="text-[18px] mb-[8px]" htmlFor="phoneInput">
            Номер телефона
          </label>
          <Input
            value={newPhone}
            type="tel"
            onChange={handleChangePhone}
            onFocus={handleFocusPhone}
            onBlur={handleBlurInput}
            isError={errorPhone}
            id={'phoneInput'}
            text={`${
              errorPhone
                ? 'Введите номер в формате +996-XXX-XXX-XXX'
                : '+996-XXX-XXX-XXX'
            }`}
            classes={`mb-[52px] ${
              errorPhone ? 'animate__animated animate__headShake' : ''
            }`}
          />
          <Button
            text={'Сохранить'}
            classes={'px-[70px] py-[14px] w-[235px] shadow-lg z-50'}
          />
        </form>
      </div>
      <div className="mt-[50px] pb-[25px] border-b border-[#A1A1A1]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[22px] mb-[6px]">Пароль</h2>
            <span className="text-[18px] text-[#8C8C8C]">Ваш пароль</span>
          </div>
          <p
            onClick={activeDropDownPass}
            className="text-[22px] px-[10px] border-b border-black h-[41px] cursor-pointer"
          >
            {dropDownPass ? 'Отменить' : 'Редактировать'}
          </p>
        </div>
        <form
          onSubmit={handleSubmitPass}
          className={`flex flex-col transition-all h-0 overflow-hidden ${
            dropDownPass ? '!h-[420px] mt-[52px]' : ''
          }`}
        >
          <label className="text-[18px] mb-[8px]" htmlFor="currentPass">
            Текущий пароль
          </label>
          <Input
            value={newPass.currPass}
            id={'currentPass'}
            type="password"
            text={'Введите ваш текущий пароль'}
            classes={`mb-[20px]  ${
              errorCurrPass ? 'animate__animated animate__headShake' : ''
            }`}
            min={6}
            onChange={handleChangeCurrPass}
          />
          <label className={`text-[18px] mb-[8px]`} htmlFor="newPass">
            Новый пароль
          </label>
          <Input
            value={newPass.newPass}
            isError={errorNewPass || errorLengthPass}
            id={'newPass'}
            type="password"
            text={`${
              errorNewPass
                ? 'Пароли не совпадают'
                : 'Введите ваш новый пароль' && errorLengthPass
                ? 'Только буквы и не менее 6 символов'
                : 'Введите ваш новый пароль'
            }`}
            classes={`mb-[20px] ${
              errorNewPass
                ? 'animate__animated animate__headShake'
                : '' || errorLengthPass
                ? 'animate__animated animate__headShake'
                : ''
            }`}
            min={6}
            onChange={handleChangeNewPass}
            onFocus={handleFocusNewPass}
          />
          <label className="text-[18px] mb-[8px]" htmlFor="confirmPass">
            Подтвердите пароль
          </label>
          <Input
            value={newPass.confPass}
            isError={errorConfPass}
            id={'confirmPass'}
            type="password"
            text={`${
              errorConfPass
                ? 'Пароли не совпадают'
                : 'Подтвердите ваш новый пароль'
            }`}
            classes={`mb-[52px] ${
              errorNewPass ? 'animate__animated animate__headShake' : ''
            }`}
            min={6}
            onChange={handleChangeConfPass}
            onFocus={handleFocusConfPass}
          />
          <Button
            text={'Сохранить'}
            classes={'px-[70px] py-[14px] w-[235px] shadow-lg z-50'}
          />
        </form>
      </div>
    </div>
  )
}

export default PersonalInfoPage
