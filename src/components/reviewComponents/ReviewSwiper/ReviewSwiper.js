import React, { useEffect, useState } from 'react'
import SwiperCore from 'swiper'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import left from '../../../assets/images/arrow-left.svg'
import right from '../../../assets/images/arrow-right.svg'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import ReviewCard from './ReviewCard'
import { useSelector } from 'react-redux'

SwiperCore.use([Navigation])

const ReviewSwiper = ({ handleClick = () => {}, openModal, data }) => {
  const { isError } = useSelector(state => state.hotel)

  const swiperRef = React.useRef(null)

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  if (!isError)
    return (
      <>
        <Swiper
          className="pt-[40px] h-[330px]"
          spaceBetween={40}
          slidesPerView={2.5}
          onInit={swiper => {
            swiperRef.current = swiper
          }}
          navigation={{
            nextEl: '.swiper-button-next-review',
            prevEl: '.swiper-button-prev-review'
          }}
        >
          {data?.reviews?.map((value, index, array) => {
            return (
              <SwiperSlide
                onClick={() => {
                  handleClick(value)
                }}
                key={index}
              >
                <ReviewCard data={value} />
              </SwiperSlide>
            )
          })}
        </Swiper>
        {data?.reviews?.length ? (
          <div className="flex justify-between pt-[50px] mb-[20px]">
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
          </div>
        ) : (
          ''
        )}
        {openModal && (
          <div className="flex justify-end">
            <button
              className="rounded-[31px] border-blue border-[3px] flex px-[70px] py-[14px]"
              onClick={openModal}
            >
              Оставьте отзыв
            </button>
          </div>
        )}
      </>
    )
}
export default ReviewSwiper
