import placeIcon from "../../../assets/images/place.svg";
import whatsAppIcon from '../../../assets/images/whats-app.svg'
import heartIcon from '../../../assets/images/heart.svg'
import { useSelector } from "react-redux";

import { Rate } from 'antd';
import { useEffect } from "react";

const HotelName = () => {
  const {data, isLoading, isError} = useSelector(state => state.hotel)

  return (
    <div className="flex justify-between">
      <div>
        <h3 className="font-medium text-[32px]">{data?.results?.[0]?.housing_name}</h3> 
        <div className="flex">
          <Rate defaultValue={data?.results?.[0]?.stars} disabled/> 
          <div className="ml-[10px] flex items-center">
            <div className="bg-[#FFC506] pr-[2px] rounded-full mr-[5px] w-[30px] h-[28px] text-center">
              <span className="text-white">10</span>
            </div>
            <span>Замечательно</span>
          </div>
        </div>
        <div className="flex">
          <img src={placeIcon} alt="placeIcon" />
          <span className="text-2xl text-grey">
            16 проспект Манаса, Бишкек 2,1 км от центра
          </span>
        </div>
      </div>
      <div className="flex">
        <img className="mr-[20px]" src={whatsAppIcon} alt="whatsAppIcon" />
        <img src={heartIcon} alt="heartIcon" />
      </div>
    </div>
  );
};

export default HotelName;
