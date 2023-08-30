import HotelName from '../../components/hotelComponents/HotelName/HotelName'
import HotelImages from '../../components/hotelComponents/HotelImages/HotelImages'
import HotelRules from '../../components/hotelComponents/HotelRules/HotelRules'
import HotelRooms from '../../components/hotelComponents/HotelRooms/HotelRooms'
import HotelGrade from '../../components/hotelComponents/HotelGrade/HotelGrade'
import arrow from '../../assets/images/arrow2.svg'
import ReviewSwiper from '../../components/reviewComponents/ReviewSwiper/ReviewSwiper'
import ModalReview from '../../components/hotelComponents/modals/ModalReview'
import ModalAllRooms from '../../components/hotelComponents/modals/ModalAllRooms'
import ModalAllPhotos from '../../components/hotelComponents/modals/ModalAllPhotos'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useParams} from "react-router-dom";
import HotelDate from '../../components/hotelComponents/HotelDate/HotelDate'
import ModalFilteredRooms from '../../components/hotelComponents/modals/ModalFilteredRooms'

const HotelPage = ({ activeModalServices }) => {
  const [activeModalReview, setActiveModalReview] = useState(false)
  const [activeModalAllRooms, setActiveModalAllRooms] = useState(false)
  const [activeModalALlImages, setActiveModalImages] = useState(false)
  const [modalFilteredRoom, setModalFilteredRoom] = useState(false)
  const [reviewData, setReviewData] = useState()

  const dispatch = useDispatch()
  const {data, isError, isLoading} = useSelector(state => state.hotel)
  const {hotelId} = useParams()

  const openModalFilteredRoom = () => {
    setModalFilteredRoom(true)
  }



  return (
    <div className="mx-auto w-[1240px]">
      <div className="flex items-center mb-[50px]">
        <Link to={'/'}>Главная</Link>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <Link to={'/hotelcatalog/hotel'}>Отель</Link>
      </div>
      <div>
        <HotelName />
        {isError ? <h1 className='text-center text-[40px] text-red-700 mt-2'>Нет такого отеля!</h1> : <HotelImages handleOpenModalImages={setActiveModalImages} />}
        <div className="flex justify-between mt-[50px]">
          <HotelRules
            handleClickModal={() => {
              activeModalServices(true)
            }}
          />
          <HotelDate openModalFilteredRoom={openModalFilteredRoom} />
        </div>
        <HotelRooms
          hotelId={hotelId}
          handleActiveModal={() => {
            setActiveModalAllRooms(true)
          }}
        />
        <HotelGrade />
        <ReviewSwiper
          data={data?.reviews}
          handleClick={(value) => {
            setReviewData(value)
            setActiveModalReview(true)
          }}
        />
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
          handleCLickCloseModal={() => {
            setActiveModalAllRooms(false)
          }}
        />
      )}
      {activeModalALlImages && (
        <ModalAllPhotos
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
    </div>
  )
}

export default HotelPage
