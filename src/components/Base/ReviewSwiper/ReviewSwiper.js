import React from 'react';
import SwiperCore from 'swiper';
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from 'swiper/react';
import HotelCard from "../HotelCard/HotelCard";
import left from '../../../assets/images/arrow-left.svg'
import right from '../../../assets/images/arrow-right.svg'

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReviewCard from "../ReviewCard/ReviewCard";

SwiperCore.use([Navigation]);

const SwiperHotels = ({}) => {

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

    let data = []

    for (let i = 0; i < 7; i++) {
        data.push([])
    }

    return (<>
            <Swiper
                spaceBetween={40}
                slidesPerView={2.5}
                onInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                navigation={{
                    nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',
                }}
            >
                {data.map((value, index, array) => {
                    return (
                        <SwiperSlide key={index}>
                            <ReviewCard/>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
            <div className="flex gap-[50px] justify-center pt-[50px]">
                <img
                    src={left} alt="left"
                    className="swiper-button-prev"
                    onClick={goPrev}
                />
                <img
                    src={right} alt="right"
                    className="swiper-button-next"
                    onClick={goNext}
                />
            </div>
        </>)


}
export default SwiperHotels
