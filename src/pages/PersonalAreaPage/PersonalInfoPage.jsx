// modules
import { NavLink } from 'react-router-dom'
// icons
import arrow from '../../assets/images/arrow2.svg'

const PersonalInfoPage = () => {
  return (
    <div className="mx-auto w-[1240px]">
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
      <div className="flex justify-between mt-[50px] pb-[25px] border-b border-[#A1A1A1] items-center">
        <div>
          <h2 className="text-[22px] mb-[6px]">Имя</h2>
          <span className="text-[18px] text-[#8C8C8C]">Арууке Жалилова</span>
        </div>
        <p className="text-[22px] px-[10px] border-b border-black h-[41px] cursor-pointer">
          Редактировать
        </p>
      </div>
      <div className="mt-[50px] pb-[25px] border-b border-[#A1A1A1]">
        <h2 className="text-[22px] mb-[6px]">Электронный адрес</h2>
        <span className="text-[18px] text-[#8C8C8C]">
          akuzalilova@gmail.com
        </span>
      </div>
      <div className="flex justify-between mt-[50px] pb-[25px] border-b border-[#A1A1A1] items-center">
        <div>
          <h2 className="text-[22px] mb-[6px]">Номер телефона</h2>
          <span className="text-[18px] text-[#8C8C8C]">
            Добавьте свой номер телефона
          </span>
        </div>
        <p className="text-[22px] px-[10px] border-b border-black h-[41px] cursor-pointer">
          Редактировать
        </p>
      </div>
      <div className="flex justify-between mt-[50px] pb-[25px] border-b border-[#A1A1A1] items-center">
        <div>
          <h2 className="text-[22px] mb-[6px]">Пароль</h2>
          <span className="text-[18px] text-[#8C8C8C]">Арууке Жалилова</span>
        </div>
        <p className="text-[22px] px-[10px] border-b border-black h-[41px] cursor-pointer">
        Редактировать
        </p>
      </div>
    </div>
  )
}

export default PersonalInfoPage
