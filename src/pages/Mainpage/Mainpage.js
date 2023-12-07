// React module
import { useState } from "react";
import { useSelector } from "react-redux";
// images
import hotelIcon from '../../assets/images/hotel-icon.svg'
import carIcon from '../../assets/images/car-icon.svg'
import Button from "../../components/ui/Button/Button";
import chuy from '../../assets/images/chuy.png'
import dzhalalAbad from '../../assets/images/dzhalal-abad.png'
import yssykKul from '../../assets/images/yssyk-kul.png'
import osh from '../../assets/images/osh.png'
import batken from '../../assets/images/batken.png'
import talas from '../../assets/images/talas.png'
import naryn from '../../assets/images/naryn.png'
import HotelSwiper from "../../components/hotelComponents/HotelSwiper/HotelSwiper";
import {NavLink} from "react-router-dom";
import AuthDoneModal from "../../components/objectRegisterComponents/AuthDoneModal/AuthDoneModal";
import ModalReview from "../../components/hotelComponents/modals/ModalReview";
import SiteReviewSwiper from "../../components/reviewComponents/SiteReviewSwiper/SiteReviewSwiper";
import AdvertisingSwiper from "../../components/hotelComponents/AdvertisingSwiper/AdvertisingSwiper";

const Mainpage = () => {
    const { AuthModal } = useSelector(state => state.authSlice)
    const [activeSearch, setActiveSearch] = useState('hotel')
    const [activeModalReview, setActiveModalReview] = useState(false)
    const [reviewDataProp, setReviewDataProp] = useState('')

    const data = useSelector(state => state.owner)

    const regions = [
        {
            img: chuy,
            name: "Чуй",
        },
        {
            img: dzhalalAbad,
            name: "Джалал-абад",
        },
        {
            img: yssykKul,
            name: "Ысык-куль",
        },
        {
            img: osh,
            name: "Ош",
        },
        {
            img: batken,
            name: "Баткен",
        },
        {
            img: talas,
            name: "Талас",
        },
        {
            img: naryn,
            name: "Нарын",
        }
    ]


    return (
        <>
            {AuthModal && <AuthDoneModal/>}
            <div className="bg-main bg-no-repeat bg-cover h-[550px] pt-[180px] z-0">
                <div className="mx-auto w-[1240px] h-[100%] relative z-0">
                    <div
                        className="absolute left-0 bottom-[-80px] w-[100%] h-[164px] bg-blue rounded-[30px] flex items-center justify-center px-[10px] z-5">
                        <p className="text-[20px] text-center text-white">
                            Добро пожаловать на нашу многофункциональную онлайн-платформу для бронирования
                            размещения, <br />транспорта. Полная организация вашего путешествия в одном месте. Просто,
                            гибко и удобно. Путешествуйте с <br />уверенностью, заранее бронируя все, что вам нужно
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-[1240px] pt-[167px]">
                <div className="flex flex-col gap-[40px] items-center">
                    <p className="text-[28px]">Поиск отелей и других вариантов размещений по областям</p>
                    <div className="flex flex-wrap justify-center gap-[80px]">
                        {regions.map((value, index) => {
                            return (
                                <div
                                    key={index}
                                    className="w-[250px] h-[300px] flex flex-col justify-between items-center"
                                >
                                    <img
                                        className="w-[250px] h-[250px] rounded-[18px]"
                                        src={value.img} alt="region of kg"
                                    />
                                    <p className="text-[22px]">{value.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="mx-auto w-[1240px] pt-[100px]">
                <AdvertisingSwiper />
            </div>
            <div className="mx-auto w-[1240px] py-[100px]">
                <SiteReviewSwiper handleClick={(value) => {
                    setReviewDataProp(value)
                    setActiveModalReview(true);
                }} />
            </div>
            {activeModalReview && <ModalReview handleCLickCloseModal={() => {
                setActiveModalReview(false);
            }} data={reviewDataProp} />}
        </>
    )
}

export default Mainpage