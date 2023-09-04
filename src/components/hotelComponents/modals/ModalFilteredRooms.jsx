import HotelRoomCard from '../HotelRooms/HotelRoomsCard'
import { useSelector } from 'react-redux'
import { Modal } from 'antd'
import clear from '../../../assets/images/clear.svg'

const ModalFilteredRooms = ({isOpen, handleOk, handleCancel}) => {
  const { data, isLoading, isError } = useSelector(state => state.hotel)

  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closeIcon={false}
      width={957}
      bodyStyle={{ paddingTop: 20 }}
    >
      <h1 className='text-center text-[28px]'>Номера</h1>
      <img
            onClick={handleCancel}
            className="absolute cursor-pointer top-5 left-5"
            src={clear}
            alt="clear"
          />
      <div className="flex justify-center gap-5 mt-10 ">
        <div className="flex flex-col ">
          {data?.results?.[0]?.rooms?.[0]?.room_images.map(room => (
            <div key={room.id} className="flex gap-4 mb-[40px]">
              <HotelRoomCard img={room.image} />
              <HotelRoomCard img={room.image} />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default ModalFilteredRooms
