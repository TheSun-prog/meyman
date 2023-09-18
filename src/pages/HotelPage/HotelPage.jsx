// icons
import arrow from '../../assets/images/arrow2.svg'
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
import Button from '../../components/ui/Button/Button'
import ModalSendReview from '../../components/hotelComponents/modals/ModalSendReview'
// modules
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchHotelData } from '../../store/slice/hotelSlice'

const HotelPage = () => {
  const [activeModalReview, setActiveModalReview] = useState(false)
  const [activeModalAllRooms, setActiveModalAllRooms] = useState(false)
  const [activeModalALlImages, setActiveModalImages] = useState(false)
  const [activeModalFilteredRoom, setActiveModalFilteredRoom] = useState(false)
  const [activeModalServices, setActiveModalServices] = useState(false)
  const [activeModalSendReview, setModalSendReview] = useState(false)
  const [reviewData, setReviewData] = useState()

  const dispatch = useDispatch()
  const { data, isError } = useSelector(state => state.hotel)
  const currency = useSelector(state => state.currency)
  const { hotelId } = useParams()

  const handleCancelSendReview = () => {
    setModalSendReview(false)
  }

  const handleCancelImages = () => {
    setActiveModalImages(false)
  }

  const handleCancelServices = () => {
    setActiveModalServices(false)
  }

  const handleCancelAllRooms = () => {
    setActiveModalAllRooms(false)
  }

  const handleCancelReview = () => {
    setActiveModalReview(false)
  }

  const handleCancelFilteredRoom = () => {
    setActiveModalFilteredRoom(false)
  }

  useEffect(() => {
    dispatch(fetchHotelData({
      hotelId: hotelId,
      currency:currency
    }))
  }, [currency])

  return (
    <div
      className="mx-auto w-[1240px]"
      style={{ fontFamily: 'Quicksand, sans-serif' }}
    >
      <div className="flex text-[16px] items-center mb-[50px] mt-[45px]">
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
            openModalFilteredRoom={() => {
              setActiveModalFilteredRoom(true)
            }}
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
          handleClick={value => {
            setReviewData(value)
            setActiveModalReview(true)
          }}
        />
        <Button
          clickFunc={() => {
            setModalSendReview(true)
          }}
          classes={
            'bg-transparent !text-black !border-[#1164B4] border-[3px] py-[14px] px-[70px] text-[18px] ml-auto shadow-xl'
          }
        >
          Оставьте отзыв
        </Button>
      </div>
      <ModalReview
        isOpen={activeModalReview}
        handleOk={handleCancelReview}
        handleCancel={handleCancelReview}
        data={reviewData}
      />
      <ModalAllRooms
        isOpen={activeModalAllRooms}
        handleOk={handleCancelAllRooms}
        handleCancel={handleCancelAllRooms}
        data={data}
        id={hotelId}
      />
      <ModalAllPhotos
        isOpen={activeModalALlImages}
        handleOk={handleCancelImages}
        handleCancel={handleCancelImages}
        data={ data?.housing_images}
        id={hotelId}
      />
      <ModalFilteredRooms
        isOpen={activeModalFilteredRoom}
        handleOk={handleCancelFilteredRoom}
        handleCancel={handleCancelFilteredRoom}
      />
      <ModalServices
        isOpen={activeModalServices}
        handleOk={handleCancelServices}
        handleCancel={handleCancelServices}
        data={data}
        id={hotelId}
      />
      <ModalSendReview
        isOpen={activeModalSendReview}
        handleOk={handleCancelSendReview}
        handleCancel={handleCancelSendReview}
        data={data}
        hotelId={hotelId}
      />
    </div>
  )
}

export default HotelPage
