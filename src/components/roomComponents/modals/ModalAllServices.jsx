import ModalDefult from '../../hotelComponents/modals/ModalDefault'
import roomIcons from '../../../pages/Room/roomIcon'

const ModalAllServices = ({ handleCLickCloseModal, amenities }) => {
  return (
    <ModalDefult
      title={'Удобства номера'}
      isTitle={true}
      classes={'w-[750px] h-screen overflow-y-scroll'}
      isBorder={true}
      handleCLickCloseModal={handleCLickCloseModal}
    >
      <ul className="pl-[80px] mt-[42px]">
        {amenities?.room_amenities?.map(item => (
          <li className="flex mb-[24px] ">
            <div className="flex">
              <img className="mr-[14px]" src={roomIcons[item]} alt="wifiIcon" />
              <span className="text-[22px]">{item}</span>
            </div>
          </li>
        ))}
      </ul>
    </ModalDefult>
  )
}

export default ModalAllServices
