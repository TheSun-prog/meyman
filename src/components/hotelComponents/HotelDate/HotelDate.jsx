import arrow from '../../../assets/images/arrow2.svg'
import kgs from '../../../assets/images/som.svg'
import eur from '../../../assets/images/eur.svg'
import usd from '../../../assets/images/usd.svg'
// ui
import Button from '../../ui/Button/Button'
// modules
import { ConfigProvider } from 'antd'
import { DatePicker } from 'antd'
import ru_RU from 'antd/locale/ru_RU'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import 'animate.css'
import { useDispatch, useSelector } from 'react-redux'
import { postAvailabilityData } from '../../../store/slice/availabilitySlice'
import { Modal } from 'antd'

const HotelDate = ({ data, id, openModalFilteredRoom }) => {
  const { hotelId } = useParams()

  const housingId = useSelector(
    state => state?.housing?.data?.results?.[hotelId]?.id
  )

  const currency = useSelector(state => state.currency)
  const localStorageCurrency = localStorage.getItem('currency')

  const currencys = {
    'KGS': kgs,
    'EUR': eur,
    'USD': usd
  }

  function getFormattedDate() {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0') // Месяц начинается с 0
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  function getFormattedDateWithOffset(offset) {
    const today = new Date()
    today.setDate(today.getDate() + offset)

    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  const [initialData, setInitialData] = useState({
    // initial state
    arrival: getFormattedDate(),
    departure: getFormattedDateWithOffset(2),
    persons: {
      adult: 0,
      children: 0,
      rooms: 0
    }
  })

  const [availabilityData, setAvailabilityPostData] = useState({
    housing: 1,
    date: initialData.arrival
  })

  const warning = () => {
    Modal.warning({
      title: 'Максимальное количество гостей 6',
      autoFocusButton: true,
      centered: true,
      keyboard: true,
      maskClosable: true
    })
  }

  const dispatch = useDispatch()

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [isDatePickerOpen2, setIsDatePickerOpen2] = useState(false)
  const [isDatePickerOpen3, setIsDatePickerOpen3] = useState(false)
  const [isAvailability, setIsAvailability] = useState(false)
  const handleOpenChange = status => {
    setIsDatePickerOpen(status)
  }

  const handleOpenChange2 = status => {
    setIsDatePickerOpen2(status)
  }

  const handleSubmitForm = e => {
    e.preventDefault()
    dispatch(postAvailabilityData(availabilityData))
  }

  const handleArrivalChange = (date, str) => {
    const arrivalDate = new Date(str)
    const departureDate = new Date(initialData.departure)

    setInitialData(prev => {
      if (arrivalDate > departureDate) {
        return { ...prev, arrival: str, departure: str }
      } else {
        return { ...prev, arrival: str }
      }
    })
  }

  const handleDepartureChange = (date, str) => {
    const arrivalDate = new Date(initialData.arrival)
    const departureDate = new Date(str)

    setInitialData(prev => {
      if (departureDate < arrivalDate) {
        return { ...prev, arrival: str, departure: str }
      } else {
        return { ...prev, departure: str }
      }
    })
  }

  const lowestPrice =
    data?.rooms?.length > 0
      ? Math.min(...data?.rooms?.map(room => parseFloat(room.price_per_night)))
      : 0

  useEffect(() => {
    console.log(availabilityData)
  }, [availabilityData])

  return (
    <ConfigProvider locale={ru_RU}>
      <form
        onSubmit={handleSubmitForm}
        className={`max-h-[416px] w-[473px] py-10 px-10 select-none rounded-3xl border shadow-lg ${
          isAvailability ? 'text-red-600 border-red-600' : ''
        }`}
      >
        <div className="flex items-center mb-7">
          <span className="text-[18px] mt-1 mr-1">От</span>
          <span className="text-[24px]">{lowestPrice}</span>
          <img
            src={
              currency === 'KGS'
                ? kgs
                : currency === 'USD'
                ? usd
                : currency === 'EUR'
                ? eur
                : currencys[localStorageCurrency]
            }
            alt="currency"
          />
          <span className='text-[18px]'>ночь</span>
        </div>
        <div
          className={`rounded-xl border border-black ${
            isAvailability ? 'border-red-600' : ''
          }`}
        >
          <div
            className={`flex border-b border-black ${
              isAvailability ? 'border-red-600' : ''
            }`}
          >
            <div
              className={`w-1/2 px-4 py-2  border-r border-black ${
                isAvailability ? 'border-red-600' : ''
              }`}
            >
              <div className="relative flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-xl">Прибытие</p>
                  <span
                    className={`text-[#8C8C8C] text-[18px] ${
                      isAvailability ? 'text-red-600' : ''
                    }`}
                  >
                    {initialData.arrival}
                  </span>
                </div>
                <DatePicker
                  className="absolute top-0 right-0 left-0 bottom-0 opacity-0"
                  onOpenChange={handleOpenChange}
                  inputReadOnly={true}
                  onChange={handleArrivalChange}
                />
                <img
                  className={`${
                    isDatePickerOpen ? 'rotate-180' : ''
                  } transition-all`}
                  src={arrow}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="w-1/2 px-4 py-2 justify-between">
              <div className="relative flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-xl">Выезд</p>
                  <span
                    className={`text-[#8C8C8C] text-[18px] ${
                      isAvailability ? 'text-red-600' : ''
                    }`}
                  >
                    {initialData.departure}
                  </span>
                </div>
                <DatePicker
                  className="absolute top-0 right-0 left-0 bottom-0 opacity-0"
                  onOpenChange={handleOpenChange2}
                  inputReadOnly={true}
                  onChange={handleDepartureChange}
                />
                <img
                  className={`${
                    isDatePickerOpen2 ? 'rotate-180' : ''
                  } transition-all`}
                  src={arrow}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              onClick={() => {
                setIsDatePickerOpen3(prev => !prev)
              }}
              className="flex relative justify-between w-full px-4 py-2"
            >
              <div className="flex flex-col">
                <p className="text-xl">Для кого</p>
                <span
                  className={`text-[#8C8C8C] text-[18px] ${
                    isAvailability ? 'text-red-600' : ''
                  }`}
                >
                  {initialData.persons.adult + initialData.persons.children}
                  {initialData.persons.adult + initialData.persons.children ===
                  1
                    ? ' гость'
                    : ' гостей'}{' '}
                  <span>&#8226;</span> {initialData.persons.rooms}{' '}
                  {initialData.persons.rooms === 1
                    ? 'номер'
                    : initialData.persons.rooms > 1 &&
                      initialData.persons.rooms < 5
                    ? 'номера'
                    : initialData.persons.rooms >= 5
                    ? 'номеров'
                    : ''}
                </span>
              </div>
              <img
                className={`${
                  isDatePickerOpen3 ? 'rotate-180' : ''
                } transition-all`}
                src={arrow}
                alt="arrow"
              />
            </div>
            {isDatePickerOpen3 && (
              <div className="absolute h-[232px] rounded-xl w-full border top-16 right-0 p-10 bg-white select-none shadow-md animate__animated animate__fadeInDown">
                <div className="flex justify-between mb-5">
                  <span className="text-[20px]">Взрослые</span>
                  <div className="flex">
                    <div
                      onClick={() => {
                        const totalGuests =
                          initialData.persons.adult +
                          initialData.persons.children
                        if (totalGuests < 6) {
                          setInitialData(prev => ({
                            ...prev,
                            persons: {
                              ...prev.persons,
                              adult: prev.persons.adult + 1
                            }
                          }))
                        } else {
                          {
                            warning()
                          }
                        }
                      }}
                      className="text-[#282F77] cursor-pointer flex items-center justify-center pb-1 text-2xl rounded-full border h-[32px] w-[32px] border-black"
                    >
                      <span>+</span>
                    </div>
                    <span className="px-4 text-[24px]">
                      {initialData.persons.adult}
                    </span>
                    <div
                      onClick={() => {
                        setInitialData(prev => ({
                          ...prev,
                          persons: {
                            ...prev.persons,
                            adult: Math.max(prev.persons.adult - 1, 0)
                          }
                        }))
                      }}
                      className="text-[#282F77] cursor-pointer flex items-center justify-center pb-1 text-2xl rounded-full border h-[32px] w-[32px] border-black"
                    >
                      <span>-</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mb-5">
                  <span className="text-[20px]">Дети</span>
                  <div className="flex">
                    <div
                      onClick={() => {
                        const totalGuests =
                          initialData.persons.adult +
                          initialData.persons.children
                        if (totalGuests < 6) {
                          setInitialData(prev => ({
                            ...prev,
                            persons: {
                              ...prev.persons,
                              children: prev.persons.children + 1
                            }
                          }))
                        } else {
                          {
                            warning()
                          }
                        }
                      }}
                      className="text-[#282F77] cursor-pointer flex items-center justify-center pb-1 text-2xl rounded-full border h-[32px] w-[32px] border-black"
                    >
                      <span>+</span>
                    </div>
                    <span className="px-4 text-[24px]">
                      {initialData.persons.children}
                    </span>
                    <div
                      onClick={() => {
                        setInitialData(prev => ({
                          ...prev,
                          persons: {
                            ...prev.persons,
                            children: Math.max(prev.persons.children - 1, 0)
                          }
                        }))
                      }}
                      className="text-[#282F77] cursor-pointer flex items-center justify-center pb-1 text-2xl rounded-full border h-[32px] w-[32px] border-black"
                    >
                      <span>-</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mb-5">
                  <span className="text-[20px]">Номера</span>
                  <div className="flex">
                    <div
                      onClick={() => {
                        setInitialData(prev => ({
                          ...prev,
                          persons: {
                            ...prev.persons,
                            rooms: prev.persons.rooms + 1
                          }
                        }))
                      }}
                      className="text-[#282F77] cursor-pointer flex items-center justify-center pb-1 text-2xl rounded-full border h-[32px] w-[32px] border-black"
                    >
                      <span>+</span>
                    </div>
                    <span className="px-4 text-[24px]">
                      {initialData.persons.rooms}
                    </span>
                    <div
                      onClick={() => {
                        setInitialData(prev => ({
                          ...prev,
                          persons: {
                            ...prev.persons,
                            rooms: Math.max(prev.persons.rooms - 1, 0)
                          }
                        }))
                      }}
                      className="text-[#282F77] cursor-pointer flex items-center justify-center pb-1 text-2xl rounded-full border h-[32px] w-[32px] border-black"
                    >
                      <span>-</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Button
          classes={`w-full py-[20px] mt-[25px] shadow-xl text-[18px] ${
            isAvailability ? 'bg-red-600' : ''
          }`}
          clickFunc={openModalFilteredRoom}
        >
          Найти номер
        </Button>
        {isAvailability && (
          <div className=" flex items-center mt-4">
            <div className="bg-red-600 rounded-full h-[24px] w-[24px] flex justify-center items-center mr-[5px]">
              <span className="text-white">i</span>
            </div>
            <span className="text-red-600">
              Нет свободных номеров на эти даты
            </span>
          </div>
        )}
      </form>
    </ConfigProvider>
  )
}

export default HotelDate
