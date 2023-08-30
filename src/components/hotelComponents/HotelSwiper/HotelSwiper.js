import React, { useEffect, useState } from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import left from "../../../assets/images/arrow-left.svg";
import right from "../../../assets/images/arrow-right.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHousingData,
  selectHousingData,
  selectHousingError,
  selectHousingLoadingStatus,
} from "../../../store/slice/housingSlice";
import HotelCard from "../HotelCard/HotelCard";

SwiperCore.use([Navigation]);

const HotelSwiper = ({}) => {
  const dispatch = useDispatch();
  const hotelData = useSelector(selectHousingData);
  const loading = useSelector(selectHousingLoadingStatus);
  const error = useSelector(selectHousingError);

  const [slidesCount, setSlidesCount] = useState(0);

  useEffect(() => {
    try {
      if (hotelData.length > 3) setSlidesCount(3.23);
      else setSlidesCount(hotelData.length);
    } catch (e) {}
  }, [hotelData]);

  useEffect(() => {
    dispatch(fetchHousingData({ limit: 7, offset: 0 }));
  }, [dispatch]);

  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={40}
        slidesPerView={3.23}
        navigation={{
          nextEl: ".swiper-button-next-hotel",
          prevEl: ".swiper-button-prev-hotel",
        }}
      >
        {hotelData &&
          hotelData.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <HotelCard data={value} index={index} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="flex gap-[50px] justify-center pt-[50px]">
        <img
          src={left}
          alt="left"
          className="swiper-button-prev-hotel"
          onClick={goPrev}
        />
        <img
          src={right}
          alt="right"
          className="swiper-button-next-hotel"
          onClick={goNext}
        />
      </div>
    </>
  );
};
export default HotelSwiper;
