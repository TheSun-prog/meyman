import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import 'animate.css';
import arrow from '../../assets/images/arrow2.svg';
import Input from '../../components/ui/Input/Input';
import Button from '../../components/ui/Button/Button';
import { postChangePassword } from '../../store/slice/changePasswordSlice'
import { getChangeUserName } from '../../store/slice/changeUserNameSlice'
import { patchChangeUserName } from '../../store/slice/changeUserNameSlice'
import { patchChangePhone } from '../../store/slice/changePhoneSlice'

const PersonalInfoPage = () => {
  const { getData, isLoading, isError } = useSelector((state) => state.changeUserName);
  const dispatch = useDispatch();

  const [newName, setNewName] = useState(getData?.username);
  const [newPhone, setNewPhone] = useState(getData?.phone);
  const [newPass, setNewPass] = useState({
    currPass: '',
    newPass: '',
    confPass: '',
  });

  const [dropDownName, setDropDownName] = useState(false);
  const [dropDownPhone, setDropDownPhone] = useState(false);
  const [dropDownPass, setDropDownPass] = useState(false);

  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorCurrPass, setErrorCurrPass] = useState(false);
  const [errorNewPass, setErrorNewPass] = useState(false);
  const [errorConfPass, setErrorConfPass] = useState(false);
  const [errorLengthPass, setErrorLengthPass] = useState(false);

  const successMessage = (messageText) => {
    message.success(messageText, 5);
  };

  const errorMessage = (messageText) => {
    message.error(messageText, 5);
  };

  const toggleDropDown = (stateSetter) => {
    stateSetter((prev) => !prev);
  };

  const handleChange = (stateSetter, value) => {
    stateSetter(value);
  };

  const handleFocus = (stateSetter) => {
    stateSetter(false);
  };

  const handleBlurInput = () => {
    if (newPhone === '+996') {
      setNewPhone('');
    }
  };

  const handleSubmitName = async (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Zа-яА-Я\s]{3,}$/;

    if (regex.test(newName)) {
      setErrorName(false);
      try {
        const response = await dispatch(patchChangeUserName(newName));

        if (patchChangeUserName.fulfilled.match(response)) {
          successMessage('Имя успешно изменено!');
          dispatch(getChangeUserName())
        } else {
          errorMessage('Ошибка при изменении имени пользователя');
          console.error('Ошибка при смене имени:', response.error.message);
        }
      } catch (error) {
        errorMessage('Ошибка при изменении имени пользователя');
        console.error('Ошибка при смене имени:', error);
      }
    } else {
      setErrorName(true);
      setNewName('');
    }
  };

  const handleSubmitPhone = async (e) => {
    e.preventDefault();
    const regex =
      /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/;

    if (regex.test(newPhone)) {
      setErrorPhone(false);
      try {
        const response = await dispatch(patchChangePhone(newPhone));

        if (patchChangePhone.fulfilled.match(response)) {
          successMessage('Номер телефона успешно изменен!');
        } else {
          errorMessage('Ошибка при изменении Номера телефона');
          console.error('Ошибка при смене номера телефона:', response.error.message);
        }
      } catch (error) {
        errorMessage('Ошибка при изменении Номера телефона');
        console.error('Ошибка при смене номера телефона:', error);
      }
    } else {
      setErrorPhone(true);
      setNewPhone('');
    }
  };

  const handleSubmitPass = async (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Zа-яА-Я]{6,20}$/;

    if (newPass.newPass === newPass.confPass && regex.test(newPass.newPass)) {
      try {
        const response = await dispatch(postChangePassword(newPass));

        if (postChangePassword.fulfilled.match(response)) {
          successMessage('Пароль успешно изменен!');
        } else {
          errorMessage('Неверный старый пароль!');
          console.error('Ошибка при смене пароля:', response.error.message);
        }
      } catch (error) {
        errorMessage('Неверный старый пароль!');
        console.error('Ошибка при смене пароля:', error);
      }
    } else {
      setErrorNewPass(true);
      setErrorConfPass(true);
      setNewPass({
        currPass: '',
        newPass: '',
        confPass: '',
      });
    }
  };

  useEffect(() => {
    dispatch(getChangeUserName());
  }, []);

  return (
    <div className="mx-auto w-[1240px] pb-[263px]">
      <div className="flex items-center mb-[50px] mt-[43px] text-[16px]">
        <NavLink to={'/'}>Главная</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={`/personal-area`}>Личный кабинет</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={`/personal-area/personal-info`}>Личная информация</NavLink>
      </div>
      <h1 className="text-[28px]">Личная информация</h1>
      <div className="mt-[50px] pb-[25px] border-b border-[#A1A1A1]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[22px] mb-[6px]">Имя</h2>
            <span className="text-[18px] text-[#8C8C8C]">
              {dropDownName ? 'Укажите ваше имя и фамилию' : getData?.username}
            </span>
          </div>
          <p
            onClick={() => toggleDropDown(setDropDownName)}
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
            onChange={(e) => handleChange(setNewName, e.target.value)}
            onFocus={() => handleFocus(setErrorName)}
            isError={errorName}
            id={'nameInput'}
            text={errorName ? 'Имя и фамилия, не менее 3ех символов' : getData?.username}
            classes={`mb-[52px] ${errorName ? 'animate__animated animate__headShake' : ''}`}
          />
          <Button text={'Сохранить'} classes={'px-[70px] py-[14px] w-[235px] shadow-lg z-50'} />
        </form>
      </div>
      <div className="mt-[50px] pb-[25px] border-b border-[#A1A1A1]">
        <h2 className="text-[22px] mb-[6px]">Электронный адрес</h2>
        <span className="text-[18px] text-[#8C8C8C]">{getData?.email}</span>
      </div>
      <div className="mt-[50px] pb-[25px] border-b border-[#A1A1A1]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[22px] mb-[6px]">Номер телефона</h2>
            <span className="text-[18px] text-[#8C8C8C]">Добавьте свой номер телефона</span>
          </div>
          <p
            onClick={() => toggleDropDown(setDropDownPhone)}
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
            onChange={(e) => handleChange(setNewPhone, e.target.value)}
            onFocus={() => handleFocus(setErrorPhone)}
            onBlur={handleBlurInput}
            isError={errorPhone}
            id={'phoneInput'}
            text={errorPhone ? 'Введите номер в формате +996-XXX-XXX-XXX' : '+996-XXX-XXX-XXX'}
            classes={`mb-[52px] ${errorPhone ? 'animate__animated animate__headShake' : ''}`}
          />
          <Button text={'Сохранить'} classes={'px-[70px] py-[14px] w-[235px] shadow-lg z-50'} />
        </form>
      </div>
      <div className="mt-[50px] pb-[25px] border-b border-[#A1A1A1]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[22px] mb-[6px]">Пароль</h2>
            <span className="text-[18px] text-[#8C8C8C]">Ваш пароль</span>
          </div>
          <p
            onClick={() => toggleDropDown(setDropDownPass)}
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
            classes={`mb-[20px] ${errorCurrPass ? 'animate__animated animate__headShake' : ''}`}
            min={6}
            onChange={(e) => handleChange(setNewPass, { ...newPass, currPass: e.target.value })}
          />
          <label className={`text-[18px] mb-[8px]`} htmlFor="newPass">
            Новый пароль
          </label>
          <Input
            value={newPass.newPass}
            isError={errorNewPass || errorLengthPass}
            id={'newPass'}
            type="password"
            text={
              errorNewPass
                ? 'Пароли не совпадают'
                : errorLengthPass
                ? 'Только буквы и от 6 до 20 символов'
                : 'Введите ваш новый пароль'
            }
            classes={`mb-[20px] ${
              errorNewPass || errorLengthPass
                ? 'animate__animated animate__headShake'
                : ''
            }`}
            min={6}
            onChange={(e) => handleChange(setNewPass, { ...newPass, newPass: e.target.value })}
            onFocus={() => handleFocus(setErrorNewPass)}
          />
          <label className="text-[18px] mb-[8px]" htmlFor="confirmPass">
            Подтвердите пароль
          </label>
          <Input
            value={newPass.confPass}
            isError={errorConfPass}
            id={'confirmPass'}
            type="password"
            text={errorConfPass ? 'Пароли не совпадают' : 'Подтвердите ваш новый пароль'}
            classes={`mb-[52px] ${
              errorNewPass ? 'animate__animated animate__headShake' : ''
            }`}
            min={6}
            onChange={(e) => handleChange(setNewPass, { ...newPass, confPass: e.target.value })}
            onFocus={() => handleFocus(setErrorConfPass)}
          />
          <Button text={'Сохранить'} classes={'px-[70px] py-[14px] w-[235px] shadow-lg z-50'} />
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
