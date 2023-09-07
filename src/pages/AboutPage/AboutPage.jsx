import ReviewSwiper from "../../components/reviewComponents/ReviewSwiper/ReviewSwiper"
import AddReview from "../../components/reviewComponents/AddReview/AddReview"
import meyman from '../../assets/images/meyman.png'
import finger from '../../assets/images/finger.svg'
import clock from '../../assets/images/clock.svg'
import team from '../../assets/images/team.png'
import like from '../../assets/images/like.svg'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchReviewsData} from "../../store/slice/reviewsSlice";
import SiteReviewSwiper from "../../components/reviewComponents/SiteReviewSwiper/SiteReviewSwiper";


const AboutPage = () => {

    const [modalShow, setModalShow] = useState(false)

    const openModal = () => {
        setModalShow(true)
    }

    return (<>

            {modalShow && <AddReview setModalShow={() => setModalShow(false)} modalShow={modalShow}/>}
            <div
                className="bg-[url('/src/assets/images/mountains.png')] h-[calc(100vh-100px)] bg-cover bg-no-repeat ">

                    <div className="w-[1245px] h-[100%] m-auto flex justify-between items-center">
                        <div className="w-[590px] h-[229px] gap-[20px]">
                            <h2 className="text-white">О компании</h2>
                            <p className="text-sn font-normal text-white pt-[20px]">Мейман - многофункциональная
                                онлайн-платформа для бронирования
                                размещения и транспорта. Мы
                                предлагаем отели и объекты размещения по всем 7 регионам Кыргызстана, чтобы вы могли
                                познакомиться с разнообразием кухни, погрузиться в атмосферу национальной культуры,
                                гостеприимства и природы этой удивительной страны. Путешествуйте с уверенностью, заранее
                                бронируя все, что вам нужно</p>
                        </div>
                        <img className="" src={meyman} alt=""/>
                    </div>

            </div>
            <div className="flex justify-center mt-[80px]">
                <div className="w-[1064px] flex justify-center m-auto flex-col flex-wrap text-center">
                    <h5 className="text-ab text-ot">Наши преимущества</h5>
                    <div className=" flex justify-between pt-[80px]">
                        <div className="w-[310px] flex justify-center flex-wrap flex-col">
                            <img className="mb-[30px]" src={like} alt=""/>
                            <div className="pb-[90px]">
                                <p className="text-sn">Удобство и доступность</p>
                                <p className="text-sx pt-[8px] text-sendCode">Мы предоставляем возможность бронирования
                                    в любое
                                    время</p>
                            </div>
                        </div>
                        <div className="w-[310px] gap-[66px auto] flex justify-center flex-wrap flex-col">
                            <img className="mb-[30px]" src={finger} alt=""/>
                            <div className="pb[30px]">
                                <p className="text-sn">Широкий выбор</p>
                                <p className="text-sx pt-[8px] text-sendCode"> У вас есть возможность выбирать из
                                    большого
                                    количества
                                    вариантов размещения и
                                    автомобилей, что позволяет вам найти оптимальный вариант для своих потребностей и
                                    бюджета</p>
                            </div>
                        </div>
                        <div className="w-[310px] flex justify-center flex-wrap flex-col">
                            <img className="mb-[30px]" src={clock} alt=""/>
                            <div className="pb-[40px]">
                                <p className="text-sn">Быстрый доступ к информации</p>
                                <p className="text-sx pt-[8px] text-sendCode">Вы можете быстро получить всю необходимую
                                    информацию о
                                    размещении, включая фотографии,
                                    описание, удобства и правила</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-[100vw flex justify-center]">
                    <div className="w-[1240px]">
                        <h5 className="text-ot text-center pt-[100px]">Наша команда</h5>
                        <div>
                            <img className="pt-[80px]" src={team} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-[1240px] pt-[100px]">
                    <SiteReviewSwiper
                        openModal={openModal}
                    />

            </div>
            {/*<Footer/>*/}
        </>

    )
}

export default AboutPage