import roomIcons from '../../../pages/RoomPage/roomIcon'
import { Modal } from 'antd'
import clear from '../../../assets/images/clear.svg'

const ModalAllServices = ({ isOpen, handleOk, handleCancel, amenities }) => {
  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closeIcon={false}
      width={750}
      bodyStyle={{ padding: '40px 50px' }}
    >
      <div className='border-b pb-8'>
        <img
          onClick={handleCancel}
          className="absolute cursor-pointer top-11 left-11"
          src={clear}
          alt="clear"
        />
        <h1 className="text-center text-[28px]">Удобства номера</h1>
      </div>
      <ul className="mt-[42px]">
        {amenities?.room_amenities?.map((item, index) => (
          <li key={index} className="flex mb-[24px] ">
            <div className="flex">
              <img className="mr-[14px]" src={roomIcons[item]} alt="wifiIcon" />
              <span className="text-[22px]">{item}</span>
            </div>
          </li>
        ))}
        {amenities?.kitchen?.map((item, index) => (
          <li key={index} className="flex mb-[24px] ">
            <div className="flex">
              <img className="mr-[14px]" src={roomIcons[item]} alt="wifiIcon" />
              <span className="text-[22px]">{item}</span>
            </div>
          </li>
        ))}
        {amenities?.outside?.map((item, index) => (
          <li key={index} className="flex mb-[24px] ">
            <div className="flex">
              <img className="mr-[14px]" src={roomIcons[item]} alt="wifiIcon" />
              <span className="text-[22px]">{item}</span>
            </div>
          </li>
        ))}
        {amenities?.bathroom?.map((item, index) => (
          <li key={index} className="flex mb-[24px] ">
            <div className="flex">
              <img className="mr-[14px]" src={roomIcons[item]} alt="wifiIcon" />
              <span className="text-[22px]">{item}</span>
            </div>
          </li>
        ))}
      </ul>
    </Modal>
  )
}

export default ModalAllServices
