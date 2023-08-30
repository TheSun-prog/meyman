import starFillIcon from "../../../assets/images/star-fill.svg";
import starDefaultIcon from "../../../assets/images/star-default.svg";
import placeIcon from "../../../assets/images/place.svg";
import whatsAppIcon from '../../../assets/images/whats-app.svg'
import heartIcon from '../../../assets/images/heart.svg'

const HotelName = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h3 className="font-medium text-[32px]">Novotel</h3>
        <div className="flex">
          <div className="flex gap-[5px]">
            <img src={starFillIcon} alt="starFillIcon" />
            <img src={starFillIcon} alt="starFillIcon" />
            <img src={starFillIcon} alt="starFillIcon" />
            <img src={starFillIcon} alt="starFillIcon" />
            <img src={starDefaultIcon} alt="starFillIcon" />
          </div>
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
