import React, { useEffect } from 'react'
import HotelRoomsCard from './HotelRoomsCard'
import arrow from '../../../assets/images/arrow-right.svg'
import { NavLink } from 'react-router-dom'

const HotelRooms = ({data, id, handleActiveModal }) => {

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <div>
      <h5 className="py-6 text-[28px]">Номера</h5>
      <div className="flex gap-[40px] justify-between flex-wrap">
        {data?.rooms?.map((room, index) => (
          <NavLink key={room.id} to={`/hotelcatalog/${id}/${room.id}`} state={room}>
            <HotelRoomsCard
              data={data}
              img={process.env.REACT_APP_API_URL +  room.room_images[0].image}
              area={room.room_area}
              bedType={room.bed_type}
              maxGuest={room.max_guest_capacity}
              price={room.price_per_night}
              name={room.room_name}
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
