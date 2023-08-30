import arrow from '../../../assets/images/arrow2.svg'
// ui
import Button from '../../ui/Button/Button'
// modules
import { ConfigProvider } from 'antd'
import { DatePicker } from 'antd'
import ru_RU from 'antd/locale/ru_RU'
import { useState } from 'react'
import 'animate.css'
import { useDispatch, useSelector } from 'react-redux'
import { postAvailabilityData } from '../../../store/slice/availabilitySlice'
import {Modal} from 'antd'


const HotelDate = ({ openModalFilteredRoom }) => {

  function getFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Месяц начинается с 0
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  function getFormattedDateWithOffset(offset) {
    const today = new Date();
    today.setDate(today.getDate() + offset);

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const [data, setData] = useState({  // initial state
    arrival: getFormattedDate(),
    departure: getFormattedDateWithOffset(2),
    persons: {
      adult: 0,
      children: 0,
      rooms: 0
    }
  })

  const warning = () => {
    Modal.warning({
      title: 'Максимальное количество гостей 6',
      autoFocusButton: true,
      centered: true,
      keyboard: true,
      maskClosable: true
    });
  };

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

  const handleArrivalChange = (date, str) => {
    const arrivalDate = new Date(str);
    const departureDate = new Date(data.departure);

    setData(prev => {
      if (arrivalDate > departureDate) {
        return { ...prev, arrival: str, departure: str };
      } else {
        return { ...prev, arrival: str };
      }
    });
  };

  const handleDepartureChange = (date, str) => {
    const arrivalDate = new Date(data.arrival);
    const departureDate = new Date(str);

    setData(prev => {
      if (departureDate < arrivalDate) {
        return { ...prev, arrival: str, departure: str };
      } else {
        return { ...prev, departure: str };
      }
    });
  };

  const lowestPrice =
    state?.rooms?.length > 0
      ? Math.min(...state.rooms.map(room => parseFloat(room.price_per_night)))
      : 0

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
          <svg
            className="mt-1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="32"
            viewBox="0 0 18 32"
            fill="none"
          >
            <path
              d="M8.62709 7.18769C5.88198 8.00256 4.07508 9.72284 3.24112 12.3259C2.93997 13.2652 2.91681 15.3816 3.19479 16.2871C3.85501 18.46 5.2681 20.1464 7.22558 21.0744C9.10198 21.9685 11.3606 22.0704 13.4339 21.3347C14.3258 21.0291 15.9821 19.9087 15.9821 19.6257C15.9821 19.5805 15.6231 19.1844 15.1945 18.7656L14.4069 17.996L13.9551 18.3808C11.9745 20.0558 8.83558 19.92 6.93601 18.0752C6.31054 17.4754 5.91673 16.8982 5.61558 16.106C5.30285 15.3024 5.30285 13.4916 5.604 12.7107C6.12522 11.3978 7.075 10.334 8.22169 9.80206C9.86644 9.04378 11.5575 9.0551 13.0864 9.84733C13.4918 10.051 14.1752 10.5377 14.2215 10.6396C14.3142 10.832 14.5343 10.6962 15.2408 10.0284C15.8779 9.42858 16.179 8.91929 15.8895 8.91929C15.8431 8.91929 15.681 8.80611 15.5188 8.65898C14.9049 8.11574 13.8277 7.56117 12.681 7.21033C11.8008 6.9387 9.50738 6.92739 8.62709 7.18769Z"
              fill={`${isAvailability ? 'red' : 'black'}`}
            />
            <path
              d="M3 23.9411V25H9.5H16V23.9411V22.8823H9.5H3V23.9411Z"
              fill={`${isAvailability ? 'red' : 'black'}`}
            />
          </svg>
          <span className="text-[24px] ml-1">ночь</span>
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
                    {data.departure}
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
                  {data.persons.adult + data.persons.children}
                  {data.persons.adult + data.persons.children === 1 ? ' гость' : ' гостей'}{' '}
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
                        const totalGuests = data.persons.adult + data.persons.children;
                        if (totalGuests < 6) {
                          setData(prev => ({
                            ...prev,
                            persons: {
                              ...prev.persons,
                              adult: prev.persons.adult + 1,
                            },
                          }));
                        } else {
                          {warning()}
                        }
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
                        const totalGuests = data.persons.adult + data.persons.children;
                        if (totalGuests < 6) {
                          setData(prev => ({
                            ...prev,
                            persons: {
                              ...prev.persons,
                              children: prev.persons.children + 1,
                            },
                          }));
                        } else {
                          {warning()}
                        }
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
