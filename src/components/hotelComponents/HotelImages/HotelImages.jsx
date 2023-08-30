// import { useEffect } from "react";
// import hotelImg from "../../../assets/images/hotel-img.png";
// import hotelImg2 from "../../../assets/images/hotel-img2.png";
// import Button from "../../ui/Button/Button";
import { useSelector } from 'react-redux'
import { Spin } from 'antd'

const HotelImages = ({ handleOpenModalImages }) => {
  const { data, isLoading, isError } = useSelector(state => state.hotel)

  if (isError) {
    return <h1>{isError}</h1>
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full">
        <Spin className="m-auto" size="large" />;
      </div>
    )
  }

  return (
    <div
      className="flex justify-between mt-[20px] cursor-pointer"
      onClick={handleOpenModalImages}
    >
      <div className="flex items-center justify-center w-[490px]">
        {isLoading ? (
          <Spin className="m-auto" size="large" />
        ) : (
          <img
            className="rounded-l-2xl h-[500px] w-[490px]"
            src={data?.housing_images?.[0]?.image}
            alt="hotelImg"
          />
        )}
      </div>
      <div className="">
        <div className="flex justify-between gap-[10px] mb-[10px]">
          <img
            className="w-[365px] h-[245px]"
            src={data?.housing_images?.[1]?.image}
            alt="hotelImg2"
          />
          <img
            className="w-[365px] h-[245px] rounded-tr-2xl "
            src={data?.housing_images?.[2]?.image}
            alt="hotelImg2"
          />
        </div>
        <div className="flex gap-[10px] relative">
          <img
            className="w-[365px] h-[245px] "
            src={data?.housing_images?.[3]?.image}
            alt="hotelImg2"
          />
          <img
            className="w-[365px] h-[245px] rounded-br-2xl "
            src={data?.housing_images?.[4]?.image}
            alt="hotelImg2"
          />
          {/*<Button classes={'font-[600] !bg-[#1164B480] !w-[227px] absolute bottom-[20px] right-[20px]'} text="Показать все фото"/>*/}
        </div>
      </div>
    </div>
  )
}

export default HotelImages
