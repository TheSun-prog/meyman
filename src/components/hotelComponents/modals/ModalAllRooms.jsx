import ModalDefault from './ModalDefault'
import HotelRoomCard from '../HotelRooms/HotelRoomsCard'
import { useSelector } from 'react-redux'

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
        <div className="flex flex-col ">
          {data?.results?.[0]?.rooms?.[0]?.room_images.map(room => (
            <div key={room.id} className="flex gap-4 mb-[40px]">
              <HotelRoomCard img={room.image}/>
              <HotelRoomCard img={room.image}/>
            </div>
          ))}
        </div>
      </div>
    </ModalDefault>
  )
}

export default ModalAllRooms
