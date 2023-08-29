//icon
import starFillIcon from '../../assets/images/star-fill.svg'
import starDefaultIcon from '../../assets/images/star-default.svg'
import placeIcon from '../../assets/images/place.svg'
import hotelImg from '../../assets/images/hotel-img.png'
import calendar from '../../assets/images/calendar.svg'
import persons from '../../assets/images/persons.svg'
import bed from '../../assets/images/bed.svg'
import freezer from '../../assets/images/freezer.svg'
import done from '../../assets/images/done.svg'
import dish from '../../assets/images/dish-green.svg'
import arrow from '../../assets/images/arrow2.svg'
// ui
import Input from '../../components/ui/Input/Input'
import Button from '../../components/ui/Button/Button'
import ModalSuccess from '../../components/bookingComponents/modals/ModalSuccess'
// react
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHotelData } from '../../store/hotelSlice'
import { useParams, useLocation } from 'react-router-dom'
import { Rating } from '@mui/material'
import RoomName from '../../components/hotelComponents/HotelRooms/RoomName'

const Booking = () => {
  const [activeModal, setActiveModal] = useState(false)
  const [date, setDate] = useState()

  const { hotelId } = useParams()

  const dispatch = useDispatch()

  const { data } = useSelector(state => state.hotel)

  const { state } = useLocation()

  const stars = data.stars ? data.stars : null

  const handleClickBooking = () => {
    setActiveModal(true)
  }

  useEffect(() => {
    dispatch(fetchHotelData(hotelId))
    console.log(state)
  }, [])

  useEffect(() => {
    const storedData = localStorage.getItem('bookingData')
    if (storedData) {
      setDate(JSON.parse(storedData))
    }
  }, [])

  return (
    <div className="mx-auto w-[1240px]">
      <div className="flex items-center mb-[50px]">
        <NavLink to={'/'}>Главная</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={'/hotelcatalog/hotel'}>Отель</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={'hotelcatalog/hotel/room'}>Номер</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        Бронирование
      </div>
      <div className="flex justify-between ">
        <div>
          <div className="flex gap-[13px] justify-between h-[216px] w-[590px]">
            <img
              className="rounded-xl flex-1 "
              src={data?.housing_images?.[0]?.image}
              alt="hotelImg"
            />
            <div className="w-[288px] flex gap-[20px] flex-col">
              <h3 className="font-medium text-[32px]">{data?.housing_name}</h3>
              <Rating value={stars} readOnly />
              <div className="flex items-center">
                <div className="bg-[#FFC506] pr-[2px] rounded-full mr-[5px] w-[30px] h-[28px] text-center">
                  <span className="text-white">{data?.average_rating}</span>
                </div>
                <span>
                  {data.average_rating > 8
                    ? 'Замечательно'
                    : data.average_rating > 6
                    ? 'Нормально'
                    : 'Ниже среднего'}
                </span>
              </div>
              <div className="flex">
                <img src={placeIcon} alt="placeIcon" />
                <span className="text-[22px] text-grey">{data?.address}</span>
              </div>
            </div>
          </div>
          <div className="flex mt-6">
            <img className="mr-2 mb-4" src={calendar} alt="calendar" />
            <div className="flex">
              <div className="mr-[20px]">
                <p className="text-[20px]">{state[0].arrival}</p>
                <p className="text-[16px]">
                  Заезд с {data?.check_in_time_start} до{' '}
                  {data?.check_in_time_end}
                </p>
              </div>
              <div>
                <p className="text-[20px]">{state[0].departure}</p>
                <p className="text-[16px]">
                  Заезд с {data?.check_out_time_start} до{' '}
                  {data?.check_out_time_end}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-[28px] ">Номер:</h2>
            <RoomName
              classes={'text-[20px]'}
              bedType={state[1].bed_type}
              maxGuest={state[1].max_guest_capacity}
            />
            <div className="flex my-2">
              <img className="mr-2" src={persons} alt="persons" />
              <span className="text-[#666666] text-[18px]">
                {state[1].max_guest_capacity} гостей <span>&#8226;</span>{' '}
                {state[1].room_area}м 2
              </span>
            </div>
            <div className="flex items-center">
              <img src={bed} alt="bed" />
              <span className="pl-2">
                {Array.isArray(state[1].bed_type) &&
                state[1].bed_type.includes('Односпальные') &&
                state[1].bed_type.includes('Двуспальная')
                  ? 'Односпальная и Двуспальная'
                  : state[1]}
              </span>
            </div>
            <div className="h-[158px] w-[403px] mt-5 justify-between flex flex-wrap">
              <div className="flex-col flex justify-between">
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
              </div>
              <div className="flex-col flex justify-between">
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
                <div className="flex items-center">
                  <img src={freezer} alt="freezer" />
                  <span>Кондиционер</span>
                </div>
              </div>
            </div>
            <h2 className="text-[28px] mb-[40px] mt-[90px]">
              Контактные данные
            </h2>
            <div className="mb-[35px]">
              <h3 className="text-[24px]">Гость</h3>
              <p>Взрослый на которого оформляется бронь</p>
            </div>
            <form>
              <div className="mb-[30px]">
                <label htmlFor="Имя">Имя</label>
                <Input classes={'!w-[320px]'} text={'Введите свое имя'} />
              </div>
              <div className="mb-[30px]">
                <label htmlFor="Имя">Фамилия</label>
                <Input classes={'!w-[320px]'} text={'Введите свое фамилие'} />
              </div>
              <div className="mb-[30px]">
                <label htmlFor="Имя">Номер телефона</label>
                <Input
                  classes={'!w-[320px]'}
                  text={'Введите ваш номер телефона'}
                />
              </div>
              <div className="mb-[30px]">
                <label htmlFor="Имя">Электронный адрес</label>
                <Input classes={'!w-[320px]'} text={'Введите  ваш эл.адрес'} />
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col rounded-xl justify-between px-[25px] py-[40px] w-[475px] h-[475px] shadow-lg">
          <p className="text-[24px]">Детализация цена</p>
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
          <div className="flex justify-between text-[22px] pb-[28px] border-b">
            <span>1 ночь</span>
            <span>3200 сом</span>
          </div>
          <div className="flex justify-between text-3xl items-center">
            <span className="">Итого</span>
            <span>3200 сом</span>
          </div>
          <Button clickFunc={handleClickBooking} classes={'py-[20px] w-full'}>
            Забронировать
          </Button>
        </div>
      </div>
      {activeModal && (
        <ModalSuccess
          handleSuccessClick={() => {
            setActiveModal(false)
          }}
          handleCLickCloseModal={() => {
            setActiveModal(false)
          }}
        />
      )}
    </div>
  )
}

export default Booking
