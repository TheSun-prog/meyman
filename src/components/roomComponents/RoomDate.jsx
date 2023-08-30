// react
import { ConfigProvider } from 'antd'
import { DatePicker } from 'antd'
import ru_RU from 'antd/locale/ru_RU'
import arrow from '../../assets/images/arrow2.svg'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// icon
import somIcon from '../../assets/images/som.svg'
// ui
import Button from '../ui/Button/Button'

const RoomDate = ({data, roomId }) => {

  const {hotelId} = useParams()

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

  const [initialData, setInitialData] = useState(() => {
    // При загрузке компонента, сначала попробуйте получить данные из localStorage
    const storedData = localStorage.getItem('initialData');
    return storedData ? JSON.parse(storedData) : {
      arrival: getFormattedDate(),
      departure: getFormattedDateWithOffset(2)
    };
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const handleOpenChange = status => {
    setIsDatePickerOpen(status)
  }

  const [isDatePickerOpen2, setIsDatePickerOpen2] = useState(false)
  const handleOpenChange2 = status => {
    setIsDatePickerOpen2(status)
  }

  const handleArrivalChange = (date, str) => {
    const arrivalDate = new Date(str);
    const departureDate = new Date(initialData.departure);

    setInitialData(prev => {
      if (arrivalDate > departureDate) {
        return { ...prev, arrival: str, departure: str };
      } else {
        return { ...prev, arrival: str };
      }
    });
  };

  const handleDepartureChange = (date, str) => {
    const arrivalDate = new Date(initialData.arrival);
    const departureDate = new Date(str);

    setInitialData(prev => {
      if (departureDate < arrivalDate) {
        return { ...prev, arrival: str, departure: str };
      } else {
        return { ...prev, departure: str };
      }
    });
  };

  useEffect(() => {
    // При изменении initialData, обновите данные в localStorage
    localStorage.setItem('initialData', JSON.stringify(initialData));
  }, [initialData]);


  return (
    <ConfigProvider locale={ru_RU}>
      <div className="max-h-[325px] w-[473px] py-10 px-10 rounded-3xl border shadow-lg">
        <div className="flex items-center mb-7">
          <span className="text-[24px]">{data?.results?.[hotelId]?.rooms?.[roomId]?.price_per_night}</span>
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
                  <span className="text-[#8C8C8C] text-[18px]">
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
        </div>
        <NavLink to={`/hotelcatalog/${data.id}/${roomId}/booking`} state={initialData}>
          <Button classes={'w-full py-[20px] mt-[25px]'}>Забронировать</Button>
        </NavLink>
      </div>
    </ConfigProvider>
  )
}

export default RoomDate
