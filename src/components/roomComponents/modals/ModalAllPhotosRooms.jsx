import ModalDefult from '../../hotelComponents/modals/ModalDefault'
import room from '../../../assets/images/room-img.png'

const ModalAllPhotosRooms = ({ handleCLickCloseModal }) => {
  return (
    <ModalDefult
      isTitle={false}
      classes={'!fixed w-[720px] h-[976px] overflow-y-scroll'}
      isBorder={false}
      handleCLickCloseModal={handleCLickCloseModal}
    >
      <div className="flex justify-center gap-5 mt-10">
        <div className="flex flex-col ">
          <div className="flex gap-4 mb-[40px]">
            <img className="w-[300px] rounded-2xl" src={room} alt="room" />
            <img className="w-[300px] rounded-2xl" src={room} alt="room" />
          </div>
          <div className="flex gap-4 mb-[40px]">
            <img className="w-[300px] rounded-2xl" src={room} alt="room" />
            <img className="w-[300px] rounded-2xl" src={room} alt="room" />
          </div>
          <div className="flex gap-4 mb-[40px]">
            <img className="w-[300px] rounded-2xl" src={room} alt="room" />
            <img className="w-[300px] rounded-2xl" src={room} alt="room" />
          </div>
          <div className="flex gap-4 mb-[40px]">
            <img className="w-[300px] rounded-2xl" src={room} alt="room" />
            <img className="w-[300px] rounded-2xl" src={room} alt="room" />
          </div>
          <div className="flex gap-4 mb-[40px]">
            <img className="w-[300px] rounded-2xl" src={room} alt="room" />
            <img className="w-[300px] rounded-2xl" src={room} alt="room" />
          </div>
          <div className="flex gap-4 mb-[40px]">
            <img className="w-[300px] rounded-2xl" src={room} alt="room" />
            <img className="w-[300px] rounded-2xl" src={room} alt="room" />
          </div>
        </div>
      </div>
    </ModalDefult>
  )
}

export default ModalAllPhotosRooms
