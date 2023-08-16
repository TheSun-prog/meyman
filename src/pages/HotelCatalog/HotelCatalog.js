import Header from "../../components/Base/Header&Footer/Header/Header";
import Footer from "../../components/Base/Header&Footer/Footer/Footer";
import hotelIcon from "../../assets/images/main-hotel.svg";
import carIcon from "../../assets/images/main-car.svg";
import {useState} from "react";
import sort from '../../assets/images/sort.svg'
import filter from '../../assets/images/filter.svg'
import HotelCard from "../../components/Base/HotelCard/HotelCard";


const HotelCatalog = () => {

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


    return (
        <>
            <Header/>
            <div className="bg-mainpage-main w-[100%] h-[550px] bg-cover bg-no-repeat relative">
                <div className="container mx-auto flex flex-col pt-[180px] w-[1240px]">
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
                    <div className="flex pt-[50px]">
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
                    <div className="flex justify-end gap-[20px] pt-[18px]">
                        <div
                            className="flex items-center justify-center gap-[21px] w-[200px] h-[40px] bg-blue rounded-[40px] text-white">
                            <img src={sort} alt="sort"/>
                            <button
                                onClick={() => {

                                }}
                                className="text-[16px]"
                            >Сортировка
                            </button>
                        </div>
                        <div
                            className="flex items-center justify-center gap-[21px] w-[200px] h-[40px] bg-blue rounded-[40px] text-white">
                            <img src={filter} alt="filter"/>
                            <button
                                onClick={() => {

                                }}
                                className="text-[16px]"
                            >Фильтры
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto w-[1240px] pt-[80px]">
                <div className="flex flex-wrap gap-x-[20px] gap-y-[55px]">
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                    <HotelCard/>
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default HotelCatalog