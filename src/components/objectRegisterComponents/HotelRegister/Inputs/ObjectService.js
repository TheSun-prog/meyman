import checkboxOff from '../../../../assets/images/checkboxOff.svg'
import checkboxOn from '../../../../assets/images/checkboxOn.svg'
import wifi from '../../../../assets/images/wifi.svg'
import sport from '../../../../assets/images/wifi.svg'
import pub from '../../../../assets/images/pub.svg'
import parking from '../../../../assets/images/parking.svg'
import pool from '../../../../assets/images/pool.svg'
import spa from '../../../../assets/images/spa.svg'
import clean from '../../../../assets/images/clean.svg'
import child from '../../../../assets/images/child.svg'
import car from '../../../../assets/images/car.svg'
import {useState} from "react";


const ObjectService = () => {

    const [checkbox, setCheckbox] = useState({
        free_internet: false,
        gym: false,
        bar: false,
        restaurant: false,
        airport_transfer: false,
        paid_parking: false,
        pool: false,
        spa_services: false,
        room_service: false,
        children_playground: false,
        car_rental: false,
    })

    return(
        <div className="flex flex-col gap-[40px] pt-[100px]">
            <div className="flex flex-col gap-[10px]">
                <p className="text-[22px]">Какие услуги предоставляет ваш отель гостям?</p>
                <p className="text-grey">Из ниже перечисленных вариантов выберите то что вам подходит</p>
            </div>
            <div className="flex flex-col gap-[25px]">
                <div
                    className="flex gap-[28px] cursor-pointer"
                    onClick={() => {
                        setCheckbox(prevState => {
                            return { ...prevState, free_internet: !prevState.free_internet}
                        })
                    }}
                >
                    <img src={checkbox.free_internet ? checkboxOn : checkboxOff} alt="checkbox"/>
                    <div className="flex gap-[14px] items-center">
                        <img src={wifi} alt="wifi"/>
                        <p>Бесплатный интерент</p>
                    </div>
                </div>
                <div
                    className="flex gap-[28px] cursor-pointer"
                    onClick={() => {
                        setCheckbox(prevState => {
                            return { ...prevState, gym: !prevState.gym}
                        })
                    }}
                >
                    <img src={checkbox.gym ? checkboxOn : checkboxOff} alt="checkbox"/>
                    <div className="flex gap-[14px] items-center">
                        <img src={sport} alt="sport"/>
                        <p>Спортивный зал</p>
                    </div>
                </div>
                <div
                    className="flex gap-[28px] cursor-pointer"
                    onClick={() => {
                        setCheckbox(prevState => {
                            return { ...prevState, bar: !prevState.bar}
                        })
                    }}
                >
                    <img src={checkbox.bar ? checkboxOn : checkboxOff} alt="checkbox"/>
                    <div className="flex gap-[14px] items-center">
                        <img src={pub} alt="pub"/>
                        <p>Бар</p>
                    </div>
                </div>
                <div
                    className="flex gap-[28px] cursor-pointer"
                    onClick={() => {
                        setCheckbox(prevState => {
                            return { ...prevState, restaurant: !prevState.restaurant}
                        })
                    }}
                >
                    <img src={checkbox.restaurant ? checkboxOn : checkboxOff} alt="checkbox"/>
                    <div className="flex gap-[14px] items-center">
                        <img src={pub} alt="restoraunt"/>
                        <p>Ресторан</p>
                    </div>
                </div>
                <div
                    className="flex gap-[28px] cursor-pointer"
                    onClick={() => {
                        setCheckbox(prevState => {
                            return { ...prevState, airport_transfer: !prevState.airport_transfer}
                        })
                    }}
                >
                    <img src={checkbox.airport_transfer ? checkboxOn : checkboxOff} alt="checkbox"/>
                    <div className="flex gap-[14px] items-center">
                        <img src={wifi} alt="transfer"/>
                        <p>Трансфер от/до аэропорта</p>
                    </div>
                </div>
                <div
                    className="flex gap-[28px] cursor-pointer"
                    onClick={() => {
                        setCheckbox(prevState => {
                            return { ...prevState, paid_parking: !prevState.paid_parking}
                        })
                    }}
                >
                    <img src={checkbox.paid_parking ? checkboxOn : checkboxOff} alt="checkbox"/>
                    <div className="flex gap-[14px] items-center">
                        <img src={parking} alt="parking"/>
                        <p>Парковка</p>
                    </div>
                </div>
                <div
                    className="flex gap-[28px] cursor-pointer"
                    onClick={() => {
                        setCheckbox(prevState => {
                            return { ...prevState, pool: !prevState.pool}
                        })
                    }}
                >
                    <img src={checkbox.pool ? checkboxOn : checkboxOff} alt="checkbox"/>
                    <div className="flex gap-[14px] items-center">
                        <img src={pool} alt="pool"/>
                        <p>Бассейн</p>
                    </div>
                </div>
                <div
                    className="flex gap-[28px] cursor-pointer"
                    onClick={() => {
                        setCheckbox(prevState => {
                            return { ...prevState, spa_services: !prevState.spa_services}
                        })
                    }}
                >
                    <img src={checkbox.spa_services ? checkboxOn : checkboxOff} alt="checkbox"/>
                    <div className="flex gap-[14px] items-center">
                        <img src={spa} alt="spa"/>
                        <p>Спа услуги</p>
                    </div>
                </div>
                <div
                    className="flex gap-[28px] cursor-pointer"
                    onClick={() => {
                        setCheckbox(prevState => {
                            return { ...prevState, room_service: !prevState.room_service}
                        })
                    }}
                >
                    <img src={checkbox.room_service ? checkboxOn : checkboxOff} alt="checkbox"/>
                    <div className="flex gap-[14px] items-center">
                        <img src={clean} alt="cleaning"/>
                        <p>Обслуживание номеров</p>
                    </div>
                </div>
                <div
                    className="flex gap-[28px] cursor-pointer"
                    onClick={() => {
                        setCheckbox(prevState => {
                            return { ...prevState, children_playground: !prevState.children_playground}
                        })
                    }}
                >
                    <img src={checkbox.children_playground ? checkboxOn : checkboxOff} alt="checkbox"/>
                    <div className="flex gap-[14px] items-center">
                        <img src={child} alt="child"/>
                        <p>Детская площадка</p>
                    </div>
                </div>
                <div
                    className="flex gap-[28px] cursor-pointer"
                    onClick={() => {
                        setCheckbox(prevState => {
                            return { ...prevState, car_rental: !prevState.car_rental}
                        })
                    }}
                >
                    <img src={checkbox.car_rental ? checkboxOn : checkboxOff} alt="checkbox"/>
                    <div className="flex gap-[14px] items-center">
                        <img src={car} alt="car"/>
                        <p>Прокат автомобиля</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ObjectService