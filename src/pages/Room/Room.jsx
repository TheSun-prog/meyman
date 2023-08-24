// icons
import placeIcon from '../../assets/images/place.svg'
import whatsAppIcon from '../../assets/images/whats-app.svg'
import heartIcon from '../../assets/images/heart.svg'
import roomImg from '../../assets/images/room-img.png'
import done from '../../assets/images/done.svg'
import dish from '../../assets/images/dish-green.svg'
import wifi from '../../assets/images/wifi.svg'
import bar from '../../assets/images/wifi.svg'
import arrow from '../../assets/images/arrow.svg'
import arrow2 from '../../assets/images/arrow2.svg'
// ui
import Button from '../../components/ui/Button/Button'
import RoomDate from './RoomDate'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ModalAllPhotosRooms from '../../components/roomComponents/modals/ModalAllPhotosRooms'
import ModalAllServices from '../../components/roomComponents/modals/ModalAllServices'

const Room = () => {

  const [activeModalAllPhotosRooms, setActiveModalAllPhotosRooms] = useState(false)
  const [activeModalALlServices, setActiveModalAllServices] = useState(false)

  const handleActiveModal = () => {
    setActiveModalAllPhotosRooms(true)
  }

  return (
    <div className='mx-auto w-[1240px]'>
      <div className="flex items-center mb-[50px]">
        <NavLink to={'/'}>Главная</NavLink>
        <img className="-rotate-90 h-4" src={arrow2} alt="arrow" />
        <NavLink to={'/hotelcatalog/hotel'}>Отель</NavLink>
        <img className="-rotate-90 h-4" src={arrow2} alt="arrow" />
        Номер
      </div>
      <div>
        <div className="flex justify-between ">
          <div>
            <h2 className="font-medium text-[32px]">
              Двухместный номер с 2 отдельными кроватями
            </h2>
            <div className="flex">
              <img src={placeIcon} alt="placeIcon" />
              <span className="text-2xl text-grey">
                16 проспект Манаса, Бишкек 2,1 км от центра
              </span>
            </div>
          </div>
          <div className="flex">
            <img className="mr-[20px]" src={whatsAppIcon} alt="whatsAppIcon" />
            <img src={heartIcon} alt="heartIcon" />
          </div>
        </div>
        <div onClick={handleActiveModal} className="flex justify-between mt-[20px] cursor-pointer">
          <div>
            <img
              className="rounded-l-2xl h-[500px] w-[490px]"
              src={roomImg}
              alt="hotelImg"
            />
          </div>
          <div className="">
            <div className="flex justify-between gap-[10px] mb-[10px]">
              <img
                className="w-[365px] h-[245px]"
                src={roomImg}
                alt="hotelImg2"
              />
              <img
                className="w-[365px] h-[245px] rounded-tr-2xl"
                src={roomImg}
                alt="hotelImg2"
              />
            </div>
            <div className="flex gap-[10px] relative">
              <img
                className="w-[365px] h-[245px]"
                src={roomImg}
                alt="hotelImg2"
              />
              <img
                className="w-[365px] h-[245px] rounded-br-2xl"
                src={roomImg}
                alt="hotelImg2"
              />
              {/*<Button*/}
              {/*  classes={*/}
              {/*    'font-[600] !bg-[#1164B480] !w-[227px] absolute bottom-[20px] right-[20px]'*/}
              {/*  }*/}
              {/*  text="Показать все фото"*/}
              {/*/>*/}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div>
            <div>
              <h3 className="text-[28px]">Условия бронирования</h3>
              <div className="flex">
                <img className="mr-2" src={done} alt="done" />
                <span className="text-[#59A859]">
                  Бесплатная отмена в любое время{' '}
                </span>
              </div>
              <div className="flex">
                <img className="mr-2" src={dish} alt="done" />
                <span className="text-[#59A859]">Завтрак включен</span>
              </div>
            </div>
            <div className="mt-10 w-[500px]">
              <h3 className="text-[28px]">Удобства номера</h3>
              <ul className="pb-[10px] flex justify-between ">
                <div className="max-w-[328px]">
                  <li className="flex mb-[24px] ">
                    <div className="flex border-b border-b-[#8C8C8C]">
                      <img className="mr-[14px]" src={wifi} alt="wifiIcon" />
                      <span className="text-[22px]">Интерент</span>
                    </div>
                  </li>
                  <li className="flex mb-[24px] ">
                    <div className="flex border-b border-b-[#8C8C8C]">
                      <img className="mr-[14px]" src={wifi} alt="wifiIcon" />
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
                      <img className="mr-[14px]" src={bar} alt="wifiIcon" />
                      <span className="text-[22px]">Трансфер</span>
                    </div>
                  </li>
                </div>
                <div className="max-w-[328px]">
                  <li className="flex items-center justify-between mb-[24px] ">
                    <div className="flex border-b border-b-[#8C8C8C]">
                      <img className="mr-[14px]" src={wifi} alt="wifiIcon" />
                      <span className="text-[22px]">Парковка</span>
                    </div>
                    <div className="bg-[#A1A1A1] px-[15px] h-[19px] rounded-[21px] flex justify-center">
                      <span className="text-white text-[12px]">Платно</span>
                    </div>
                  </li>
                  <li className="flex mb-[24px] ">
                    <div className="flex border-b border-b-[#8C8C8C]">
                      <img className="mr-[14px]" src={bar} alt="wifiIcon" />
                      <span className="text-[22px]">Бассейн</span>
                    </div>
                  </li>
                  <li className="flex mb-[24px] ">
                    <div className="flex border-b border-b-[#8C8C8C]">
                      <img className="mr-[14px]" src={wifi} alt="wifiIcon" />
                      <span className="text-[22px]">Спа услуги</span>
                    </div>
                  </li>
                  <li className="flex mb-[24px] ">
                    <div className="flex border-b border-b-[#8C8C8C]">
                      <img className="mr-[14px]" src={bar} alt="wifiIcon" />
                      <span className="text-[22px] ">Обслуживание номеров</span>
                    </div>
                  </li>
                </div>
              </ul>
              <Button clickFunc={() => {setActiveModalAllServices(true)}} classes={'py-2 px-3'}>
                Показать все Удобства <img src={arrow} alt="arrow" />
              </Button>
            </div>
          </div>
          <RoomDate />
        </div>
      </div>

      {activeModalAllPhotosRooms && <ModalAllPhotosRooms handleCLickCloseModal={() => {setActiveModalAllPhotosRooms(false)}}/>}
      {activeModalALlServices && <ModalAllServices handleCLickCloseModal={() => {setActiveModalAllServices(false)}}/>}
    </div>
  )
}

export default Room
