import Header from "../../components/Base/Header/Header";
import Footer from "../../components/Base/Footer/Footer";
import hotelIcon from "../../assets/images/hotel-icon.svg";
import carIcon from "../../assets/images/car-icon.svg";
import Button from "../../components/ui/Button/Button";
import {useState} from "react";
import HotelCard from "../../components/hotelComponents/HotelCard/HotelCard";


const HotelCatalog = () => {

    const [activeSearch, setActiveSearch] = useState('hotel')

    let data = []

    for (let i = 0; i < 12; i++) {
        data.push([])
    }

    return (
        <>
            <Header/>
            <div className="bg-main bg-no-repeat bg-cover h-[550px]">
                <div className="mx-auto w-[1240px] h-[100%] relative">
                    <div className="pt-[180px] flex flex-col gap-[50px]">
                        <div className="flex gap-[20px]">
                            <div
                                className={`w-[115px] h-[76px] flex flex-col gap-[2px] flex items-center justify-center rounded-[10px] backdrop-blur-[9px] ${activeSearch === 'hotel' ? 'bg-grey border-[1px] border-white' : 'bg-dark-blue'}`}>
                                <img
                                    className="w-[32px] h-[32px]"
                                    src={hotelIcon} alt="hotel"
                                />
                                <p className="text-[20px] text-white">Жилье</p>
                            </div>
                            <div
                                className={`w-[115px] h-[76px] flex flex-col gap-[2px] flex items-center justify-center rounded-[10px] backdrop-blur-[9px] ${activeSearch === 'car' ? 'bg-grey border-[1px] border-white' : 'bg-dark-blue'}`}>
                                <img
                                    className="w-[32px] h-[32px]"
                                    src={carIcon} alt="hotel"
                                />
                                <p className="text-[20px] text-white">Транспорт</p>
                            </div>
                        </div>
                        <div className="flex h-[80px] bg-white rounded-full pl-[75px] pr-[20px] py-[13px]">
                            <div className="w-[422px] h-[100%]">
                                <p>Куда</p>
                                <input
                                    type="text"
                                    placeholder="Куда вы хотите поехать?"
                                    className="w-[90%] outline-none text-[16px]"
                                />
                            </div>
                            <div className="w-[156px] h-[100%]">
                                <p>Заезд</p>
                                <input
                                    type="text"
                                    placeholder="когда?"
                                    className="w-[90%] outline-none text-[16px]"
                                />
                            </div>
                            <div className="w-[161px] h-[100%]">
                                <p>Выезд</p>
                                <input
                                    type="text"
                                    placeholder="когда?"
                                    className="w-[90%] outline-none text-[16px]"
                                />
                            </div>
                            <div className="w-[205px] h-[100%]">
                                <p>Кто</p>
                                <input
                                    type="text"
                                    placeholder="кол-во людей?"
                                    className="w-[90%] outline-none text-[16px]"
                                />
                            </div>
                            <Button
                                width={202}
                                height={53}
                                text={'Искать'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-[1240px]">
                <div className="pt-[80px] pb-[100px] flex flex-wrap gap-x-[95px] gap-y-[55px]">
                    {data.map(() => {
                        return(
                            <HotelCard/>
                        )
                    })}
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default HotelCatalog