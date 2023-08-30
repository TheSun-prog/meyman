import ModalDefault from './ModalDefault'
import HotelRoomsCard from '../HotelRooms/HotelRoomsCard'
import { NavLink } from 'react-router-dom'

const ModalAllRooms = ({data, id, handleCLickCloseModal }) => {
  
  return (
    <ModalDefault
      isTitle={true}
      title={'Номера'}
      classes={'!fixed w-2/3 h-[80vh] overflow-y-scroll'}
      isBorder={true}
      handleCLickCloseModal={handleCLickCloseModal}
    >
      <div className="flex justify-center gap-5 mt-10 ">
        <div className="flex flex-wrap justify-center gap-[18px] w-[940px] ">
          {data?.results?.[id]?.rooms?.map((room, index) => (
            <NavLink
              key={index}
              to={`/hotelcatalog/:hotelId/${index}`}
              state={room}
            >
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
      </div>
    </ModalDefault>
  )
}

export default ModalAllRooms
