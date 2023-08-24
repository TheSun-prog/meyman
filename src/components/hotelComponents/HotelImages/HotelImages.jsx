import hotelImg from "../../../assets/images/hotel-img.png";
import hotelImg2 from "../../../assets/images/hotel-img2.png";
import Button from "../../ui/Button/Button";

const HotelImages = ({handleOpenModalImages}) => {
  return (
    <div className="flex justify-between mt-[20px] cursor-pointer" onClick={handleOpenModalImages}>
      <div>
        <img
          className="rounded-l-2xl h-[500px] w-[490px]"
          src={hotelImg}
          alt="hotelImg"
        />
      </div>
      <div className="">
        <div className="flex justify-between gap-[10px] mb-[10px]">
          <img
            className="w-[365px] h-[245px]"
            src={hotelImg2}
            alt="hotelImg2"
          />
          <img
            className="w-[365px] h-[245px] rounded-tr-2xl"
            src={hotelImg2}
            alt="hotelImg2"
          />
        </div>
        <div className="flex gap-[10px] relative">
          <img
            className="w-[365px] h-[245px]"
            src={hotelImg2}
            alt="hotelImg2"
          />
          <img
            className="w-[365px] h-[245px] rounded-br-2xl"
            src={hotelImg2}
            alt="hotelImg2"
          />
          {/*<Button classes={'font-[600] !bg-[#1164B480] !w-[227px] absolute bottom-[20px] right-[20px]'} text="Показать все фото"/>*/}
        </div>
      </div>
    </div>
  );
};

export default HotelImages;
