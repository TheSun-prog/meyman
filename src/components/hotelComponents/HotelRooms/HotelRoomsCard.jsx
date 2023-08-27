import room from '../../../assets/images/room.png'
import heart from '../../../assets/images/heart2.svg'
import persons from '../../../assets/images/persons.svg'
import bed from '../../../assets/images/bed.svg'
import info from '../../../assets/images/info.svg'
import zavtrak from '../../../assets/images/zavtrak.svg'
import done from '../../../assets/images/done.svg'
import som from '../../../assets/images/som.svg'
import Button from '../../ui/Button/Button'
import { Link } from 'react-router-dom'

const HotelRoomsCard = ({ img, price, area, maxGuest, bedType, classes }) => {
  return (
    <div
      className={`${classes} shadow-2xl px-[18px] py-[14px] rounded-2xl w-[386px]`}
    >
      <div
        className="p-2 m-auto relative rounded-lg w-[350px] h-[320px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <img className="absolute right-2 top-2" src={heart} alt="heart" />
      </div>
      <p className="text-[20px] mt-[20px]">
        {maxGuest > 1 ? 'Двухместный' : 'Одноместный'} номер с{' '}
        {bedType === 'Односпальные'
          ? 'односпальной'
          : bedType === 'Двуспальная'
          ? 'двуспальной'
          : Array.isArray(bedType) &&
            bedType.includes('Односпальные') &&
            bedType.includes('Двуспальная')
          ? ' односпальной и двуспальной '
          : bedType}
        кроватью
      </p>
      <div className="flex">
        <img src={persons} alt="persons" />
        <span className="px-2">
          {maxGuest} {maxGuest > 1 ? 'гостей' : 'гость'}
        </span>
        <img src={info} alt="info" />
        <span>{area}</span>
      </div>
      <div className="flex">
        <img src={bed} alt="persons" />
        <span className="pl-2">
          {Array.isArray(bedType) &&
          bedType.includes('Односпальные') &&
          bedType.includes('Двуспальная')
            ? ' Односпальная и Двуспальная '
            : bedType}
        </span>
      </div>
      <div className="flex mt-[20px]">
        <img className="mr-1" src={zavtrak} alt="zavtrak" />
        <span className=" text-[#228B22]">Завтрак включен</span>
      </div>
      <div className="flex mb-[20px]">
        <img className="mr-1" src={done} alt="zavtrak" />
        <span className="text-[#228B22]">Бесплатная отмена в любое время</span>
      </div>
      <div>
        <p className="text-[16px] text-grey">1 ночь</p>
        <div className="flex">
          <h3 className="text-[24px]">{price}</h3>
          <img src={som} alt="som" />
        </div>
        <p className="text-[16px] mb-[20px] text-grey">Включая налоги сборы</p>
      </div>
    </div>
  )
}

export default HotelRoomsCard
