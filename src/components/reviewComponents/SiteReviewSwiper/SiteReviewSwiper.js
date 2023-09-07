import React, {useEffect, useState} from "react";
import SwiperCore from "swiper";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import left from "../../../assets/images/arrow-left.svg";
import right from "../../../assets/images/arrow-right.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReviewCard from "../ReviewCard/ReviewCard";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchReviewData,
    selectReviewData,
    selectReviewError,
    selectReviewLoadingStatus
} from "../../../store/slice/reviewSlice";


SwiperCore.use([Navigation]);

const ReviewSwiper = ({id = 0, handleClick=()=>{}, openModal}) => {

    const dispatch = useDispatch();
    const reviewData = useSelector(selectReviewData);
    const loading = useSelector(selectReviewLoadingStatus);
    const error = useSelector(selectReviewError);

    const [slidesCount, setSlidesCount] = useState(0);

    useEffect(() => {
    try {
      if (reviewData.length > 2) setSlidesCount(2.5);
      else setSlidesCount(reviewData.length);
    } catch (e) { }
  }, [reviewData]);

    useEffect(() => {
    dispatch(fetchReviewData({ limit: 7, offset: 0 }));
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

    if (!error) return (<>
        <h5 className="text-center text-ot">Отзыв о сайте</h5>
        <Swiper
            className="pt-[40px]"
            spaceBetween={40}
            slidesPerView={slidesCount}
            onInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            navigation={{
                nextEl: ".swiper-button-next-review", prevEl: ".swiper-button-prev-review",
            }}
        >
            {reviewData?.map((value, index, array) => {
                return (<SwiperSlide onClick={() => {
                    handleClick(value)
                }} key={index}>
                    <ReviewCard reviewData={value}/>
                </SwiperSlide>);
            })}
        </Swiper>
        {reviewData?.length ? <div className="flex gap-[50px] justify-center pt-[50px]">
            <img
                src={left}
                alt="left"
                className="swiper-button-prev-review"
                onClick={goPrev}
            />
            <img
                src={right}
                alt="right"
                className="swiper-button-next-review"
                onClick={goNext}
            />
        </div> : ''}
        {openModal && <div className="flex justify-end">
            <button
                className="rounded-[31px] border-blue border-[3px] flex px-[70px] py-[14px]"
                onClick={openModal}
            >
                Оставьте отзыв
            </button>
        </div>}
    </>);
};
export default ReviewSwiper;
