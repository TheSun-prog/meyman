import { Modal } from 'antd'
import HotelSendReview from '../HotelSendReview/HotelSendReview'
import { Rate } from 'antd/lib'
import geo from '../../../assets/images/place.svg'
import TextArea from 'antd/es/input/TextArea'
import Button from '../../ui/Button/Button'
import { useEffect, useState } from 'react'
import clear from '../../../assets/images/clear.svg'

const ModalSendReview = ({ isOpen, handleOk, handleCancel, data, hotelId }) => {
  const [textAreaValue, setTextAreaValue] = useState('')

  const [rate, setRate] = useState('')

  const customIcons = {
    1: <HotelSendReview num={1} />,
    2: <HotelSendReview num={2} />,
    3: <HotelSendReview num={3} />,
    4: <HotelSendReview num={4} />,
    5: <HotelSendReview num={5} />,
    6: <HotelSendReview num={6} />,
    7: <HotelSendReview num={7} />,
    8: <HotelSendReview num={8} />,
    9: <HotelSendReview num={9} />,
    10: <HotelSendReview num={10} />
  }

  useEffect(() => {
    console.log(rate)
  }, [rate])

  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={725}
      style={{ borderRadius: '20px' }}
      bodyStyle={{ padding: '20px 70px' }}
      closeIcon={false}
    >
      <img
        onClick={handleCancel}
        className="absolute cursor-pointer top-6 left-6"
        src={clear}
        alt="clear"
      />
      <h2 className="text-center text-[28px] border-b pb-4">Отзывы</h2>
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
        <div className="mb-[40px]">
          <h3 className="text-[22px]">Как все прошло?</h3>
          <p className="text-[#1164B4] text-[18px] mb-[12px]">Замечательно</p>
          <Rate
            count={10}
            style={{ fontSize: '22px', color: '#1164B4' }}
            character={({ index }) => customIcons[index + 1]}
            onChange={num => {
              setRate(num)
            }}
          />
        </div>
        <div className="mb-[40px]">
          <h3 className="text-[22px]">Насколько вам понравился персонал?</h3>
          <p className="text-[#1164B4] text-[18px] mb-[12px]">Замечательно</p>
          <Rate
            count={10}
            style={{ fontSize: '22px', color: '#1164B4' }}
            character={({ index }) => customIcons[index + 1]}
          />
        </div>
        <div className="mb-[40px]">
          <h3 className="text-[22px]">Было ли вам комфортно в нашем отеле?</h3>
          <p className="text-[#1164B4] text-[18px] mb-[12px]">Замечательно</p>
          <Rate
            count={10}
            style={{ fontSize: '22px', color: '#1164B4' }}
            character={({ index }) => customIcons[index + 1]}
          />
        </div>
        <div className="mb-[40px]">
          <h3 className="text-[22px]">
            Довольны ли вы уровнем чистоты в отеле?
          </h3>
          <p className="text-[#1164B4] text-[18px] mb-[12px]">Замечательно</p>
          <Rate
            count={10}
            style={{ fontSize: '22px', color: '#1164B4' }}
            character={({ index }) => customIcons[index + 1]}
          />
        </div>
        <div className="mb-[40px]">
          <h3 className="text-[22px]">
            Вас утроило соотношение цены и качества?
          </h3>
          <p className="text-[#1164B4] text-[18px] mb-[12px]">Замечательно</p>
          <Rate
            count={10}
            style={{ fontSize: '22px', color: '#1164B4' }}
            character={({ index }) => customIcons[index + 1]}
          />
        </div>
        <div className="mb-[40px]">
          <h3 className="text-[22px]">
            Вам понравилось питание в нашем отеле?
          </h3>
          <p className="text-[#1164B4] text-[18px] mb-[12px]">Замечательно</p>
          <Rate
            count={10}
            style={{ fontSize: '22px', color: '#1164B4' }}
            character={({ index }) => customIcons[index + 1]}
          />
        </div>
        <div className="mb-[40px]">
          <h3 className="text-[22px]">Вас утроило месторасположение отеля?</h3>
          <p className="text-[#1164B4] text-[18px] mb-[12px]">Замечательно</p>
          <Rate
            count={10}
            style={{ fontSize: '22px', color: '#1164B4' }}
            character={({ index }) => customIcons[index + 1]}
          />
        </div>
        <h3 className="text-[22px] mb-[20px] mt-[40px]">
          Пожалуйста, оставьте ваш комментарий:
        </h3>
        <TextArea
          onChange={e => {
            setTextAreaValue(e.target.value)
          }}
          value={textAreaValue}
          style={{ borderRadius: '27px', border: '2px solid #787878' }}
          autoSize={{ minRows: 6, maxRows: 12 }}
          maxLength={500}
          placeholder="Напишите ваш комментарий "
        />
        <span className="block mb-[40px]">
          Символов: {textAreaValue.length} из 500
        </span>
        <Button classes={'py-[20px] w-full mb-[60px]'}>Отправить</Button>
      </div>
    </Modal>
  )
}

export default ModalSendReview
