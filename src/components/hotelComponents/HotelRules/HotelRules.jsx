// icons
import wifiIcon from '../../../assets/images/wifi.svg'
import fit from '../../../assets/images/fit.svg'
import bar from '../../../assets/images/bar.svg'
import transfer from '../../../assets/images/transfer.svg'
import parking from '../../../assets/images/parking.svg'
import pool from '../../../assets/images/pool.svg'
import spa from '../../../assets/images/spa.svg'
import dish from '../../../assets/images/dish.svg'
import arrow from '../../../assets/images/arrow.svg'
// ui
import Button from '../../ui/Button/Button'

const HotelRules = () => {
  return (
    <div className="flex-1">
      <div className="max-w-[566px]">
        <h5 className="text-[28px] mb-[20px]">Порядок проживания в отеле</h5>
        <p className="text-[22px] mb-[10px]">Время заезда/выезда</p>
        <p className="text-[18px] mb-[5px]">Заезд с 15:00 до 00:00</p>
        <p className="text-[18px] mb-[20px]">Выезд с 00:00 до 12:00</p>
        <h5 className="text-[22px] mb-[10px]">Домашние животные</h5>
        <div className="flex items-center justify-between">
          <p className="text-[18px]">
            Размещение доммашних животных допускается
          </p>
          <div className="bg-[#A1A1A1] px-[15px] h-[19px] rounded-[21px] flex justify-center">
            <span className="text-white text-[12px]">Платно</span>
          </div>
        </div>
      </div>
      <h5 className="mt-[80px] mb-[25px] text-[28px]">
        Удобства и услуги отеля
      </h5>
      <ul className="pb-[10px] flex justify-between max-w-[684px]">
        <div className="max-w-[328px]">
          <li className="flex mb-[24px] ">
            <div className="flex border-b border-b-[#8C8C8C]">
              <img className="mr-[14px]" src={wifiIcon} alt="wifiIcon" />
              <span className="text-[22px]">Бесплатный интерент</span>
            </div>
          </li>
          <li className="flex mb-[24px] ">
            <div className="flex border-b border-b-[#8C8C8C]">
              <img className="mr-[14px]" src={fit} alt="wifiIcon" />
              <span className="text-[22px]">Спортивный зал</span>
            </div>
          </li>
          <li className="flex mb-[24px] ">
            <div className="flex border-b border-b-[#8C8C8C]">
              <img className="mr-[14px]" src={bar} alt="wifiIcon" />
              <span className="text-[22px]">Бар/ресторан</span>
            </div>
          </li>
          <li className="flex mb-[24px] ">
            <div className="flex border-b border-b-[#8C8C8C]">
              <img className="mr-[14px]" src={transfer} alt="wifiIcon" />
              <span className="text-[22px]">Трансфер от/до аэропорта</span>
            </div>
          </li>
        </div>
        <div className="max-w-[328px]">
          <li className="flex items-center justify-between mb-[24px] ">
            <div className="flex border-b border-b-[#8C8C8C]">
              <img className="mr-[14px]" src={parking} alt="wifiIcon" />
              <span className="text-[22px]">Парковка</span>
            </div>
            <div className="bg-[#A1A1A1] px-[15px] h-[19px] rounded-[21px] flex justify-center">
              <span className="text-white text-[12px]">Платно</span>
            </div>
          </li>
          <li className="flex mb-[24px] ">
            <div className="flex border-b border-b-[#8C8C8C]">
              <img className="mr-[14px]" src={pool} alt="wifiIcon" />
              <span className="text-[22px]">Бассейн</span>
            </div>
          </li>
          <li className="flex mb-[24px] ">
            <div className="flex border-b border-b-[#8C8C8C]">
              <img className="mr-[14px]" src={spa} alt="wifiIcon" />
              <span className="text-[22px]">Спа услуги</span>
            </div>
          </li>
          <li className="flex mb-[24px] ">
            <div className="flex border-b border-b-[#8C8C8C]">
              <img className="mr-[14px]" src={dish} alt="wifiIcon" />
              <span className="text-[22px] ">Обслуживание номеров</span>
            </div>
          </li>
        </div>
      </ul>
      <Button classes={'py-[10px] px-[25px]'}>
        Подробнее <img className="ml-[10px]" src={arrow} alt="arrow" />
      </Button>
    </div>
  )
}

export default HotelRules
