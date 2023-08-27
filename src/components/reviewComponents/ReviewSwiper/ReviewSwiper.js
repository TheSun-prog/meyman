import React from 'react';
import SwiperCore from 'swiper';
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from 'swiper/react';
import left from '../../../assets/images/arrow-left.svg'
import right from '../../../assets/images/arrow-right.svg'

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReviewCard from "../ReviewCard/ReviewCard";

SwiperCore.use([Navigation]);

const ReviewSwiper = ({handleClick, data}) => {

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

    // for (let i = 0; i < 7; i++) {
    //     data.push([])
    // }

    return (<>
            <Swiper
                spaceBetween={40}
                slidesPerView={2.5}
                onInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                navigation={{
                    nextEl: '.swiper-button-next-review', prevEl: '.swiper-button-prev-review',
                }}
            >
                {data?.map((value, index) => {
                    return (
                        <SwiperSlide key={index} onClick={() => {handleClick(value)}} >
                            <ReviewCard date={value.date_added} text={value.comment}/>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
            <div className="flex gap-[50px] justify-center pt-[50px]">
                <img
                    src={left} alt="left"
                    className="swiper-button-prev-review"
                    onClick={goPrev}
                />
                <img
                    src={right} alt="right"
                    className="swiper-button-next-review"
                    onClick={goNext}
                />
            </div>
        </>)


}
export default ReviewSwiper
