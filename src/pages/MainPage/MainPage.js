import Header from "../../components/Header&Footer/Header/Header";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import hotelIcon from '../../assets/images/main-hotel.svg'
import carIcon from '../../assets/images/main-car.svg'
import Footer from "../../components/Header&Footer/Footer/Footer";
import chuy from "../../assets/images/chuy.png"
import dzhalal_abad from "../../assets/images/dzhalal-abad.png"
import yssyk_kul from "../../assets/images/yssyk-kul.png"
import osh from "../../assets/images/osh.png"
import batken from "../../assets/images/batken.png"
import talas from "../../assets/images/talas.png"
import naryn from "../../assets/images/naryn.png"
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";


const MainPage = () => {
    const [hotelIsActive, setHotelIsActive] = useState(true)
    const [carIsActive, setCarIsActive] = useState(false)

    const toggleActiveType = (type) => {
        if (type === 'hotel') {
            setHotelIsActive(true)
            setCarIsActive(false)
        } else if (type === 'car') {
            setHotelIsActive(false)
            setCarIsActive(true)
        } else {
            console.log("ACTIVE TYPE ERROR (Car/Hotel)")
        }
    }

    const typeCardClass = 'w-[115px] h-[76px] rounded-[10px] py-[5px] backdrop-blur-[9px] flex flex-col gap-[2px] items-center cursor-pointer '
    const activeClass = typeCardClass + 'border-[1px] border-white bg-main-active'
    const nonActiveClass = typeCardClass + 'bg-main-non-active'

    return(
        <div>
            <Header/>
            <div className="bg-mainpage-main w-[100%] h-[550px] bg-cover bg-no-repeat relative">
                <div className="container mx-auto flex flex-col gap-[50px] pt-[180px] w-[1240px]">
                    <div className="flex gap-[20px]">
                        <div
                            className={hotelIsActive ? activeClass : nonActiveClass}
                            onClick={() => toggleActiveType('hotel')}
                        >
                            <img className="w-[32px] h-[32px]" src={hotelIcon} alt="hotel"/>
                            <p className="text-[20px] text-white">Жилье</p>
                        </div>
                        <div
                            className={carIsActive ? activeClass : nonActiveClass}
                            onClick={() => toggleActiveType('car')}
                        >
                            <img className='w-[32px] h-[32px]' src={carIcon} alt="car"/>
                            <p className="text-[20px] text-white">Транспорт</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div
                            className="w-[468px] h-[84px] bg-white py-[16px] pl-[62px] pr-[10px] rounded-l-full"
                        >
                            <p>Куда</p>
                            <input
                                className="w-[100%] border-none outline-none text-[16px]"
                                type="text"
                                placeholder="Куда вы хотите поехать?"
                            />
                        </div>
                        <div
                            className="w-[161px] h-[84px] bg-white py-[16px] px-[10px]"
                        >
                            <p>Заезд</p>
                            <input
                                className="w-[100%] border-none outline-none text-[16px]"
                                type="text"
                                placeholder="когда?"
                            />
                        </div>
                        <div
                            className="w-[166px] h-[84px] bg-white py-[16px] px-[10px]"
                        >
                            <p>Выезд</p>
                            <input
                                className="w-[100%] border-none outline-none text-[16px]"
                                type="text"
                                placeholder="когда?"
                            />
                        </div>
                        <div
                            className="w-[442px] h-[84px] bg-white py-[16px] px-[10px] rounded-r-full"
                        >
                            <p>Кто</p>
                            <input
                                className="w-[100%] border-none outline-none text-[16px]"
                                type="text"
                                placeholder="кол-во людей?"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="absolute bottom-0 left-[110px] w-[1240px] h-[170px] py-[40px] px-[10px] bg-blue rounded-[30px]">
                    <p className="text-[22px] text-center text-white"
                    >Добро пожаловать на нашу многофункциональную онлайн-платформу для бронирования размещения, <br/>транспорта. Полная организация вашего путешествия в одном месте. Просто, гибко и удобно. <br/>Путешествуйте с уверенностью, заранее бронируя все, что вам нужно</p>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="pt-[173px] w-[1240px]">
                    <h2 className="text-[32px] text-center">Поиск отелей и других вариантов размещений по областям</h2>
                    <div className="pt-[40px] flex flex-wrap gap-x-[20px] gap-y-[49px] justify-center">
                        <div className="flex flex-col gap-[20px] w-[295px] h-[350px]">
                            <img className="w-[295px] h-[295px] rounded-[25px]" src={chuy} alt="chuy"/>
                            <p className="text-center text-[28px]">Чуй</p>
                        </div>
                        <div className="flex flex-col gap-[20px] w-[295px] h-[350px]">
                            <img className="w-[295px] h-[295px] rounded-[25px]" src={dzhalal_abad} alt="dzhalal-abad"/>
                            <p className="text-center text-[28px]">Джалал-Абад</p>
                        </div>
                        <div className="flex flex-col gap-[20px] w-[295px] h-[350px]">
                            <img className="w-[295px] h-[295px] rounded-[25px]" src={yssyk_kul} alt="yssyk-kul"/>
                            <p className="text-center text-[28px]">Ыссык-Куль</p>
                        </div>
                        <div className="flex flex-col gap-[20px] w-[295px] h-[350px]">
                            <img className="w-[295px] h-[295px] rounded-[25px]" src={osh} alt="osh"/>
                            <p className="text-center text-[28px]">Ош</p>
                        </div>
                        <div className="flex flex-col gap-[20px] w-[295px] h-[350px]">
                            <img className="w-[295px] h-[295px] rounded-[25px]" src={batken} alt="batken"/>
                            <p className="text-center text-[28px]">Баткен</p>
                        </div>
                        <div className="flex flex-col gap-[20px] w-[295px] h-[350px]">
                            <img className="w-[295px] h-[295px] rounded-[25px]" src={talas} alt="talas"/>
                            <p className="text-center text-[28px]">Талас</p>
                        </div>
                        <div className="flex flex-col gap-[20px] w-[295px] h-[350px]">
                            <img className="w-[295px] h-[295px] rounded-[25px]" src={naryn} alt="naryn"/>
                            <p className="text-center text-[28px]">Нарын</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="h-[380px] my-[100px] box-border">
                    <h2 className="text-[32px] text-center mb-[40px]">Отзывы о сайте</h2>

                    <ReviewSlider/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage