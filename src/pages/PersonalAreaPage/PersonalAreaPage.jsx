// modules
import { NavLink } from 'react-router-dom'
// icons
import arrow from '../../assets/images/arrow2.svg'
import user from '../../assets/images/user.svg'
import email from '../../assets/images/email.svg'
import person from '../../assets/images/person_private.svg'
import booking from '../../assets/images/booking_private.svg'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getChangeUserName } from '../../store/slice/changeUserNameSlice'

const PersonalAreaPage = () => {
  const dispatch = useDispatch()
  const {getData} = useSelector(state => state.changeUserName)

  useEffect(() => {
    dispatch(getChangeUserName())
  }, [])
  return (
    <div className="mx-auto w-[1240px]">
      <div className="flex items-center mb-[50px] mt-[43px] text-[16px]">
        <NavLink to={'/'}>Главная</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={`/personal-area`}>Личный кабинет</NavLink>
      </div>
      <h1 className="text-[28px]">Личный кабинет</h1>
      <div className="flex items-center mb-[5px] mt-[14px] text-[20px]">
        <img className="mr-[10px]" src={user} alt="user" />
        <span>{getData?.username}</span>
      </div>
      <div className="flex items-center text-[20px]">
        <img className="mr-[10px]" src={email} alt="email" />
        <span>{getData?.email}</span>
      </div>
      <div className="flex gap-5 mt-[80px]">
        <NavLink to={'/personal-area/personal-info'}>
          <div className="shadow-xl w-[420px] rounded-xl py-[17px] px-5 cursor-pointer">
            <img src={person} alt="person" />
            <h3 className="text-[22px] mt-5 ">Личная информация</h3>
            <span className="text-[18px] text-[#A1A1A1]">
              Предоставьте личные контактные данные
            </span>
          </div>
        </NavLink>
        <div className="shadow-xl w-[420px] rounded-xl py-[17px] px-5 cursor-pointer">
          <img src={booking} alt="booking" />
          <h3 className="text-[22px] mt-5 ">Бронирования</h3>
          <span className="text-[18px] text-[#A1A1A1]">
            Здесь будут размещены ваши бронирования
          </span>
        </div>
      </div>
    </div>
  )
}

export default PersonalAreaPage
