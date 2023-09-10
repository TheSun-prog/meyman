import clear from '../../../assets/images/clear.svg'
import wifiIcon from '../../../assets/images/wifi.svg'
import bar from '../../../assets/images/bar.svg'
import transfer from '../../../assets/images/transfer.svg'
import parking from '../../../assets/images/parking.svg'
import dish from '../../../assets/images/dish.svg'
import pool from '../../../assets/images/pool.svg'
import spa from '../../../assets/images/spa.svg'
import gym from '../../../assets/images/gym.svg'
import playground from '../../../assets/images/children-play.svg'
import car from '../../../assets/images/car-rental.svg'
import { Modal } from 'antd'

const Services = ({ isOpen, handleOk, handleCancel, data, id }) => {
  const amenities = [
  { key: 'free_internet', icon: wifiIcon, text: 'Бесплатный интернет' },
  { key: 'bar', icon: bar, text: 'Бар/ресторан' },
  { key: 'airport_transfer', icon: transfer, text: 'Трансфер от/до аэропорта' },
  { key: 'park', icon: parking, text: 'Парковка', additionalText: 'Платно' },
  { key: 'pool', icon: pool, text: 'Бассейн' },
  { key: 'spa', icon: spa, text: 'Спа услуги' },
  { key: 'room_service', icon: dish, text: 'Обслуживание номеров' },
  { key: 'restaurant', icon: bar, text: 'Ресторан' },
  { key: 'gym', icon: gym, text: 'Спорт зал'},
  { key: 'children_playground', icon: playground, text: 'Детская площадка'},
  { key: 'car_rental', icon: car, text: 'Аренда машины'}
  ]

  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closeIcon={false}
      width={957}
      bodyStyle={{ padding: '20px , 10px', paddingTop: '25px' }}
    >
      <div className="">
        <div className="flex justify-center items-center border-b  w-full pb-6">
          <img
            onClick={handleCancel}
            className="absolute cursor-pointer left-12"
            src={clear}
            alt="clear"
          />
          <h2 className="text-[24px]">Удобства и услуги отеля</h2>
        </div>
        <ul className="flex flex-col flex-wrap gap-[40px] px-[64px] h-[444px] mt-[40px]">
          {amenities.map(
            item =>
              data?.[item.key] && (
                <li className="relative flex items-center" key={item.key}>
                  <img src={item.icon} alt={item.label} className='h-[24px] w-[24px]'/>
                  <span className="ml-2 text-2xl">{item.text}</span>
                </li>
              )
          )}
        </ul>
        <div className="flex flex-col flex-wrap h-[527px] px-[64px] justify-between mt-[40px] ">
          <div className="text-[18px]">
            <h4 className="text-[22px] mb-[20px]">Услуги</h4>
            <ul className="flex text-[18px] flex-col gap-[20px] mb-[40px]">
              <li>Химчистка</li>
              <li>Прачечная</li>
              <li>Уборка номеров</li>
              <li>Камера хранения багажа</li>
              <li>Круглосуточная стойка регистрации</li>
              <li>Доступ людям с ограниченными возможностями</li>
            </ul>
            <h4 className="text-[22px] mb-[20px]">Питание</h4>
            <ul className="flex flex-col gap-[20px] mb-[40px]">
              <li>Бар у бассейна</li>
              <li>Кафе</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[22px] mb-[20px]">Красота и здоровье</h4>
            <ul className="flex text-[18px] flex-col gap-[20px] mb-[40px]">
              <li>Массаж</li>
              <li>Джакузи</li>
              <li>Сауна</li>
              <li>Хаммам</li>
              <li>Спортивный зал</li>
            </ul>
            <h4 className="text-[22px] mb-[20px]">Интернет</h4>
            <ul className="flex flex-col text-[18px] gap-[20px] mb-[40px]">
              <li>Доступ в интернет:в номерах</li>
              <li>Доступ в интернет:на всей территории отеля</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default Services
