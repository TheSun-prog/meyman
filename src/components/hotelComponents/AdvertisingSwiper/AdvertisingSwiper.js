import React, {useEffect, useState} from "react";
import SwiperCore from "swiper";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import left from "../../../assets/images/arrow-left.svg";
import right from "../../../assets/images/arrow-right.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchAdvertisingData, selectAdvertisingData, selectAdvertisingError, selectAdvertisingLoadingStatus,
} from "../../../store/slice/advertisingSlice";
import HotelCard from "../HotelCard/HotelCard";
import {NavLink, useParams} from "react-router-dom";

SwiperCore.use([Navigation]);

const HotelSwiper = ({}) => {
    const dispatch = useDispatch();
    const advertisingData = useSelector(selectAdvertisingData);
    const loading = useSelector(selectAdvertisingLoadingStatus);
    const error = useSelector(selectAdvertisingError);

    const currency = useSelector(state => state.currency)

    const [slidesCount, setSlidesCount] = useState(0);

    const {advertisingId} = useParams()

    useEffect(() => {
        try {
            if (advertisingData.length > 3) setSlidesCount(3.23); else setSlidesCount(advertisingData.length);
        } catch (e) {
        }
    }, [advertisingData]);

    useEffect(() => {
        dispatch(fetchAdvertisingData());
    }, [dispatch, currency]);

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

    console.log()

    if (!error) return (<>
            <div className="flex flex-col gap-[40px] items-center">
                <p className="text-[28px] pb-[40px]">Рекомендации</p>
            </div>
            <Swiper
                spaceBetween={40}
                slidesPerView={slidesCount}
                navigation={{
                    nextEl: ".swiper-button-next-advertising", prevEl: ".swiper-button-prev-advertising",
                }}
            >
                {advertisingData && advertisingData.map((value, index) => {

                    const imageUrl = `${process.env.REACT_APP_API_URL}${value.housing_image[0]}`

                    return (<SwiperSlide key={index}>
                            <NavLink to={`/hotelcatalog/${value?.id}`}>
                                <HotelCard data={value} index={index} imageUrl={imageUrl}/>
                            </NavLink>
                        </SwiperSlide>);
                })}
            </Swiper>
            <div className="flex gap-[50px] justify-center pt-[50px]">
                <img
                    src={left}
                    alt="left"
                    className="swiper-button-prev-advertising"
                    onClick={goPrev}
                />
                <img
                    src={right}
                    alt="right"
                    className="swiper-button-next-advertising"
                    onClick={goNext}
                />
            </div>
        </>);
};
export default HotelSwiper;
