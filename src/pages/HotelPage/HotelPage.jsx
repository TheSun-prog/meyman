import HotelName from '../../components/hotelComponents/HotelName/HotelName'
import HotelImages from '../../components/hotelComponents/HotelImages/HotelImages'
import HotelRules from '../../components/hotelComponents/HotelRules/HotelRules'
import HotelRooms from '../../components/hotelComponents/HotelRooms/HotelRooms'
import HotelGrade from '../../components/hotelComponents/HotelGrade/HotelGrade'
import { Link } from 'react-router-dom'
import arrow from '../../assets/images/arrow2.svg'
import ReviewSwiper from '../../components/reviewComponents/ReviewSwiper/ReviewSwiper'
import { useState, useEffect } from 'react'
import ModalReview from '../../components/hotelComponents/modals/ModalReview'
import ModalAllRooms from '../../components/hotelComponents/modals/ModalAllRooms'
import ModalAllPhotos from '../../components/hotelComponents/modals/ModalAllPhotos'

import { useSelector, useDispatch } from 'react-redux'
import { fetchHotelData } from '../../store/hotelSlice'
import HotelDate from '../../components/hotelComponents/HotelDate/HotelDate'

const HotelPage = ({ activeModalServices }) => {
  const [activeModalReview, setActiveModalReview] = useState(false)
  const [activeModalAllRooms, setActiveModalAllRooms] = useState(false)
  const [activeModalALlImages, setActiveModalImages] = useState(false)

  const dispatch = useDispatch()
  const state = useSelector(state => state.hotel)

  useEffect(() => {
    dispatch(fetchHotelData())
  }, [])

  return (
    <div className="mx-auto w-[1240px]">
      <div className="flex items-center mb-[50px]">
        <Link>Главная</Link>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <Link>Отель</Link>
      </div>
      <div>
        <HotelName />
        <HotelImages handleOpenModalImages={setActiveModalImages} />
        <div className="flex justify-between mt-[50px]">
          <HotelRules
            handleClickModal={() => {
              activeModalServices(true)
            }}
          />
          <HotelDate />
        </div>
        <HotelRooms
          handleActiveModal={() => {
            setActiveModalAllRooms(true)
          }}
        />
        <HotelGrade />
        <ReviewSwiper
          handleClick={() => {
            setActiveModalReview(true)
          }}
        />
      </div>
      {activeModalReview && (
        <ModalReview
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
      {activeModalALlImages && <ModalAllPhotos handleCLickCloseModal={() => {setActiveModalImages(false)}}/>}
    </div>
  )
}

export default HotelPage
