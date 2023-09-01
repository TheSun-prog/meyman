import clear from '../../../assets/images/clear.svg'
import wifi from '../../../assets/images/wifi.svg'
import bar from '../../../assets/images/bar.svg'
import transfer from '../../../assets/images/transfer.svg'
import parking from '../../../assets/images/parking.svg'
import dish from '../../../assets/images/dish.svg'
import pool from '../../../assets/images/pool.svg'
import spa from '../../../assets/images/spa.svg'
import { Modal } from 'antd'

const Services = ({ isOpen, handleOk, handleCancel, data, id }) => {
  const amenities = [
    { key: 'free_internet', icon: wifi, label: 'Бесплатный Интернет' },
    { key: 'restaurant', icon: bar, label: 'Ресторан' },
    { key: 'park', icon: parking, label: 'Парковка' },
    {
      key: 'airport_transfer',
      icon: transfer,
      label: 'Трансфер от/до аэропорта'
    }
  ]

  const services = [
    { key: 'spa_services', icon: spa, label: 'Спа услуги' },
    { key: 'bar', icon: bar, label: 'Бар' },
    { key: 'pool', icon: pool, label: 'Бассейн' },
    { key: 'room_service', icon: dish, label: 'Обслуживание номеров' }
  ]

  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closeIcon={false}
      width={957}
      bodyStyle={{ padding: '20px , 10px' }}
    >
      <div className="=">
        <div className="flex justify-center items-center border-b  w-full pb-6">
          <img
            onClick={handleCancel}
            className="absolute cursor-pointer left-12"
            src={clear}
            alt="clear"
          />
          <h2 className="text-[24px]">Удобства и услуги отеля</h2>
        </div>
        <div className="flex justify-between px-[64px] pt-[55px]">
          <ul className="flex flex-col gap-[40px]">
            {amenities.map(
              item =>
                data?.results?.[id]?.[item.key] && (
                  <li className="relative flex" key={item.key}>
                    <img src={item.icon} alt={item.label} />
                    <span className="ml-2 text-2xl">{item.label}</span>
                  </li>
                )
            )}
          </ul>
          <ul className="flex flex-col gap-[40px]">
            {services.map(
              item =>
                data?.results?.[id]?.[item.key] && (
                  <li className="relative flex" key={item.key}>
                    <img src={item.icon} alt={item.label} />
                    <span className="ml-2 text-2xl">{item.label}</span>
                  </li>
                )
            )}
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
    </Modal>
  )
}

export default Services
