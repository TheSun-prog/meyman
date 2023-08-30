import React from 'react'
import HotelRoomsCard from './HotelRoomsCard'

const HotelRooms = () => {
  return (
    <div>
      <h5 className="py-6 text-[28px]">Номера</h5>
      <div className='flex gap-[40px] justify-between flex-wrap'>
        <HotelRoomsCard />
        <HotelRoomsCard />
        <HotelRoomsCard />
        <HotelRoomsCard />
        <HotelRoomsCard />
        <HotelRoomsCard />
      </div>
    </div>
  )
}

export default HotelRooms
