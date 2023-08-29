import { ConfigProvider } from 'antd'
import { DatePicker } from 'antd'
import ru_RU from 'antd/locale/ru_RU'
import arrow from '../../assets/images/arrow2.svg'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHotelData } from '../../store/hotelSlice'
// icon
import somIcon from '../../assets/images/som.svg'
// ui
import Button from '../ui/Button/Button'

const RoomDate = ({ state, roomId }) => {

  const [initialData, setInitialData] = useState(() => {
    // При загрузке компонента, сначала попробуйте получить данные из localStorage
    const storedData = localStorage.getItem('initialData');
    return storedData ? JSON.parse(storedData) : {
      arrival: '2023-08-24',
      departure: '2023-08-26'
    };
  });

  const {data} = useSelector(state => state.hotel)
  const dispatch = useDispatch()
  
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const handleOpenChange = status => {
    setIsDatePickerOpen(status)
  }
  
  const [isDatePickerOpen2, setIsDatePickerOpen2] = useState(false)
  const handleOpenChange2 = status => {
    setIsDatePickerOpen2(status)
  }
  
  useEffect(() => {
    // При изменении initialData, обновите данные в localStorage
    localStorage.setItem('initialData', JSON.stringify(initialData));
    console.log(initialData);
  }, [initialData]);

  useEffect(() => {
    dispatch(fetchHotelData(roomId))
  }, [])

  return (
    <ConfigProvider locale={ru_RU}>
      <div className="max-h-[325px] w-[473px] py-10 px-10 rounded-3xl border shadow-lg">
        <div className="flex items-center mb-7">
          <span className="text-[24px]">{data?.rooms?.[roomId]?.price_per_night}</span>
          <img src={somIcon} alt="somIcon" />
          <span className="text-[24px]">ночь</span>
        </div>
        <div className="rounded-xl border border-black">
          <div className="flex">
            <div className="w-1/2 px-4 py-2  border-r border-black">
              <div className="relative flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-xl">Прибытие</p>
                  <span className="text-[#8C8C8C] text-[18px]">
                    {initialData.arrival}
                  </span>
                </div>
                <DatePicker
                  className="absolute top-0 right-0 left-0 bottom-0 opacity-0"
                  onOpenChange={handleOpenChange}
                  inputReadOnly={true}
                  onChange={(date, str) => {
                    setInitialData(prev => ({ ...prev, arrival: str }))
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
                  <span className="text-[#8C8C8C] text-[18px]">
                    {initialData.departure}
                  </span>
                </div>
                <DatePicker
                  className="absolute top-0 right-0 left-0 bottom-0 opacity-0"
                  onOpenChange={handleOpenChange2}
                  inputReadOnly={true}
                  onChange={(date, str) => {
                    setInitialData(prev => ({ ...prev, departure: str }))
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
        </div>
        <NavLink to={`/hotelcatalog/${data.id}/${roomId}/booking`} state={[initialData, state]}>
          <Button classes={'w-full py-[20px] mt-[25px]'}>Забронировать</Button>
        </NavLink>
      </div>
    </ConfigProvider>
  )
}

export default RoomDate
