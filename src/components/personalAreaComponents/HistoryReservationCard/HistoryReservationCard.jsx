import { Rating } from "@mui/material"
import placeIcon from '../../../assets/images/place.svg'
import calendar from '../../../assets/images/calendar.svg'
import DateFormatter from "../DateFormatter/DateFormatter"

const HistoryReservationCard = ({img, stars, name, rate, address, arrival_start, arrival_end, roomName}) => {

  return (
    <div className="rounded-[30px] border shadow-lg p-[40px]">
      <div className="flex gap-[13px] h-[149px]">
        <img
          className="rounded-xl object-cover w-[213px] h-[149px]"
          src={img}
          alt="hotelImg"
        />
        <div className="flex flex-1 flex-col justify-between">
          <h3 className="text-[28px]">{name}</h3>
          <Rating size="small" value={stars} readOnly />
          <div className="flex items-center">
            <div className="bg-[#FFC506] rounded-full mr-[5px] w-[30px] h-[28px] text-center">
              <span className="text-white text-[16px]">{rate}</span>
            </div>
            <span className="text-[16px]">
              {rate > 7
                ? 'Замечательно'
                : rate > 5
                ? 'Нормально'
                : 'Плохо'}
            </span>
          </div>
          <div className="flex w-full">
            <img src={placeIcon} alt="placeIcon" />
            <span className="text-[16px] text-grey">{address}</span>
          </div>
        </div>
      </div>
      <div className="flex mt-[20px]">
        <img className="mr-2 mb-4 h-[18px] w-[18px]" src={calendar} alt="calendar" />
        <div className="flex">
          <div className="mr-[20px]">
            <div className="text-[16px]">
              <DateFormatter checkInDate={arrival_start} checkOutDate={arrival_end} />
            </div>
          </div>
        </div>
      </div>
        <h1 className="text-[20px] mt-5 font-[500] pb-[20px] border-b border-[#A1A1A1]">{roomName}</h1>
    </div>
  )
}

export default HistoryReservationCard
