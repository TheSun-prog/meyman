//icon
import placeIcon from '../../assets/images/place.svg'
import calendar from '../../assets/images/calendar.svg'
import persons from '../../assets/images/persons.svg'
import bed from '../../assets/images/bed.svg'
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
import { fetchHotelData } from '../../store/slice/hotelSlice'
import { useParams, useLocation } from 'react-router-dom'
import { Rating } from '@mui/material'
// components
import RoomName from '../../components/hotelComponents/HotelRooms/RoomName'
import roomIcons from '../Room/roomIcon'
import { Modal } from 'antd'

const Booking = () => {
  const [activeModal, setActiveModal] = useState(false)
  const [date, setDate] = useState()
  const [initialDataForm, setInitialDataForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const { hotelId, roomId } = useParams()

  const dispatch = useDispatch()
  const { data } = useSelector(state => state.hotel)
  const { state } = useLocation()
  const stars = data.stars ? data.stars : null

  const warning = () => {
    Modal.warning({
      title: 'Все поля должны быть заполнены',
      autoFocusButton: true,
      centered: true,
      keyboard: true,
      maskClosable: true
    })
  }

  const handleNameChange = event => {
    const { value } = event.target
    setInitialDataForm(prevState => ({
      ...prevState,
      name: value
    }))
  }

  const handleEmailChange = event => {
    const { value } = event.target
    setInitialDataForm(prevState => ({
      ...prevState,
      email: value
    }))
  }

  const handlePhoneChange = event => {
    const { value } = event.target
    setInitialDataForm(prevState => ({
      ...prevState,
      phone: value
    }))
  }

  function formatDateWithDayOfWeek(dateStr) {
    const daysOfWeek = [
      'воскресенье',
      'понедельник',
      'вторник',
      'среда',
      'четверг',
      'пятница',
      'суббота'
    ]

    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря'
    ]

    const date = new Date(dateStr)
    const dayOfWeek = daysOfWeek[date.getDay()]
    const [year, month, day] = dateStr.split('-')
    const formattedDate = `${parseInt(day)} ${months[parseInt(month) - 1]}`

    return `${formattedDate}, ${dayOfWeek}`
  }

  function calculateDateDifference(arrivalDate, departureDate) {
    const arrival = new Date(arrivalDate)
    const departure = new Date(departureDate)

    // Разница между датами в миллисекундах
    const timeDiff = departure - arrival

    // Преобразование миллисекунд в дни
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24)

    return daysDiff
  }

  const handleClickBooking = () => {
    warning()
    return
  }

  useEffect(() => {
    dispatch(fetchHotelData(hotelId))
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
              <div className="flex w-full">
                <img src={placeIcon} alt="placeIcon" />
                <span className="text-[22px] text-grey">{data?.address}</span>
              </div>
            </div>
          </div>
          <div className="flex mt-6">
            <img className="mr-2 mb-4" src={calendar} alt="calendar" />
            <div className="flex">
              <div className="mr-[20px]">
                <p className="text-[20px]">
                  {formatDateWithDayOfWeek(state.arrival)}
                </p>
                <p className="text-[16px]">
                  Заезд с {data?.check_in_time_start} до{' '}
                  {data?.check_in_time_end}
                </p>
              </div>
              <div>
                <p className="text-[20px]">
                  {formatDateWithDayOfWeek(state.departure)}
                </p>
                <p className="text-[16px]">
                  Заезд с {data?.check_out_time_start} до{' '}
                  {data?.check_out_time_end}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-[28px]">Номер:</h2>
            <RoomName
              classes={'!text-[20px] !font-[500]'}
              bedType={data?.rooms?.[roomId]?.bed_type}
              maxGuest={data?.rooms?.[roomId]?.max_guest_capacity}
            />
            <div className="flex mt-4">
              <img className="mr-2" src={persons} alt="persons" />
              <span className="text-[#666666] text-[18px]">
                {data?.rooms?.[roomId]?.max_guest_capacity} гостей{' '}
                <span>&#8226;</span> {data?.rooms?.[roomId]?.room_area}м 2
              </span>
            </div>
            <div className="flex items-center">
              <img src={bed} alt="bed" />
              <span className="pl-2">
                {Array.isArray(data?.rooms?.[roomId]?.bed_type) &&
                data?.rooms?.[roomId]?.bed_type.includes('Односпальные') &&
                data?.rooms?.[roomId]?.bed_type.includes('Двуспальная')
                  ? 'Односпальная и Двуспальная'
                  : 'Односпальная'}
              </span>
            </div>
            <ul className="flex flex-col flex-wrap w-[303px] h-[600px] mt-6">
              {data?.rooms?.[roomId]?.room_amenities?.map((item, index) => (
                <li key={index} className="flex mb-[24px] w-full">
                  <div className="flex ">
                    <img
                      className="mr-[14px]"
                      src={roomIcons[item]}
                      alt="wifiIcon"
                    />
                    <span className="text-[22px]">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
            <h2 className="text-[28px] mb-[40px] mt-[80px]">
              Контактные данные
            </h2>
            <div className="mb-[35px]">
              <h3 className="text-[24px]">Гость</h3>
              <p className="text-[#A1A1A1] text[20px]">
                Взрослый на которого оформляется бронь
              </p>
            </div>
            <form>
              <div className="mb-[30px]">
                <label htmlFor="name">Имя и фамилия</label>
                <Input
                  id="name"
                  value={initialDataForm.name}
                  onChange={handleNameChange}
                  classes="w-[520px]"
                  text={'Введите свое имя и фамилию'}
                />
              </div>
              <div className="mb-[30px]">
                <label htmlFor="email">Электронный адрес</label>
                <Input
                  id="email"
                  value={initialDataForm.email}
                  type="email"
                  onChange={handleEmailChange}
                  classes="w-[520px]"
                  text={'Введите свой адрес электронной почты'}
                />
              </div>
              <div className="mb-[30px]">
                <label htmlFor="phone">Номер телефона</label>
                <Input
                  id="phone"
                  value={initialDataForm.phone}
                  type="tel"
                  onChange={handlePhoneChange}
                  classes="w-[520px]"
                  text={'+996 000 000 000'}
                />
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
            <span>
              {calculateDateDifference(state.arrival, state.departure)} дней
            </span>
            <span>
              {data?.rooms?.[roomId]?.price_per_night *
                calculateDateDifference(state.arrival, state.departure)}{' '}
              сом
            </span>
          </div>
          <div className="flex justify-between text-3xl items-center">
            <span className="">Итого</span>
            <span>
              {data?.rooms?.[roomId]?.price_per_night *
                calculateDateDifference(state.arrival, state.departure)}{' '}
              сом
            </span>
          </div>
          <Button clickFunc={handleClickBooking} classes={`py-[20px] w-full'}`}>
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
