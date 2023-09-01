import HotelRoomsCard from '../HotelRooms/HotelRoomsCard'
import { NavLink } from 'react-router-dom'
import { Modal } from 'antd'
import clear from '../../../assets/images/clear.svg'

const ModalAllRooms = ({ isOpen, handleOk, handleCancel, data, id }) => {
  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closeIcon={false}
      bodyStyle={{ padding: 20 }}
      width={940}
    >
      <h1 className="text-center text-[28px]">Номера</h1>
      <div className="flex justify-center gap-5 mt-10 ">
        <img
          onClick={handleCancel}
          className="absolute cursor-pointer top-6 left-6"
          src={clear}
          alt="clear"
        />
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
    </Modal>
  )
}

export default ModalAllRooms
