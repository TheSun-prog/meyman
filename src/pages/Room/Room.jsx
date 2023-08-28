// icons
import placeIcon from '../../assets/images/place.svg'
import whatsAppIcon from '../../assets/images/whats-app.svg'
import heartIcon from '../../assets/images/heart.svg'
import done from '../../assets/images/done.svg'
import dish from '../../assets/images/dish-green.svg'
import arrow from '../../assets/images/arrow.svg'
import arrow2 from '../../assets/images/arrow2.svg'

// ui
import Button from '../../components/ui/Button/Button'
import RoomDate from '../../components/roomComponents/RoomDate'
import ModalAllPhotosRooms from '../../components/roomComponents/modals/ModalAllPhotosRooms'
import ModalAllServices from '../../components/roomComponents/modals/ModalAllServices'
import RoomName from '../../components/hotelComponents/HotelRooms/RoomName'

import { useEffect, useState } from 'react'
import { useLocation, NavLink, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHotelData } from '../../store/hotelSlice'

import roomIcons from './roomIcon'

const Room = () => {
  const [activeModalAllPhotosRooms, setActiveModalAllPhotosRooms] = useState(false)
  const [activeModalALlServices, setActiveModalAllServices] = useState(false)
  const dispatch = useDispatch()

  const { hotelId } = useParams()

  const { state } = useLocation()

  const { data } = useSelector(state => state.hotel)

  const handleActiveModal = () => {
    setActiveModalAllPhotosRooms(true)
  }

  useEffect(() => {
    dispatch(fetchHotelData(hotelId))
  }, [])

  return (
    <div className="mx-auto w-[1240px] min-h-screen">
      <div className="flex items-center mb-[50px]">
        <NavLink to={'/'}>Главная</NavLink>
        <img className="-rotate-90 h-4" src={arrow2} alt="arrow" />
        <NavLink to={'/hotelcatalog/hotel'}>Отель</NavLink>
        <img className="-rotate-90 h-4" src={arrow2} alt="arrow" />
        Номер
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <RoomName
              classes={'text-[32px] font-[500]'}
              bedType={state.bed_type}
              maxGuest={state.max_guest_capacity}
            />
            <div className="flex">
              <img src={placeIcon} alt="placeIcon" />
              <span className="text-2xl text-grey">{data.address}</span>
            </div>
          </div>
          <div className="flex">
            <img className="mr-[20px]" src={whatsAppIcon} alt="whatsAppIcon" />
            <img src={heartIcon} alt="heartIcon" />
          </div>
        </div>
        <div
          onClick={handleActiveModal}
          className="flex justify-between mt-[20px] cursor-pointer"
        >
          <div>
            <img
              className="rounded-l-2xl h-[500px] w-[490px]"
              src={state.room_images[0].image}
              alt="hotelImg"
            />
          </div>
          <div className="">
            <div className="flex justify-between gap-[10px] mb-[10px]">
              <img
                className="w-[365px] h-[245px]"
                src={state.room_images[1].image}
                alt="hotelImg2"
              />
              <img
                className="w-[365px] h-[245px] rounded-tr-2xl"
                src={state.room_images[2].image}
                alt="hotelImg2"
              />
            </div>
            <div className="flex gap-[10px] relative">
              <img
                className="w-[365px] h-[245px]"
                src={state.room_images[3].image}
                alt="hotelImg2"
              />
              <img
                className="w-[365px] h-[245px] rounded-br-2xl"
                src={state.room_images[4].image}
                alt="hotelImg2"
              />
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
                  {state?.room_amenities?.slice(0, 4)?.map(item => (
                    <li className="flex mb-[24px] ">
                      <div className="flex border-b border-b-[#8C8C8C]">
                        <img
                          className="mr-[14px]"
                          src={roomIcons[item]}
                          alt="wifiIcon"
                        />
                        <span className="text-[22px]">{item}</span>
                      </div>
                    </li>
                  ))}
                </div>
                <div className="max-w-[328px]">
                  {state?.room_amenities?.slice(4, 8)?.map(item => (
                    <li className="flex mb-[24px] ">
                      <div className="flex border-b border-b-[#8C8C8C]">
                        <img
                          className="mr-[14px]"
                          src={roomIcons[item]}
                          alt="wifiIcon"
                        />
                        <span className="text-[22px]">{item}</span>
                      </div>
                    </li>
                  ))}
                </div>
              </ul>
              <Button
                clickFunc={() => {
                  setActiveModalAllServices(true)
                }}
                classes={'py-2 px-3'}
              >
                Показать все Удобства <img src={arrow} alt="arrow" />
              </Button>
            </div>
          </div>
          <RoomDate />
        </div>
      </div>
      {activeModalAllPhotosRooms && (
        <ModalAllPhotosRooms
          images={state}
          handleCLickCloseModal={() => {
            setActiveModalAllPhotosRooms(false)
          }}
        />
      )}
      {activeModalALlServices && (
        <ModalAllServices
          handleCLickCloseModal={() => {
            setActiveModalAllServices(false)
          }}
        />
      )}
    </div>
  )
}

export default Room
