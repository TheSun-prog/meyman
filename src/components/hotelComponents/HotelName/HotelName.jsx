import placeIcon from "../../../assets/images/place.svg";
import whatsAppIcon from "../../../assets/images/whats-app.svg";
import heartIcon from "../../../assets/images/heart.svg";
import Rating from "@mui/material/Rating";
import { Skeleton } from "antd";
import { useSelector } from "react-redux";

const HotelName = ({ data }) => {
  const stars = data?.stars ? data?.stars : null;
  const {isLoading} = useSelector(state => state.hotel)
  
  return (
    <div className="flex justify-between">
      {!isLoading ? <div>
        <h3 className="font-medium text-[32px]">{data?.housing_name}</h3>
        <div className="flex">
          <Rating value={stars} readOnly />
          <div className="ml-[10px] flex items-center">
            <div className="bg-[#FFC506] rounded-full mr-[5px] w-[30px] h-[28px] flex justify-center items-center text-center">
              <span className="text-white">{data?.average_rating}</span>
            </div>
            <span>
              {data?.average_rating > 7
                ? "Замечательно"
                : data?.average_rating > 5
                ? "Хорошо"
                : "Нормально"}
            </span>
          </div>
        </div>
        <div className="flex">
          <img src={placeIcon} alt="placeIcon" />
          <span className="text-2xl text-grey">{data?.address}</span>
        </div>
      </div> : <Skeleton />}
    </div>
  );
};

export default HotelName;
