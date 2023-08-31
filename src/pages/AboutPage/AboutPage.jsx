import ReviewSwiper from "../../components/reviewComponents/ReviewSwiper/ReviewSwiper"
import AddReview from "../../components/reviewComponents/AddReview/AddReview"
import {setModalReview} from "../../store/slice/reviewSlice"
import Header from "../../components/Base/Header/Header"
import Footer from "../../components/Base/Footer/Footer"
import {useDispatch, useSelector} from "react-redux"
import meyman from '../../assets/images/meyman.png'
import finger from '../../assets/images/finger.svg'
import clock from '../../assets/images/clock.svg'
import team from '../../assets/images/team.png'
import like from '../../assets/images/like.svg'
import {useNavigate} from "react-router-dom"
import React from 'react'


const AboutPage = () => {
    const { reviewModal } = useSelector(state => state.reviewSlice)
    const dispatch = useDispatch(), navigate = useNavigate()

    console.log(reviewModal)

    return (
        <>
            {reviewModal && <AddReview/>}
            <Header/>
            <div className="bg-[url('/src/assets/images/mountains.png')] h-[690px] bg-cover bg-no-repeat ">
                <div>
                    <div className="w-[1245px] m-auto flex justify-between ">
                        <div className="w-[590px] h-[229px] gap-[20px]">
                            <h2 className="pt-[107px] text-white">О компании</h2>
                            <p className=" pt-[20px] text-sn font-normal text-white">Мейман - многофункциональная
                                онлайн-платформа для бронирования
                                размещения и транспорта. Мы
                                предлагаем отели и объекты размещения по всем 7 регионам Кыргызстана, чтобы вы могли
                                познакомиться с разнообразием кухни, погрузиться в атмосферу национальной культуры,
                                гостеприимства и природы этой удивительной страны. Путешествуйте с уверенностью, заранее
                                бронируя все, что вам нужно</p>
                        </div>
                        <div className="pt-[107px]">
                            <img className="" src={meyman} alt=""/>
                        </div>
                    </div>
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
                <h5 className="text-center text-ot">Отзыв о сайте</h5>
                <div className="pt-[80px]">
                    <ReviewSwiper/>
                    <div className="flex justify-end">
                        <button
                            className="rounded-[31px] border-blue border-[3px] flex px-[70px] py-[14px]"
                            onClick={() => dispatch(setModalReview())}
                        >
                            Оставьте отзыв
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default AboutPage