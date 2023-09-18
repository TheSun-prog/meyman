// icons
import wifiIcon from '../../../assets/images/wifi.svg'
import bar from '../../../assets/images/bar.svg'
import transfer from '../../../assets/images/transfer.svg'
import parking from '../../../assets/images/parking.svg'
import pool from '../../../assets/images/pool.svg'
import spa from '../../../assets/images/spa.svg'
import dish from '../../../assets/images/dish.svg'
import gym from '../../../assets/images/gym.svg'
import playground from '../../../assets/images/children-play.svg'
import car from '../../../assets/images/car-rental.svg'

import arrow from '../../../assets/images/arrow.svg'
// ui
import Button from '../../ui/Button/Button'
import { useSelector } from 'react-redux'
import { Skeleton } from 'antd'

const amenitiesData = [
  { key: 'free_internet', icon: wifiIcon, text: 'Бесплатный интернет' },
  { key: 'bar', icon: bar, text: 'Бар/ресторан' },
  { key: 'airport_transfer', icon: transfer, text: 'Трансфер от/до аэропорта' },
  { key: 'park', icon: parking, text: 'Парковка', additionalText: 'Платно' },
  { key: 'pool', icon: pool, text: 'Бассейн' },
  { key: 'spa', icon: spa, text: 'Спа услуги' },
  { key: 'room_service', icon: dish, text: 'Обслуживание номеров' },
  { key: 'restaurant', icon: bar, text: 'Ресторан' },
  { key: 'gym', icon: gym, text: 'Спорт зал' },
  { key: 'children_playground', icon: playground, text: 'Детская площадка' },
  { key: 'car_rental', icon: car, text: 'Аренда машины' }
]

const HotelRules = ({ data, id, handleClickModal }) => {

  const {isLoading} = useSelector(state => state.hotel)

  return (
    <div className="flex-1">
      <div className="max-w-[566px]">
        <h5 className="text-[28px] mb-[20px]">Порядок проживания в отеле</h5>
        <p className="text-[22px] mb-[10px]">Время заезда/выезда</p>
        <p className="text-[18px] mb-[5px]">
          Заезд с {data?.check_in_time_start} до {data?.check_in_time_end}
        </p>
        <p className="text-[18px] mb-[20px]">
          Выезд с {data?.check_out_time_start} до {data?.check_out_time_end}
        </p>
      </div>
      <h5 className="mt-[80px] mb-[25px] text-[28px]">
        Удобства и услуги отеля
      </h5>
      {!isLoading ? <ul className="grid grid-cols-2 grid-rows-4 overflow-hidden gap-[24px] pb-[20px] mr-[10px]">
        {amenitiesData?.map(
          item =>
            data[item.key] && (
                <li key={item.key} className="flex items-center justify-between  ">
                  <div className="flex border-b border-b-[#8C8C8C]">
                    <img
                      className="mr-[14px]"
                      src={item.icon}
                      alt={`${item.key}Icon`}
                    />
                    <span className="text-[22px]">{item.text}</span>
                  </div>
                  {item.additionalText && (
                    <div className="bg-[#A1A1A1] px-[15px] h-[19px] rounded-[21px] items-center flex">
                      <span className="text-white text-[12px]">
                        {item.additionalText}
                      </span>
                    </div>
                  )}
                </li>
              
            )
        )}
      </ul> : <Skeleton style={{width: '500px', marginBottom: '10px'}}/>}
      <Button clickFunc={handleClickModal} classes={'py-[10px] px-[25px] shadow-xl text-[18px]'}>
        Подробнее <img className="ml-[10px]" src={arrow} alt="arrow" />
      </Button>
    </div>
  )
}

export default HotelRules
