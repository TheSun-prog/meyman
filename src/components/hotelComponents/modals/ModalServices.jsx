import clear from '../../../assets/images/clear.svg'
import wifi from '../../../assets/images/wifi.svg'
import bar from '../../../assets/images/bar.svg'
import transfer from '../../../assets/images/transfer.svg'
import parking from '../../../assets/images/parking.svg'
import dish from '../../../assets/images/dish.svg'
import pool from '../../../assets/images/pool.svg'
import spa from '../../../assets/images/spa.svg'

import 'animate.css';

const Services = ({data, id, handleCLickCloseModal }) => {

  const handleBackgroundClick = event => {
    if (event.target.classList.contains('bg-black')) {
      handleCLickCloseModal()
    }
  }
  
  const amenities = [
    { key: 'free_internet', icon: wifi, label: 'Бесплатный Интернет' },
    { key: 'restaurant', icon: bar, label: 'Ресторан' },
    { key: 'park', icon: parking, label: 'Парковка' },
    { key: 'airport_transfer', icon: transfer, label: 'Трансфер от/до аэропорта' },
  ];

  const services = [
    { key: 'spa_services', icon: spa, label: 'Спа услуги' },
    { key: 'bar', icon: bar, label: 'Бар' },
    { key: 'pool', icon: pool, label: 'Бассейн' },
    { key: 'room_service', icon: dish, label: 'Обслуживание номеров' },
  ];

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed min-h-screen inset-0 z-40 w-screen bg-black bg-opacity-40 overflow-x-hidden animate__animated animate__fadeIn"
    >
      <div className="bg-white overflow-scroll overflow-x-hidden z-50 w-2/3 h-[80vh] py-[37px] rounded-3xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-center border-b border-[#8C8C8C] w-full pb-[44px]">
          <img
            onClick={handleCLickCloseModal}
            className="absolute cursor-pointer left-5"
            src={clear}
            alt="clear"
          />
          <h2 className="text-[36px]">Удобства и услуги отеля</h2>
        </div>
        <div className="flex justify-between px-[64px] pt-[55px]">
        <ul className="flex flex-col gap-[40px]">
          {amenities.map(item => data?.results?.[id]?.[item.key] && (
            <li className="relative flex" key={item.key}>
              <img src={item.icon} alt={item.label} />
              <span className="ml-2 text-2xl">{item.label}</span>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-[40px]">
          {services.map(item => data?.results?.[id]?.[item.key] && (
            <li className="relative flex" key={item.key}>
              <img src={item.icon} alt={item.label} />
              <span className="ml-2 text-2xl">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
        <div className="flex justify-between mt-[40px] px-[64px]">
          <div className="text-[18px]">
            <h4 className="text-[22px] mb-[20px]">Услуги</h4>
            <ul className="flex flex-col gap-[20px] mb-[40px]">
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
            <ul className="flex flex-col gap-[20px] mb-[40px]">
              <li>Массаж</li>
              <li>Джакузи</li>
              <li>Сауна</li>
              <li>Хаммам</li>
              <li>Спортивный зал</li>
            </ul>
            <h4 className="text-[22px] mb-[20px]">Интернет</h4>
            <ul className="flex flex-col gap-[20px] mb-[40px]">
              <li>Доступ в интернет:в номерах</li>
              <li>Доступ в интернет:на всей территории отеля</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
