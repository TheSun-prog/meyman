import React from 'react';
import close from '../../../assets/images/close.svg'
import Button from "../../ui/Button/Button";
import hotel from '../../../assets/images/hotel-icon-blue.svg'
import hostel from '../../../assets/images/hostel-icon.svg'
import home from '../../../assets/images/home-icon.svg'
import apart from '../../../assets/images/apart-icon.svg'
import sanatorium from '../../../assets/images/sanatorium-icon.svg'
import checkboxOn from "../../../assets/images/checkboxOn.svg";
import checkboxOff from "../../../assets/images/checkboxOff.svg";
import radioOn from "../../../assets/images/radio-on.svg";
import radioOff from "../../../assets/images/radio-off.svg";
import star from "../../../assets/images/star.svg";


function FilterModal({filters, setFilters}) {

    const activeHousingType = 'shadow-dropdown-menu'
    const nonActiveHousingType = 'border-[1px] border-black'

    return (<div className="flex justify-center">
        <div className="fixed top-0 left-0 z-40 w-[100vw] h-[100vh] bg-black bg-opacity-40"

        >

        </div>
        <div
            className="fixed bg-white w-[1100px] h-[600px] z-50 rounded-[45px] overflow-hidden flex flex-col justify-between">
            <div className="h-[70px] border-b-[1px] border-b-grey py-[20px]">
                <div className="px-[100px] h-[100%] flex justify-between items-center">
                    <img className="w-[32px] h-[32px] cursor-pointer" src={close} alt="close"

                    />
                    <p className='text-[30px]'>Фильтры</p>
                    <span></span>
                </div>
            </div>


            <div className="overflow-auto px-[80px]">
                <div className="">
                    <p></p>
                    <div className="">
                        <label htmlFor="minCostFilter" className="">
                            <p></p>
                            <input
                                type="text" id="minCostFilter"
                                className=""
                                placeholder={"Введите цену"}
                            />
                        </label>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] py-[25px]">
                    <p className="text-[25px]">Тип кроватей</p>
                    <div className="flex gap-[21px] py-[10px]">
                        <div
                            className={`w-[150px] h-[120px] px-[20px] py-[15px] flex flex-col gap-[10px] rounded-[10px] ${nonActiveHousingType}`}>
                            <img className="w-[48px] h-[48px]" src={hotel} alt="hotel"/>
                            <p>Отели</p>
                        </div>
                        <div
                            className={`w-[150px] h-[120px] px-[20px] py-[15px] flex flex-col gap-[10px] rounded-[10px] ${nonActiveHousingType}`}>
                            <img className="w-[48px] h-[48px]" src={hostel} alt="hotel"/>
                            <p>Хостел</p>
                        </div>
                        <div
                            className={`w-[150px] h-[120px] px-[20px] py-[15px] flex flex-col gap-[10px] rounded-[10px] ${nonActiveHousingType}`}>
                            <img className="w-[48px] h-[48px]" src={apart} alt="hotel"/>
                            <p>Квартира</p>
                        </div>
                        <div
                            className={`w-[150px] h-[120px] px-[20px] py-[15px] flex flex-col gap-[10px] rounded-[10px] ${nonActiveHousingType}`}>
                            <img className="w-[48px] h-[48px]" src={home} alt="hotel"/>
                            <p>Дом</p>
                        </div>
                        <div
                            className={`w-[150px] h-[120px] px-[20px] py-[15px] flex flex-col gap-[10px] rounded-[10px] ${nonActiveHousingType}`}>
                            <img className="w-[48px] h-[48px]" src={sanatorium} alt="hotel"/>
                            <p>Санаторий</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] py-[25px]">
                    <p className="text-[25px]">Питание</p>
                    <div className="flex flex-col gap-[25px]">
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <p>Все включено</p>
                        </div>
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <p>Завтрак включен</p>
                        </div>
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <p>Не включено</p>
                        </div>
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <p>Собственная кухная</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] py-[25px]">
                    <p className="text-[25px]">Количество звезд</p>

                    <div className="flex flex-col gap-[14px]">
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <div className="flex gap-[13px]">
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            </div>
                        </div>
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <div className="flex gap-[13px]">
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            </div>
                        </div>
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <div className="flex gap-[13px]">
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            </div>
                        </div>
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <div className="flex gap-[13px]">
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            </div>
                        </div>
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <div className="flex gap-[13px]">
                                <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            </div>
                        </div>
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <p>Без звезд</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] py-[25px]">
                    <p className="text-[25px]">Рейтинг по отзывам</p>
                    <div className="flex flex-col gap-[15px]">
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <p>9-10</p>
                        </div>
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <p>8-9</p>
                        </div>
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <p>7-8</p>
                        </div>
                        <div
                            className="flex gap-[10px] cursor-pointer"
                        >
                            <img src={radioOff} alt="radio"/>
                            <p>5-7</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] py-[25px]">
                    <p className="text-[25px]">Удобства в объекте</p>
                    <div className="flex gap-[100px]">


                        <div className="flex flex-col gap-[25px]">
                            <div
                                className="flex gap-[10px] cursor-pointer"
                            >
                                <img src={checkboxOff} alt="checkbox"/>
                                <p>Бесплатный интерент</p>
                            </div>
                            <div
                                className="flex gap-[10px] cursor-pointer"
                            >
                                <img src={checkboxOff} alt="checkbox"/>
                                <p>Спортивный зал</p>
                            </div>
                            <div
                                className="flex gap-[10px] cursor-pointer"
                            >
                                <img src={checkboxOff} alt="checkbox"/>
                                <p>Бар</p>
                            </div>
                            <div
                                className="flex gap-[10px] cursor-pointer"
                            >
                                <img src={checkboxOff} alt="checkbox"/>
                                <p>Ресторан</p>
                            </div>
                            <div
                                className="flex gap-[10px] cursor-pointer"
                            >
                                <img src={checkboxOff} alt="checkbox"/>
                                <p>Трансфер от/до аэропорта</p>
                            </div>
                            <div
                                className="flex gap-[10px] cursor-pointer"
                            >
                                <img src={checkboxOff} alt="checkbox"/>
                                <p>Парковка</p>
                            </div>

                        </div>
                        <div className="flex flex-col gap-[25px]">


                            <div
                                className="flex gap-[10px] cursor-pointer"
                            >
                                <img src={checkboxOff} alt="checkbox"/>
                                <p>Бассейн</p>
                            </div>
                            <div
                                className="flex gap-[10px] cursor-pointer"
                            >
                                <img src={checkboxOff} alt="checkbox"/>
                                <p>Спа услуги</p>
                            </div>
                            <div
                                className="flex gap-[10px] cursor-pointer"
                            >
                                <img src={checkboxOff} alt="checkbox"/>
                                <p>Обслуживание номеров</p>
                            </div>
                            <div
                                className="flex gap-[10px] cursor-pointer"
                            >
                                <img src={checkboxOff} alt="checkbox"/>
                                <p>Детская площадка</p>
                            </div>
                            <div
                                className="flex gap-[10px] cursor-pointer"
                            >
                                <img src={checkboxOff} alt="checkbox"/>
                                <p>Прокат автомобиля</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="h-[70px] border-t-[1px] border-t-grey py-[20px]">
                <div className="px-[100px] h-[100%] flex justify-between items-center">
                    <p className="text-[20px] border-b-[1px] border-b-grey cursor-pointer">Очистить все</p>
                    <Button
                        width={314}
                        height={40}
                        text={'Показать варианты'}
                    />
                </div>
            </div>
        </div>
    </div>);
}

export default FilterModal;