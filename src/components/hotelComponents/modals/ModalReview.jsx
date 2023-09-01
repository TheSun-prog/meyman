import { Modal } from 'antd'
import person from '../../../assets/images/viliam.jpg'
import clear from '../../../assets/images/clear.svg'

const ModalReview = ({ isOpen, handleOk, handleCancel, data }) => {
  const totalRate =
    (data?.cleanliness_rating +
      data?.comfort_rating +
      data?.food_rating +
      data?.location_rating +
      data?.staff_rating +
      data?.value_for_money_rating) /
    6

  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closeIcon={false}
      width={634}
      bodyStyle={{ padding: '40px 50px' }}
    >
      <img
        onClick={handleCancel}
        className="absolute cursor-pointer left-10"
        src={clear}
        alt="clear"
      />
      <div>
        <div className="flex items-center mt-[70px]">
          <img
            className="h-[80px] w-[80px] object-cover rounded-full"
            src={person}
            alt="person"
          />
          <span className="text-[22px] ml-3">William</span>
        </div>
        <p className="text-[18px] mt-4">{data?.comment}</p>
        <div className="h-[80px] w-[49px] flex justify-center items-center absolute top-0 right-[60px] rounded-b-lg p-2 bg-[#FFC506] text-xl  text-white">
          <span>{Math.round(totalRate)}</span>
        </div>
      </div>
    </Modal>
  )
}

export default ModalReview
