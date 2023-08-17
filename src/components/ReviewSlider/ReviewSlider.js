import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import avatar from '../../assets/images/review-avatar.png'
import SwiperCore from 'swiper';
import {Navigation} from 'swiper/modules';
import {getReviews} from "../../axios/fetchReview";

SwiperCore.use([Navigation]);

const ReviewSlider = () => {


    return (
        <>
            <Swiper
                spaceBetween={40}
                slidesPerView={2.6}
                navigation={true}
            >
                <SwiperSlide>
                    <div
                        className="w-[441px] h-[271px] px-[40px] py-[25px] rounded-[35px] bg-blue relative flex flex-col gap-[24px] text-white">
                        <div className="flex gap-[139px] items-center">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-full"
                                    src={avatar} alt="avatar"/>
                                <p className="text-[18px]">William</p>
                            </div>
                            <p className="text-[16px]">24.07.2023</p>
                        </div>
                        <p className="text-[16px]">Одна из самых незабываемых поездок моей <br/>жизни! Сервис "Meyman"
                            оправдал все <br/>ожидания: удобство бронирования жилья и <br/>транспорта, дружелюбная
                            поддержка <br/>клиентов и прекрасные впечатления от <br/>путешествия. Я вернусь снова!</p>
                        <span className="text-[12px] absolute right-[40px] bottom-[25px]">Еще....</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-[441px] h-[271px] px-[40px] py-[25px] rounded-[35px] bg-blue relative flex flex-col gap-[24px] text-white">
                        <div className="flex gap-[139px] items-center">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-full"
                                    src={avatar} alt="avatar"/>
                                <p className="text-[18px]">William</p>
                            </div>
                            <p className="text-[16px]">24.07.2023</p>
                        </div>
                        <p className="text-[16px]">Одна из самых незабываемых поездок моей <br/>жизни! Сервис "Meyman"
                            оправдал все <br/>ожидания: удобство бронирования жилья и <br/>транспорта, дружелюбная
                            поддержка <br/>клиентов и прекрасные впечатления от <br/>путешествия. Я вернусь снова!</p>
                        <span className="text-[12px] absolute right-[40px] bottom-[25px]">Еще....</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-[441px] h-[271px] px-[40px] py-[25px] rounded-[35px] bg-blue relative flex flex-col gap-[24px] text-white">
                        <div className="flex gap-[139px] items-center">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-full"
                                    src={avatar} alt="avatar"/>
                                <p className="text-[18px]">William</p>
                            </div>
                            <p className="text-[16px]">24.07.2023</p>
                        </div>
                        <p className="text-[16px]">Одна из самых незабываемых поездок моей <br/>жизни! Сервис "Meyman"
                            оправдал все <br/>ожидания: удобство бронирования жилья и <br/>транспорта, дружелюбная
                            поддержка <br/>клиентов и прекрасные впечатления от <br/>путешествия. Я вернусь снова!</p>
                        <span className="text-[12px] absolute right-[40px] bottom-[25px]">Еще....</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-[441px] h-[271px] px-[40px] py-[25px] rounded-[35px] bg-blue relative flex flex-col gap-[24px] text-white">
                        <div className="flex gap-[139px] items-center">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-full"
                                    src={avatar} alt="avatar"/>
                                <p className="text-[18px]">William</p>
                            </div>
                            <p className="text-[16px]">24.07.2023</p>
                        </div>
                        <p className="text-[16px]">Одна из самых незабываемых поездок моей <br/>жизни! Сервис "Meyman"
                            оправдал все <br/>ожидания: удобство бронирования жилья и <br/>транспорта, дружелюбная
                            поддержка <br/>клиентов и прекрасные впечатления от <br/>путешествия. Я вернусь снова!</p>
                        <span className="text-[12px] absolute right-[40px] bottom-[25px]">Еще....</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-[441px] h-[271px] px-[40px] py-[25px] rounded-[35px] bg-blue relative flex flex-col gap-[24px] text-white">
                        <div className="flex gap-[139px] items-center">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-full"
                                    src={avatar} alt="avatar"/>
                                <p className="text-[18px]">William</p>
                            </div>
                            <p className="text-[16px]">24.07.2023</p>
                        </div>
                        <p className="text-[16px]">Одна из самых незабываемых поездок моей <br/>жизни! Сервис "Meyman"
                            оправдал все <br/>ожидания: удобство бронирования жилья и <br/>транспорта, дружелюбная
                            поддержка <br/>клиентов и прекрасные впечатления от <br/>путешествия. Я вернусь снова!</p>
                        <span className="text-[12px] absolute right-[40px] bottom-[25px]">Еще....</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-[441px] h-[271px] px-[40px] py-[25px] rounded-[35px] bg-blue relative flex flex-col gap-[24px] text-white">
                        <div className="flex gap-[139px] items-center">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-full"
                                    src={avatar} alt="avatar"/>
                                <p className="text-[18px]">William</p>
                            </div>
                            <p className="text-[16px]">24.07.2023</p>
                        </div>
                        <p className="text-[16px]">Одна из самых незабываемых поездок моей <br/>жизни! Сервис "Meyman"
                            оправдал все <br/>ожидания: удобство бронирования жилья и <br/>транспорта, дружелюбная
                            поддержка <br/>клиентов и прекрасные впечатления от <br/>путешествия. Я вернусь снова!</p>
                        <span className="text-[12px] absolute right-[40px] bottom-[25px]">Еще....</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-[441px] h-[271px] px-[40px] py-[25px] rounded-[35px] bg-blue relative flex flex-col gap-[24px] text-white">
                        <div className="flex gap-[139px] items-center">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-full"
                                    src={avatar} alt="avatar"/>
                                <p className="text-[18px]">William</p>
                            </div>
                            <p className="text-[16px]">24.07.2023</p>
                        </div>
                        <p className="text-[16px]">Одна из самых незабываемых поездок моей <br/>жизни! Сервис "Meyman"
                            оправдал все <br/>ожидания: удобство бронирования жилья и <br/>транспорта, дружелюбная
                            поддержка <br/>клиентов и прекрасные впечатления от <br/>путешествия. Я вернусь снова!</p>
                        <span className="text-[12px] absolute right-[40px] bottom-[25px]">Еще....</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-[441px] h-[271px] px-[40px] py-[25px] rounded-[35px] bg-blue relative flex flex-col gap-[24px] text-white">
                        <div className="flex gap-[139px] items-center">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-full"
                                    src={avatar} alt="avatar"/>
                                <p className="text-[18px]">William</p>
                            </div>
                            <p className="text-[16px]">24.07.2023</p>
                        </div>
                        <p className="text-[16px]">Одна из самых незабываемых поездок моей <br/>жизни! Сервис "Meyman"
                            оправдал все <br/>ожидания: удобство бронирования жилья и <br/>транспорта, дружелюбная
                            поддержка <br/>клиентов и прекрасные впечатления от <br/>путешествия. Я вернусь снова!</p>
                        <span className="text-[12px] absolute right-[40px] bottom-[25px]">Еще....</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-[441px] h-[271px] px-[40px] py-[25px] rounded-[35px] bg-blue relative flex flex-col gap-[24px] text-white">
                        <div className="flex gap-[139px] items-center">
                            <div className="flex gap-[20px] items-center">
                                <img
                                    className="w-[50px] h-[50px] rounded-full"
                                    src={avatar} alt="avatar"/>
                                <p className="text-[18px]">William</p>
                            </div>
                            <p className="text-[16px]">24.07.2023</p>
                        </div>
                        <p className="text-[16px]">Одна из самых незабываемых поездок моей <br/>жизни! Сервис "Meyman"
                            оправдал все <br/>ожидания: удобство бронирования жилья и <br/>транспорта, дружелюбная
                            поддержка <br/>клиентов и прекрасные впечатления от <br/>путешествия. Я вернусь снова!</p>
                        <span className="text-[12px] absolute right-[40px] bottom-[25px]">Еще....</span>
                    </div>
                </SwiperSlide>

            </Swiper>

        </>
    )
};

export default ReviewSlider;
