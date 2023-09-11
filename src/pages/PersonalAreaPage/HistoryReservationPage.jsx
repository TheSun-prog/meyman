// icons
import arrow from '../../assets/images/arrow2.svg'
// modules
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
// components
import HistoryReservationCard from '../../components/personalAreaComponents/HistoryReservationCard/HistoryReservationCard'
import { fetchHistoryReservationData } from '../../store/slice/historyReservationSlice'
import { fetchHousingData } from '../../store/slice/housingSlice'

const HistoryReservationPage = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useSelector(
    state => state.historyReservation
  )

  const hotelData = useSelector(state => state?.housing?.data?.results)

  useEffect(() => {
    dispatch(fetchHistoryReservationData())
  }, [])

  useEffect(() => {
    dispatch(fetchHousingData(20, 0))
  }, [])

  return (
    <div className="mx-auto w-[1240px]">
      <div className="flex items-center mb-[50px] mt-[43px] text-[16px]">
        <NavLink to={'/'}>Главная</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={`/personal-area`}>Личный кабинет</NavLink>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <NavLink to={`/personal-area/history-reservation`}>Бронирования</NavLink>
      </div>
      <h1 className="text-[28px] mb-[20px]">Бронирования</h1>
      <p className="text-[#787878] text-[18px]">
        Сейчас у вас: {data?.length}
        {data?.length === 1
          ? ' бронирование'
          : data?.length > 1 && data?.length < 5
          ? ' бронирования'
          : data?.length > 4
          ? ' бронирований'
          : ' бронирований'}
      </p>
      <div className="grid grid-cols-2 gap-4 mt-[40px]">
        {data?.map(reservation => {
          const correspondingHotel = hotelData?.find(hotel => hotel?.id === reservation?.housing)
          // Проверьте, есть ли соответствующий объект размещения
          if (correspondingHotel) {
            const housingImages = correspondingHotel.housing_images // Получите массив изображений размещения
            // Выберите первое изображение из массива, если оно существует
            const housingImage = housingImages.length > 0 ? housingImages[0].image : null
            // Получите name, rate и stars из объекта размещения
            const {
              address: addressHotel,
              housing_name: name,
              average_rating: rate,
              stars
            } = correspondingHotel

            return (
              <HistoryReservationCard
                key={reservation?.id}
                arrival_end={reservation?.check_in_date}
                arrival_start={reservation?.check_out_date}
                roomName={reservation?.room_name}
                address={addressHotel}
                img={housingImage}
                name={name}
                rate={rate}
                stars={stars}
              />
            )
          }
          return null // Если нет соответствующего объекта размещения
        })}
      </div>
    </div>
  )
}

export default HistoryReservationPage
