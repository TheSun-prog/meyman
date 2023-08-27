import ModalDefault from './ModalDefault'
import HotelRoomCard from '../HotelRooms/HotelRoomsCard'
import { useSelector } from 'react-redux'
import HotelRoomsCard from "../HotelRooms/HotelRoomsCard";
import React from "react";

const ModalAllRooms = ({ handleCLickCloseModal }) => {
  const { data, isLoading, isError } = useSelector(state => state.hotel)

  return (
    <ModalDefault
      isTitle={true}
      title={'Номера'}
      classes={'!fixed w-[940px] h-[976px] overflow-y-scroll'}
      isBorder={true}
      handleCLickCloseModal={handleCLickCloseModal}
    >
      <div className="flex justify-center gap-5 mt-10 ">
        <div className="flex flex-wrap justify-center gap-[18px] w-[940px] ">
          {data?.rooms?.map(room => (
            room.room_images.map(img => (
              <HotelRoomsCard
                key={img.id}
                classes={'mb-[22px]'}
                img={img.image}
                price={room.price_per_night}
                area={room.room_area}
                maxGuest={room.max_guest_capacity}
                bedType={room.bed_type}
              />
            ))
          ))}
        </div>
      </div>
    </ModalDefault>
  )
}

export default ModalAllRooms
