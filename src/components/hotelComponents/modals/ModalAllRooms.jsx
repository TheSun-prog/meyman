import ModalDefult from './ModalDefault'
import HotelRoomCard from '../HotelRooms/HotelRoomsCard'

const ModalAllRooms = ({handleCLickCloseModal}) => {
  return (
    <ModalDefult
      isTitle={true}
      title={'Номера'}
      classes={'!fixed w-[940px] h-[976px] overflow-y-scroll'}
      isBorder={true}
      handleCLickCloseModal={handleCLickCloseModal}
    >
      <div className="flex justify-center gap-5 mt-10 ">
        <div className='flex flex-col '>
          <div className="flex gap-4 mb-[40px]">
            <HotelRoomCard />
            <HotelRoomCard />
          </div>
          <div className="flex gap-4 mb-[40px]">
            <HotelRoomCard />
            <HotelRoomCard />
          </div>
          <div className="flex gap-4 mb-[40px]">
            <HotelRoomCard />
            <HotelRoomCard />
          </div>
          <div className="flex gap-4 mb-[40px]">
            <HotelRoomCard />
            <HotelRoomCard />
          </div>
        </div>
      </div>
    </ModalDefult>
  )
}

export default ModalAllRooms
