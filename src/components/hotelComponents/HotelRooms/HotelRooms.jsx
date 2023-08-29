import React from 'react'
import HotelRoomsCard from './HotelRoomsCard'
import arrow from '../../../assets/images/arrow-right.svg'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const HotelRooms = ({ handleActiveModal }) => {
  const { data, isLoading, isError } = useSelector(state => state.hotel)

  return (
    <div>
      <h5 className="py-6 text-[28px]">Номера</h5>
      <div className="flex gap-[40px] justify-between flex-wrap">
        {data?.rooms?.map((room, index) => (
          <NavLink key={index} to={`/hotelcatalog/${data?.id}/${index}`} state={room}>
            <HotelRoomsCard
              img={room.room_images[0].image}
              area={room.room_area}
              bedType={room.bed_type}
              maxGuest={room.max_guest_capacity}
              price={room.price_per_night}
            />
          </NavLink>
        ))}
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
