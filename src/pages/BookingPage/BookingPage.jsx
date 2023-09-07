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
// modules
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHousingData } from '../../store/slice/housingSlice'
import { useParams, useLocation } from 'react-router-dom'
import { Rating } from '@mui/material'
import { Modal } from 'antd'
import "animate.css"
// components
import roomIcons from '../RoomPage/roomIcon'
import { reservationHotelPostData } from '../../store/slice/reservationsSlice'

const Booking = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.housing)
  const reservationData = useSelector(state => state.reservation.data)
  const {isError} = useSelector(state => state.reservation)
  const {isLoading} = useSelector(state => state.reservation)
  const { state } = useLocation()
  const { hotelId, roomId } = useParams()

  const stars = data?.results?.[hotelId]?.stars
    ? data?.results?.[hotelId]?.stars
    : null

  const id = useSelector(state => state?.housing?.data?.results?.[hotelId]?.id)

  const [activeModal, setActiveModal] = useState(false)
  const [date, setDate] = useState()
  const [nameErrorInput, setNameErrorInput] = useState(false)
  const [emailErrorInput, setEmailErrorInput] = useState(false)
  const [phoneErrorInput, setPhoneErrorInput] = useState(false)

  const [initialDataForm, setInitialDataForm] = useState({
    housing: null,
    check_in_date: state.arrival,
    check_out_date: state.departure,
    username: '',
    client_email: '',
    phone_number: '',
  })

  const [errorDataForm, setErrorDataForm] = useState({
    nameErrorPlaceHolder: 'Введите ваше имя и фамилию',
    emailErrorPlaceHolder: 'Введите ваш электронный адрес',
    phoneErrorPlaceHolder: '+996 000 000 000'
  })

  const handleCloseSuccess = () => {
    setActiveModal(false)
  }

  const handleNameChange = event => {
    const { value } = event.target

    if (initialDataForm.username !== '') {
      setNameErrorInput(false)
      setInitialDataForm(prevState => ({
        ...prevState,
        nameErrorPlaceHolder: 'Введите ваше имя и фамилию'
      }))
    }

    setInitialDataForm(prevState => ({
      ...prevState,
      username: value
    }))
  }

  const handleEmailChange = event => {
    const { value } = event.target

    if (initialDataForm.client_email !== '') {
      setEmailErrorInput(false)
      setInitialDataForm(prevState => ({
        ...prevState,
        emailErrorPlaceHolder: 'Введите ваш электронный адрес'
      }))
    }

    setInitialDataForm(prevState => ({
      ...prevState,
      client_email: value
    }))
  }

  const handlePhoneChange = event => {
    const { value } = event.target

    if (initialDataForm.phone_number !== '') {
      setPhoneErrorInput(false)
      setInitialDataForm(prevState => ({
        ...prevState,
        phoneErrorPlaceHolder: '+996 000 000 000'
      }))
    }

    setInitialDataForm(prevState => ({
      ...prevState,
      phone_number: value
    }))
  }

  const error = () => {
    Modal.error({
      title: isError,
      bodyStyle: {padding: '30px'},
      maskClosable: true,
      footer: null
    });
  };

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
    // Регулярное выражение для проверки имени и фамилии с пробелом между ними
    const nameRegex = /^[A-Za-zА-Яа-я]{2,} [A-Za-zА-Яа-я]{2,}$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const phoneRegex = /^\+\d{3}[- ]?\d{3}[- ]?\d{3}[- ]?\d{3}$/

    if (nameRegex.test(initialDataForm.username)) {
      // Если формат имени и фамилии верен, выполните необходимые действия при бронировании
    } else {
      // Если формат не соблюдается, покажите сообщение об ошибке
      setInitialDataForm(prevState => ({
        ...prevState,
        username: '',
        nameErrorPlaceHolder: 'Не корректно введены данные'
      }))
      setNameErrorInput(true)
    }

    if (emailRegex.test(initialDataForm.client_email)) {
      // Если формат имени и фамилии верен, выполните необходимые действия при бронировании
    } else {
      // Если формат не соблюдается, покажите сообщение об ошибке
      setInitialDataForm(prevState => ({
        ...prevState,
        client_email: '',
        emailErrorPlaceHolder: 'Не корректно введена почта'
      }))
      setEmailErrorInput(true)
    }

    if (phoneRegex.test(initialDataForm.phone_number)) {
      // Если формат имени и фамилии верен, выполните необходимые действия при бронировании
    } else {
      // Если формат не соблюдается, покажите сообщение об ошибке
      setInitialDataForm(prevState => ({
        ...prevState,
        phone_number: '',
        phoneErrorPlaceHolder: 'Не корректно введен номер телефона'
      }))
      setPhoneErrorInput(true)
    }

    if (
      nameRegex.test(initialDataForm.username) &&
      emailRegex.test(initialDataForm.client_email) &&
      phoneRegex.test(initialDataForm.phone_number)
    ) {
      dispatch(reservationHotelPostData(initialDataForm))
      setActiveModal(true)
    }
  }

  useEffect(() => {
    dispatch(fetchHousingData({ limit: 12, offset: 0 }))
  }, [dispatch])

  useEffect(() => {
    if (id !== null) {
      // Если id не равно null, значит данные загружены, и мы можем его установить
      setInitialDataForm(prev => ({
        ...prev,
        housing: id
      }))
    }
  }, [id])

  useEffect(() => {
    const storedData = localStorage.getItem('bookingData')
    if (storedData) {
      setDate(JSON.parse(storedData))
    }
  }, [])

  if (isError) {
    return error()
  }

  return (
    <div className="mx-auto w-[1240px]">
      <div className="flex items-center mb-[50px] mt-[45px]">
        <NavLink to={'/'}>Главная</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={`/hotelcatalog/${hotelId}`}>Отель</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={`/hotelcatalog/${hotelId}/${roomId}`}>Номер</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        Бронирование
      </div>
      <div className="flex justify-between ">
        <div>
          <div className="flex gap-[13px] justify-between h-[216px] w-[650px]">
            <img
              className="rounded-xl flex-1 object-cover"
              src={
                data?.results?.[hotelId]?.rooms?.[roomId]?.room_images?.[0]
                  ?.image
              }
              alt="hotelImg"
            />
            <div className="w-[350px] flex gap-[20px] flex-col">
              <h3 className="font-medium text-[32px]">
                {data?.results?.[hotelId]?.housing_name}
              </h3>
              <Rating value={stars} readOnly />
              <div className="flex items-center">
                <div className="bg-[#FFC506] rounded-full mr-[5px] w-[30px] h-[28px] text-center">
                  <span className="text-white">
                    {data?.results?.[hotelId]?.average_rating}
                  </span>
                </div>
                <span>
                  {data?.results?.[hotelId]?.average_rating > 7
                    ? 'Замечательно'
                    : data?.results?.[hotelId]?.average_rating > 5
                    ? 'Нормально'
                    : 'Плохо'}
                </span>
              </div>
              <div className="flex w-full">
                <img src={placeIcon} alt="placeIcon" />
                <span className="text-[22px] text-grey">
                  {data?.results?.[hotelId]?.address}
                </span>
              </div>
            </div>
          </div>
          <div className="flex mt-20">
            <img className="mr-2 mb-4" src={calendar} alt="calendar" />
            <div className="flex">
              <div className="mr-[20px]">
                <p className="text-[20px]">
                  {formatDateWithDayOfWeek(state.arrival)}
                </p>
                <p className="text-[16px]">
                  Заезд с {data?.results?.[hotelId]?.check_in_time_start} до{' '}
                  {data?.results?.[hotelId]?.check_in_time_end}
                </p>
              </div>
              <div>
                <p className="text-[20px]">
                  {formatDateWithDayOfWeek(state.departure)}
                </p>
                <p className="text-[16px]">
                  Заезд с {data?.results?.[hotelId]?.check_out_time_start} до{' '}
                  {data?.results?.[hotelId]?.check_out_time_end}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-[28px]">Номер:</h2>
            <h1 className='text-[32px] font-[500]'>{data?.results?.[hotelId]?.rooms?.[roomId]?.room_name}</h1>
            <div className="flex mt-4">
              <img className="mr-2" src={persons} alt="persons" />
              <span className="text-[#666666] text-[18px]">
                {data?.results?.[hotelId]?.rooms?.[roomId]?.max_guest_capacity}{' '}
                гостей <span>&#8226;</span>{' '}
                {data?.results?.[hotelId]?.rooms?.[roomId]?.room_area}м 2
              </span>
            </div>
            <div className="flex items-center">
              <img src={bed} alt="bed" />
              <span className="pl-2">
                {Array.isArray(
                  data?.results?.[hotelId]?.rooms?.[roomId]?.bed_type
                ) &&
                data?.results?.[hotelId]?.rooms?.[roomId]?.bed_type.includes(
                  'Односпальные'
                ) &&
                data?.results?.[hotelId]?.rooms?.[roomId]?.bed_type.includes(
                  'Двуспальная'
                )
                  ? 'Односпальная и Двуспальная'
                  : 'Односпальная'}
              </span>
            </div>
            <ul className="flex flex-col flex-wrap w-[303px] max-h-[650px] min-h-[350px] mt-6">
              {data?.results?.[hotelId]?.rooms?.[roomId]?.room_amenities?.map(
                (item, index) => (
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
                )
              )}
            </ul>
            <h2 className="text-[28px] mb-[40px]">Контактные данные</h2>
            <div className="mb-[35px]">
              <h3 className="text-[24px]">Гость</h3>
              <p className="text-[#A1A1A1] text[20px] ">
                Взрослый на которого оформляется бронь
              </p>
            </div>
            <form>
              <div className="mb-[30px]">
                <label htmlFor="username">Имя и фамилия</label>
                <Input
                  id="username"
                  value={initialDataForm.username}
                  onChange={handleNameChange}
                  onFocus={() => {setNameErrorInput(false)}}
                  isError={nameErrorInput}
                  classes={`w-[520px] ${nameErrorInput ? 'animate__animated animate__headShake' : ''}`}
                  text={errorDataForm.nameErrorPlaceHolder}
                />
              </div>
              <div className="mb-[30px]">
                <label htmlFor="client_email">Электронный адрес</label>
                <Input
                  id="client_email"
                  value={initialDataForm.client_email}
                  type="client_email"
                  isError={emailErrorInput}
                  onChange={handleEmailChange}
                  onFocus={() => {setEmailErrorInput(false)}}
                  classes={`w-[520px] ${emailErrorInput ? 'animate__animated animate__headShake' : ''}`}
                  text={errorDataForm.emailErrorPlaceHolder}
                />
              </div>
              <div className="mb-[30px]">
                <label htmlFor="phone_number">Номер телефона</label>
                <Input
                  id="phone_number"
                  value={initialDataForm.phone_number}
                  type="tel"
                  isError={phoneErrorInput}
                  onChange={handlePhoneChange}
                  onFocus={() => {setPhoneErrorInput(false)}}
                  classes={`w-[520px] ${phoneErrorInput ? 'animate__animated animate__headShake' : ''}`}
                  text={errorDataForm.phoneErrorPlaceHolder}
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
              {data?.results?.[hotelId]?.rooms?.[roomId]?.price_per_night *
                calculateDateDifference(state.arrival, state.departure)}{' '}
              сом
            </span>
          </div>
          <div className="flex justify-between text-3xl items-center">
            <span className="">Итого</span>
            <span>
              {data?.results?.[hotelId]?.rooms?.[roomId]?.price_per_night *
                calculateDateDifference(state.arrival, state.departure)}{' '}
              сом
            </span>
          </div>
          <Button clickFunc={handleClickBooking} classes={`py-[20px] w-full'}`}>
            Забронировать
          </Button>
        </div>
      </div>
      <ModalSuccess
        isOpen={activeModal}
        handleOk={handleCloseSuccess}
        handleCancel={handleCloseSuccess}
      />
    </div>
  )
}

export default Booking
