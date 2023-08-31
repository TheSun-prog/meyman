// icons
import arrow from '../../assets/images/arrow2.svg'
import geo from '../../assets/images/place.svg'
// components
import HotelName from '../../components/hotelComponents/HotelName/HotelName'
import HotelImages from '../../components/hotelComponents/HotelImages/HotelImages'
import HotelRules from '../../components/hotelComponents/HotelRules/HotelRules'
import HotelRooms from '../../components/hotelComponents/HotelRooms/HotelRooms'
import HotelGrade from '../../components/hotelComponents/HotelGrade/HotelGrade'
import ReviewSwiper from '../../components/reviewComponents/ReviewSwiper/ReviewSwiper'
import ModalReview from '../../components/hotelComponents/modals/ModalReview'
import ModalAllRooms from '../../components/hotelComponents/modals/ModalAllRooms'
import ModalAllPhotos from '../../components/hotelComponents/modals/ModalAllPhotos'
import HotelDate from '../../components/hotelComponents/HotelDate/HotelDate'
import ModalFilteredRooms from '../../components/hotelComponents/modals/ModalFilteredRooms'
import ModalServices from '../../components/hotelComponents/modals/ModalServices'
// modules
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchHousingData } from '../../store/slice/housingSlice'
import Button from '../../components/ui/Button/Button'
import { Modal } from 'antd'
import { Rate } from 'antd/lib'
import HotelSendReview from '../../components/hotelComponents/HotelSendReview/HotelSendReview'
import ModalSendReview from '../../components/hotelComponents/modals/ModalSendReview'

const HotelPage = () => {
  const [activeModalReview, setActiveModalReview] = useState(false)
  const [activeModalAllRooms, setActiveModalAllRooms] = useState(false)
  const [activeModalALlImages, setActiveModalImages] = useState(false)
  const [modalFilteredRoom, setModalFilteredRoom] = useState(false)
  const [activeModalServices, setActiveModalServices] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [reviewData, setReviewData] = useState()

  const dispatch = useDispatch()

  const { data, isError } = useSelector(state => state.housing)

  const { hotelId } = useParams()

  const openModalFilteredRoom = () => {
    setModalFilteredRoom(true)
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

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

  useEffect(() => {
    dispatch(fetchHousingData({ limit: 12, offset: 0 }))
  }, [dispatch])

  return (
    <div
      className="mx-auto w-[1240px]"
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
      <div className="flex items-center mb-[50px] mt-[45px]">
        <Link to={'/'}>Главная</Link>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <Link to={`/hotelcatalog/${hotelId}`}>Отель</Link>
      </div>
      <div>
        <HotelName data={data} id={hotelId} />
        {isError ? (
          <h1 className="text-center text-[40px] text-red-700 mt-2">
            Нет такого отеля!
          </h1>
        ) : (
          <HotelImages
            data={data}
            id={hotelId}
            handleOpenModalImages={setActiveModalImages}
          />
        )}
        <div className="flex justify-between mt-[50px]">
          <HotelRules
            data={data}
            id={hotelId}
            handleClickModal={() => {
              setActiveModalServices(true)
            }}
          />
          <HotelDate
            data={data}
            id={hotelId}
            openModalFilteredRoom={openModalFilteredRoom}
          />
        </div>
        <HotelRooms
          data={data}
          id={hotelId}
          handleActiveModal={() => {
            setActiveModalAllRooms(true)
          }}
        />
        <HotelGrade data={data} id={hotelId} />
        <ReviewSwiper
          data={data}
          id={hotelId}
          handleClick={value => {
            setReviewData(value)
            setActiveModalReview(true)
          }}
        />
        <Button
          clickFunc={() => {
            setIsModalOpen(true)
          }}
          classes={
            'bg-transparent !text-black !border-[#1164B4] border-[3px] py-[14px] px-[70px] text-[18px] ml-auto shadow-xl'
          }
        >
          Оставьте отзыв
        </Button>
      </div>
      {activeModalReview && (
        <ModalReview
          data={reviewData}
          handleCLickCloseModal={() => {
            setActiveModalReview(false)
          }}
        />
      )}
      {activeModalAllRooms && (
        <ModalAllRooms
          data={data}
          id={hotelId}
          handleCLickCloseModal={() => {
            setActiveModalAllRooms(false)
          }}
        />
      )}
      {activeModalALlImages && (
        <ModalAllPhotos
          data={data}
          id={hotelId}
          handleCLickCloseModal={() => {
            setActiveModalImages(false)
          }}
        />
      )}
      {modalFilteredRoom && (
        <ModalFilteredRooms
          handleCLickCloseModal={() => {
            setModalFilteredRoom(false)
          }}
        />
      )}
      {activeModalServices && (
        <ModalServices
          data={data}
          id={hotelId}
          handleCLickCloseModal={() => {
            setActiveModalServices(false)
          }}
        />
      )}
      <Modal
        open={isModalOpen}
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
            <div className='flex gap-2 mt-3'>
              <img src={geo} alt="geo" />
              <span className='text-[22px] text-[#787878]'>{data?.results?.[hotelId]?.address}</span>
            </div>
          </div>
        </div>
        <div className='mt-[40px]'>
          <div>
            <h3 className='text-[22px]'>Как все прошло?</h3>
            <p className='text-[#1164B4] text-[18px] mb-[12px]'>Замечательно</p>
            <Rate count={10} style={{fontSize: '22px', color: '#1164B4'}} character={({ index }) => customIcons[index + 1]}/>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default HotelPage
