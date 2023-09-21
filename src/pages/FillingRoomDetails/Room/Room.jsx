import React from 'react';
import icon1 from '../../../assets/images/room/UdobstvaKomnaty/Двуспальная кровать.svg'
import icon2 from '../../../assets/images/room/UdobstvaKomnaty/Телевизор.svg'
import icon3 from '../../../assets/images/room/UdobstvaKomnaty/Стиральная машина.svg'
import icon4 from '../../../assets/images/room/UdobstvaKomnaty/Ванная комната.svg'
import icon5 from '../../../assets/images/room/UdobstvaKomnaty/Утюг.svg'
import icon6 from '../../../assets/images/room/UdobstvaKomnaty/Сейф.svg'
import icon7 from '../../../assets/images/room/UdobstvaKomnaty/Телефон.svg'
import icon8 from '../../../assets/images/room/UdobstvaKomnaty/Комоды.svg'
import icon9 from '../../../assets/images/room/UdobstvaKomnaty/Шкафы.svg'
import icon10 from '../../../assets/images/room/UdobstvaKomnaty/Мини кухня.svg'
import icon11 from '../../../assets/images/room/UdobstvaKomnaty/Камин.svg'
import icon12 from '../../../assets/images/room/UdobstvaKomnaty/Закуски.svg'
import icon1_1 from '../../../assets/images/room/Kuhnya/Электрический чайник.svg'
import icon1_2 from '../../../assets/images/room/Kuhnya/Микроволновка.svg'
import icon1_3 from '../../../assets/images/room/Kuhnya/Обеденный стол.svg'
import icon1_4 from '../../../assets/images/room/Kuhnya/Кофеварка.svg'
import icon1_5 from '../../../assets/images/room/Kuhnya/Mini-bar.svg'
import icon1_6 from '../../../assets/images/room/Kuhnya/Холодильник.svg'
import icon_1 from '../../../assets/images/room/NaUlice/Балкон.svg'
import icon_2 from '../../../assets/images/room/NaUlice/Терраса.svg'
import icon_3 from '../../../assets/images/room/NaUlice/Вид из окна.svg'
import icon__1 from '../../../assets/images/room/Bathroom/1.svg'
import icon__2 from '../../../assets/images/room/Bathroom/2.svg'
import icon__3 from '../../../assets/images/room/Bathroom/3.svg'
import icon__4 from '../../../assets/images/room/Bathroom/4.svg'
import icon__5 from '../../../assets/images/room/Bathroom/5.svg'
import icon__6 from '../../../assets/images/room/Bathroom/6.svg'
import icon__7 from '../../../assets/images/room/Bathroom/7.svg'
import icon__8 from '../../../assets/images/room/Bathroom/8.svg'
import icon__9 from '../../../assets/images/room/Bathroom/9.svg'
import {Checkbox} from "@mui/material";

function Room({setRoomData, roomInfo}) {

    const roomsData = [
        {
            id: 1,
            name: "Двуспальная кровать",
            img: icon1,
        },
        {
            id: 2,
            name: "Телевизор",
            img: icon2,
        },
        {
            id: 3,
            name: "Стиральная машина",
            img: icon3,
        },
        {
            id: 4,
            name: "Ванная комната",
            img: icon4,
        },
        {
            id: 5,
            name: "Утюг",
            img: icon5,
        },
        {
            id: 6,
            name: "Сейф",
            img: icon6,
        },
        {
            id: 7,
            name: "Телефон",
            img: icon7,
        },
        {
            id: 8,
            name: "Комоды",
            img: icon8,
        },
        {
            id: 9,
            name: "Шкафы",
            img: icon9,
        },
        {
            id: 10,
            name: "Мини кухня",
            img: icon10,
        },
        {
            id: 11,
            name: "Камин",
            img: icon11,
        },
        {
            id: 12,
            name: "Закуски",
            img: icon12,
        },

    ];

    const kitchensData = [
        {
            id: 1,
            name: "Электрический чайник",
            img: icon1_1,
        },
        {
            id: 2,
            name: "Микроволновка",
            img: icon1_2,
        },
        {
            id: 3,
            name: "Обеденный стол",
            img: icon1_3,
        },
        {
            id: 4,
            name: "Кофеварка",
            img: icon1_4,
        },
        {
            id: 5,
            name: "Mini-bar",
            img: icon1_5,
        },
        {
            id: 6,
            name: "Холодильник",
            img: icon1_6,
        },
    ]

    const streetsData = [
        {
            id: 1,
            name: "Балкон",
            img: icon_1,
        },
        {
            id: 2,
            name: "Терраса",
            img: icon_2,
        },
        {
            id: 3,
            name: "Вид из окна",
            img: icon_3,
        },
    ]

    const bathroomsData = [
        {
            id: 1,
            name: "Душ",
            img: icon__1,
        },
        {
            id: 2,
            name: "Туалетная бумага",
            img: icon__2,
        },
        {
            id: 3,
            name: "Туалет",
            img: icon__3,
        },
        {
            id: 4,
            name: "Фен",
            img: icon__4,
        },
        {
            id: 5,
            name: "Ванна",
            img: icon__5,
        },
        {
            id: 6,
            name: "Бесплатные уходовые средтсва",
            img: icon__6,
        },
        {
            id: 7,
            name: "Биде",
            img: icon__7,
        },
        {
            id: 8,
            name: "Тапочки",
            img: icon__8,
        },
        {
            id: 9,
            name: "Халат",
            img: icon__9,
        },
    ]

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="mx-auto w-[1240px]">
            <h1 className='font-quicksand text-xl font-normal mt-[100px] mb-[40px]'>
                Комната
            </h1>
            <div className="flex justify-between">
                <div>
                    <p className="text-base font-normal leading-relaxed mb-[20px]">Удобства комнаты</p>

                    {
                        roomsData.map((roomData, index) => (
                            <div key={index} className="flex items-center mb-[20px]">
                                <label className="checkbox" style={{display: 'flex', alignItems: 'center'}}>
                                    <Checkbox
                                        {...label}
                                        checked={roomInfo.room_amenities.includes(roomData.name)}
                                        sx={{
                                            color: "Black",
                                            '&.Mui-checked': {
                                                color: "Black",
                                            },
                                        }}
                                        onChange={() => {

                                            setRoomData(prevState => {
                                                let result
                                                if (prevState.room_amenities.includes(roomData.name)) {
                                                    result = prevState.room_amenities.filter(value => value !== roomData.name)
                                                } else {
                                                    result = [...prevState.room_amenities, roomData.name]
                                                }
                                                return {
                                                    ...prevState,
                                                    room_amenities: result
                                                }
                                            })
                                        }}
                                    />
                                    <img src={roomData.img} alt="icon" className="ml-[28px]"/>
                                    <p className="text-base text-center font-normal leading-relaxed ml-[14px]">{roomData.name}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>

                <div>
                    <p className="text-base font-normal leading-relaxed mb-[20px]">Кухня</p>

                    {
                        kitchensData.map((kitchenData, index2) => (
                            <div key={index2} className="flex items-center mb-[20px]">
                                <label className="checkbox" style={{display: 'flex', alignItems: 'center'}}>
                                    <Checkbox
                                        {...label}
                                        checked={roomInfo.kitchen.includes(kitchenData.name)}
                                        sx={{
                                            color: "Black",
                                            '&.Mui-checked': {
                                                color: "Black",
                                            },
                                        }}
                                        onChange={() => {
                                            setRoomData(prevState => {
                                                let result
                                                if (prevState.kitchen.includes(kitchenData.name)) {
                                                    result = prevState.kitchen.filter(value => value !== kitchenData.name)
                                                } else {
                                                    result = [...prevState.kitchen, kitchenData.name]
                                                }
                                                return {
                                                    ...prevState,
                                                    kitchen: result
                                                }
                                            })
                                        }}
                                    />
                                    <img src={kitchenData.img} alt="icon" className="ml-[28px]"/>
                                    <p className="text-base text-center font-normal leading-relaxed ml-[14px] mb-[4px] ">{kitchenData.name}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>

                <div>
                    <p className="text-base font-normal leading-relaxed mb-[20px]">На улице</p>

                    {
                        streetsData.map((streetData, index2) => (
                            <div key={index2} className="flex items-center mb-[20px]">
                                <label className="checkbox" style={{display: 'flex', alignItems: 'center'}}>
                                    <Checkbox
                                        {...label}
                                        checked={roomInfo.outside.includes(streetData.name)}
                                        sx={{
                                            color: "Black",
                                            '&.Mui-checked': {
                                                color: "Black",
                                            },
                                        }}
                                        onChange={() => {
                                            setRoomData(prevState => {
                                                let result
                                                if (prevState.outside.includes(streetData.name)) {
                                                    result = prevState.outside.filter(value => value !== streetData.name)
                                                } else {
                                                    result = [...prevState.outside, streetData.name]
                                                }
                                                return {
                                                    ...prevState,
                                                    outside: result
                                                }
                                            })
                                        }}
                                    />
                                    <img src={streetData.img} alt="icon" className="ml-[28px]"/>
                                    <p className="text-base text-center font-normal leading-relaxed ml-[14px] mb-[4px] ">{streetData.name}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h1 className='font-quicksand text-xl font-normal mt-[100px] mb-[40px]'>
                    Ванная комната
                </h1>
                <p className="text-base font-normal leading-relaxed mb-[20px]">Какие удобства есть в ванной комнате?</p>
                {
                    bathroomsData.map((bathroomData, index3) => (
                        <div key={index3} className="flex items-center mb-[20px]">
                            <label className="checkbox" style={{display: 'flex', alignItems: 'center'}}>
                                <Checkbox
                                    {...label}
                                    checked={roomInfo.bathroom.includes(bathroomData.name)}
                                    sx={{
                                        color: "Black",
                                        '&.Mui-checked': {
                                            color: "Black",
                                        },
                                    }}
                                    onChange={() => {
                                            setRoomData(prevState => {
                                                let result
                                                if (prevState.bathroom.includes(bathroomData.name)) {
                                                    result = prevState.bathroom.filter(value => value !== bathroomData.name)
                                                } else {
                                                    result = [...prevState.bathroom, bathroomData.name]
                                                }
                                                return {
                                                    ...prevState,
                                                    bathroom: result
                                                }
                                            })
                                        }}
                                />
                                <img src={bathroomData.img} alt="icon" className="ml-[28px]"/>
                                <p className="text-base text-center font-normal leading-relaxed ml-[14px] ">{bathroomData.name}</p>
                            </label>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Room;