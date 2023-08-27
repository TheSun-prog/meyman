import placeIcon from '../../../assets/images/place.svg'
import whatsAppIcon from '../../../assets/images/whats-app.svg'
import heartIcon from '../../../assets/images/heart.svg'
import { useSelector } from 'react-redux'
import Rating from '@mui/material/Rating'

import { Rate } from 'antd'

const HotelName = () => {
  const { data, isLoading, isError } = useSelector(state => state.hotel)

  const stars = data.stars ? data.stars : null

  return (
    <div className="flex justify-between">
      <div>
        <h3 className="font-medium text-[32px]">{data?.housing_name}</h3>
        <div className="flex">
          <Rating value={stars} readOnly  />
          <div className="ml-[10px] flex items-center">
            <div className="bg-[#FFC506] pr-[2px] rounded-full mr-[5px] w-[30px] h-[28px] flex justify-center items-center text-center">
              <span className="text-white">{data.average_rating}</span>
            </div>
            <span>
              {data.average_rating > 8
                ? 'Замечательно'
                : data.average_rating > 6
                ? 'Нормально'
                : 'Ниже среднего'}
            </span>
          </div>
        </div>
        <div className="flex">
          <img src={placeIcon} alt="placeIcon" />
          <span className="text-2xl text-grey">{data.address}</span>
        </div>
      </div>
      <div className="flex">
        <img className="mr-[20px]" src={whatsAppIcon} alt="whatsAppIcon" />
        <img src={heartIcon} alt="heartIcon" />
      </div>
    </div>
  )
}

export default HotelName
