import { ConfigProvider } from 'antd'
import { DatePicker } from 'antd'
import ru_RU from 'antd/locale/ru_RU'
import arrow from '../../../assets/images/arrow2.svg'
// icon
import somIcon from '../../../assets/images/som.svg'
// ui
import Button from '../../ui/Button/Button'
// modules
import { useEffect, useState } from 'react'
import 'animate.css'
import { useDispatch, useSelector } from 'react-redux'
import { reservationHotelPostData } from '../../../store/reservationsSlice'
import {postAvailabilityData} from "../../../store/availabilitySlice";

const HotelDate = ({ openModalFilteredRoom }) => {
  const [data, setData] = useState({
    arrival: '2023-08-24',
    departure: '2023-08-26',
    persons: {
      adult: 0,
      children: 0,
      rooms: 0
    }
  })

  const dispatch = useDispatch()
  const state = useSelector(state => state.hotel.data)

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
    dispatch(postAvailabilityData(data))
  }

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
          <span className="text-[24px]">
            {state?.rooms?.[0]?.price_per_night}
          </span>
          <span className="text-[30px]">&#8384;</span>
          <span className="text-[24px]">ночь</span>
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
                    {data.arrival}
                  </span>
                </div>
                <DatePicker
                  className="absolute top-0 right-0 left-0 bottom-0 opacity-0"
                  onOpenChange={handleOpenChange}
                  inputReadOnly={true}
                  onChange={(date, str) => {
                    setData(prev => ({ ...prev, arrival: str }))
                  }}
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
                    {data.departure}
                  </span>
                </div>
                <DatePicker
                  className="absolute top-0 right-0 left-0 bottom-0 opacity-0"
                  onOpenChange={handleOpenChange2}
                  inputReadOnly={true}
                  onChange={(date, str) => {
                    setData(prev => ({ ...prev, departure: str }))
                  }}
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
                  {data.persons.adult}
                  {data.persons.adult === 1 ? ' гость' : ' гостей'}{' '}
                  <span>&#8226;</span> {data.persons.rooms}{' '}
                  {data.persons.rooms === 1
                    ? 'номер'
                    : data.persons.rooms > 1 && data.persons.rooms < 5
                    ? 'номера'
                    : data.persons.rooms >= 5
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
                        setData(prev => ({
                          ...prev,
                          persons: {
                            ...prev.persons,
                            adult: prev.persons.adult + 1
                          }
                        }))
                      }}
                      className="text-[#282F77] cursor-pointer flex items-center justify-center pb-1 text-2xl rounded-full border h-[32px] w-[32px] border-black"
                    >
                      <span>+</span>
                    </div>
                    <span className="px-4 text-[24px]">
                      {data.persons.adult}
                    </span>
                    <div
                      onClick={() => {
                        setData(prev => ({
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
                        setData(prev => ({
                          ...prev,
                          persons: {
                            ...prev.persons,
                            children: prev.persons.children + 1
                          }
                        }))
                      }}
                      className="text-[#282F77] cursor-pointer flex items-center justify-center pb-1 text-2xl rounded-full border h-[32px] w-[32px] border-black"
                    >
                      <span>+</span>
                    </div>
                    <span className="px-4 text-[24px]">
                      {data.persons.children}
                    </span>
                    <div
                      onClick={() => {
                        setData(prev => ({
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
                        setData(prev => ({
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
                      {data.persons.rooms}
                    </span>
                    <div
                      onClick={() => {
                        setData(prev => ({
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
          classes={`w-full py-[20px] mt-[25px] ${
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
