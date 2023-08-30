import { ConfigProvider } from 'antd'
import { DatePicker } from 'antd'
import ru_RU from 'antd/locale/ru_RU'
import arrow from '../../assets/images/arrow2.svg'
// icon
import somIcon from '../../assets/images/som.svg'
// ui
import Button from '../ui/Button/Button'

import { useState } from 'react'

const RoomDate = () => {
  const [data, setData] = useState({
    arrival: '2023-08-24',
    departure: '2023-08-26',
  })

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const handleOpenChange = status => {
    setIsDatePickerOpen(status)
  }

  const [isDatePickerOpen2, setIsDatePickerOpen2] = useState(false)
  const handleOpenChange2 = status => {
    setIsDatePickerOpen2(status)
  }


  return (
    <ConfigProvider locale={ru_RU}>
    <div className="max-h-[325px] w-[473px] py-10 px-10 rounded-3xl border shadow-lg">
      <div className="flex items-center mb-7">
        <span className="text-[18px] mt-1 mr-1">От</span>
        <span className="text-[24px]">3000</span>
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
                <span className="text-[#8C8C8C] text-[18px]">
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
      </div>
      <Button classes={'w-full py-[20px] mt-[25px]'}>Изменить</Button>
    </div>
    </ConfigProvider>
  )
}

export default RoomDate
