import HotelName from '../../components/hotelComponents/HotelName/HotelName'
import HotelImages from '../../components/hotelComponents/HotelImages/HotelImages'
import HotelRules from '../../components/hotelComponents/HotelRules/HotelRules'
import HotelDate from '../../components/hotelComponents/HotelDate/HotelDate'
import HotelRooms from '../../components/hotelComponents/HotelRooms/HotelRooms'
import HotelGrade from '../../components/hotelComponents/HotelGrade/HotelGrade'
import { NavLink } from 'react-router-dom'
import arrow from '../../assets/images/arrow2.svg'

const HotelPage = () => {
  return (
    <div className='mx-auto w-[1240px]'>
      <div className="flex items-center mb-[50px]">
        <NavLink to={'/'}>Главная</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        Отель
      </div>
      <div>
        <HotelName />
        <HotelImages />
        <div className="flex justify-between mt-[50px]">
          <HotelRules />
          <HotelDate />
        </div>
        <HotelRooms />
        <HotelGrade />
      </div>
    </div>
  )
}

export default HotelPage
