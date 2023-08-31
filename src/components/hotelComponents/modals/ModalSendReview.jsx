import { Modal } from 'antd'
import HotelSendReview from '../HotelSendReview/HotelSendReview'
import { Rate } from 'antd/lib'
import geo from '../../../assets/images/place.svg'
import { useState } from 'react'

const ModalSendReview = ({data, hotelId, showModal, setIsModalOpen}) => {

  //const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const customIcons = {
    1: <HotelSendReview num={1}/>,
    2: <HotelSendReview num={2}/>,
    3: <HotelSendReview num={3}/>,
    4: <HotelSendReview num={4}/>,
    5: <HotelSendReview num={5}/>,
    6: <HotelSendReview num={6}/>,
    7: <HotelSendReview num={7}/>,
    8: <HotelSendReview num={8}/>,
    9: <HotelSendReview num={9}/>,
    10: <HotelSendReview num={10}/>,
  };

  return (
    <Modal
      open={showModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={725}
    >
      <h2 className="text-center text-[28px] border-b">Отзывы</h2>
      <div className="flex gap-[27px] mt-[40px]">
        <img
          src={data?.results?.[hotelId]?.housing_images?.[0]?.image}
          alt="hotel"
          className="object-cover w-[270px] h-[250px] rounded-xl"
        />
        <div>
          <h3 className="text-[32px] font-[500]">
            {data?.results?.[hotelId]?.housing_name}
          </h3>
          <Rate defaultValue={5} disabled />
          <div className="flex gap-2 mt-3">
            <img src={geo} alt="geo" />
            <span className="text-[22px] text-[#787878]">
              {data?.results?.[hotelId]?.address}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[40px]">
        <div>
          <h3 className="text-[22px]">Как все прошло?</h3>
          <p className="text-[#1164B4] text-[18px] mb-[12px]">Замечательно</p>
          <Rate
            count={10}
            style={{ fontSize: '22px', color: '#1164B4' }}
            character={({ index }) => customIcons[index + 1]}
          />
        </div>
      </div>
    </Modal>
  )
}

export default ModalSendReview
