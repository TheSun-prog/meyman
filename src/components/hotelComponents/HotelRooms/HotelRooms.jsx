import React from 'react'
import HotelRoomsCard from './HotelRoomsCard'
import arrow from '../../../assets/images/arrow-right.svg'
import { useSelector } from 'react-redux'

const HotelRooms = ({ handleActiveModal }) => {

  const { data, isLoading, isError } = useSelector(state => state.hotel)

  return (
    <div>
      <h5 className="py-6 text-[28px]">Номера</h5>
      <div className="flex gap-[40px] justify-between flex-wrap">
        {data?.results?.[0]?.rooms?.[0]?.room_images.map(room => <HotelRoomsCard key={room.id} img={room.image}/>)}
      </div>
      <div
        onClick={handleActiveModal}
        className="flex items-center justify-end mt-7 cursor-pointer"
      >
        <span>Показать все номера</span>
        <img className="h-7" src={arrow} alt="arrow" />
      </div>
    </div>
  )
}

export default HotelRooms
