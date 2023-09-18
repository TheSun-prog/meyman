import React, { useState } from 'react';
import icon_hotel from '../../../assets/images/businessMainPage/icon_hotel.svg'
import icon_home from '../../../assets/images/businessMainPage/icon_home.svg'
import icon_apartment from '../../../assets/images/businessMainPage/icon_appart.svg'
import warning from "../../../assets/images/vnimanie.svg";
import {Checkbox, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import icon_star from "../../../assets/images/businessMainPage/Star.svg"
import icon__1 from "../../../assets/images/businessMainPage/hotelServices/1.svg";
import icon__2 from "../../../assets/images/businessMainPage/hotelServices/2.svg";
import icon__3 from "../../../assets/images/businessMainPage/hotelServices/3.svg";
import icon__4 from "../../../assets/images/businessMainPage/hotelServices/4.svg";
import icon__5 from "../../../assets/images/businessMainPage/hotelServices/5.svg";
import icon__6 from "../../../assets/images/businessMainPage/hotelServices/6.svg";
import icon__7 from "../../../assets/images/businessMainPage/hotelServices/7.svg";
import icon__8 from "../../../assets/images/businessMainPage/hotelServices/8.svg";
import icon__9 from "../../../assets/images/businessMainPage/hotelServices/9.svg";
import icon__10 from "../../../assets/images/businessMainPage/hotelServices/10.svg";
import icon__11 from "../../../assets/images/businessMainPage/hotelServices/11.svg";
function AccommodationInfo({setHotelData}) {
    const [activeButtons, setActiveButtons] = useState([false, false, false]);

    const toggleButton = (index) => {
        const updatedActiveButtons = [...activeButtons];
        updatedActiveButtons[index] = !updatedActiveButtons[index];
        setActiveButtons(updatedActiveButtons);
    };

    const buttonStyles = (index) => {
        return {
            boxShadow: activeButtons[index] ? '0px 9px 16px 2px rgba(0, 0, 0, 0.25)' : 'none',
        };
    };

    const hotelsData = [
        {
            id: 1,
            icon: icon_hotel,
            name: 'Отели',
            title: 'Это недвижимость, с готовыми номерами и наборами услуг',
        },
        {
            id: 2,
            icon: icon_home,
            name: 'Дома',
            title: 'Этот объект относится к недвижимости, такой как дома для отдыха и аналогичные варианты размещения',
        },
        {
            id: 3,
            icon: icon_apartment,
            name: 'Квартиры',
            title: 'Этот объект представляет собой апартаменты, находящиеся в многоэтажных зданиях',
        },
    ];

    let firstButtonText;

    const generateStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(
                <img key={i} className="mr-[13px]" src={icon_star} alt="icon_star" />
            );
        }
        return <div className="flex">{stars}</div>;
    };


    const starsData = [
        { value: '5star', label: '5 звёзд', count: 5 },
        { value: '4star', label: '4 звёзды', count: 4 },
        { value: '3star', label: '3 звёзды', count: 3 },
        { value: '2star', label: '2 звёзды', count: 2 },
        { value: '1star', label: '1 звезда', count: 1 },
        { value: '0star', label: 'Без звёзд', count: 0 },
    ];

    if (activeButtons[0])
    {
        firstButtonText = (
            <div>
                <h1 className='font-quicksand text-[18px] font-normal'>
                    Какая категория недвижимости, больше похожа на ваш объект?
                </h1>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{display: "flex", flexDirection: "column"}}
                >
                    <FormControlLabel value="1" control={<Radio sx={{
                        color: "black",
                        '&.Mui-checked': {
                            color: 'black',
                        },
                    }} />} label="Отель"/>
                    <FormControlLabel value="2" control={<Radio sx={{
                        color: "black",
                        '&.Mui-checked': {
                            color: 'black',
                        },
                    }}/>} label="Хостел" />
                    <FormControlLabel value="3" control={<Radio sx={{
                        color: "black",
                        '&.Mui-checked': {
                            color: 'black',
                        },
                    }}/>} label="Санаторий" />

                </RadioGroup>
            </div>
        )
    }

    const [room, setRoom] = React.useState('');

    const handleChange = (event) => {
        setHotelData(prevState => {
            return{
                ...prevState,
                region: event.target.value
            }
        })
        setRoom(event.target.value);
    };


    const hotelServicesData = [
        {
            id: 1,
            name: "Бесплатный интернет",
            img: icon__1,
            keyName: "free_internet",
        },
        {
            id: 2,
            name: "Спортивный зал",
            img: icon__2,
            keyName: "gym",
        },
        {
            id: 3,
            name: "Бар",
            img: icon__3,
            keyName: "bar",
        },
        {
            id: 4,
            name: "Ресторан",
            img: icon__4,
            keyName: "restaurant",
        },
        {
            id: 5,
            name: "Трансфер от/до аэропорта",
            img: icon__5,
            keyName: "airport_transfer",
        },
        {
            id: 6,
            name: "Парковка",
            img: icon__6,
            keyName: "park",
        },
        {
            id: 7,
            name: "Бассейн",
            img: icon__7,
            keyName: "pool",
        },
        {
            id: 8,
            name: "Спа услуги",
            img: icon__8,
            keyName: "spa_services",
        },
        {
            id: 9,
            name: "Обслуживание номеров",
            img: icon__9,
            keyName: "room_service",
        },
        {
            id: 10,
            name: "Детская площадка",
            img: icon__10,
            keyName: "children_playground",
        },
        {
            id: 11,
            name: "Прокат автомобиля",
            img: icon__11,
            keyName: "car_rental",
        },
    ]

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="mx-auto w-[1240px]">
            <h1 className='font-quicksand text-[30px] font-normal'>
                Информация об объекте размещения
            </h1>
            <p className='font-quicksand text-[22px] font-normal mt-[40px] mb-[40px]'>
                Выберите, на какой из представленных категорий<br />подходит ваш объект
            </p>

            <div>
                {hotelsData.map((hotelData, index) => (
                    <div className="mb-[40px]" key={hotelData.id}>
                        <button
                            className={`flex flex-col py-[18px] px-[20px] justify-between w-[587px] h-[180px] border-solid border-[1px] rounded-[18px]`}
                            onClick={() => {
                                setHotelData(prevState => {
                                    return {
                                        ...prevState,
                                        housing_type: hotelData.name
                                    }
                                })
                                toggleButton(index)
                            }}
                            style={buttonStyles(index)}
                        >
                            <img src={hotelData.icon} alt={hotelData.name} />

                            <h1 className='font-quicksand text-[18px] font-normal'>
                                {hotelData.name}
                            </h1>

                            <p className='font-quicksand text-[18px] text-[#A1A1A1] text-left'>
                                {hotelData.title}
                            </p>
                        </button>
                    </div>
                ))}
            </div>
            {firstButtonText}
            <h2 className='font-quicksand text-[22px] font-normal mt-[100px] mb-[40px]'>
                Где находится ваш объект?
            </h2>

            <div>
                <h3 className='font-quicksand text-[18px] mb-[22px]'>
                    Область
                </h3>
                <FormControl sx={{
                    width: 520,
                    height: 50,
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 35,
                        padding: '10px',
                    },
                    '& .MuiInputBase-root': {
                        height: 50,
                    },
                    '& .MuiPaper-rounded': {
                        borderRadius: 40,
                    },


                }}>
                    <InputLabel id="demo-simple-select-helper-label" sx={{height:50}}>Выберите область</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={room}
                        label="Выберите область"
                        onChange={handleChange}
                    >
                        <MenuItem value={'Бишкек'}>Бишкек</MenuItem>
                        <MenuItem value={'Чуй'}>Чуй</MenuItem>
                        <MenuItem value={'Джалал-Абад'}>Джалал-Абад</MenuItem>
                        <MenuItem value={'Ош'}>Ош</MenuItem>
                        <MenuItem value={'Иссык-Куль'}>Иссык-Куль</MenuItem>
                        <MenuItem value={'Нарын'}>Нарын</MenuItem>
                        <MenuItem value={'Талас'}>Талас</MenuItem>
                        <MenuItem value={'Баткен'}>Баткен</MenuItem>
                    </Select>

                </FormControl>
            </div>


            <div>
                <h3 className='font-quicksand text-[18px] mb-[22px] mt-[40px]'>
                    Адрес
                </h3>
                <input className="w-[520px] h-[50px] px-5 py-3 rounded-full border-2 border-solid border-gray-300 outline-none pr-12" type="text" placeholder="Введите адрес вашего объекта"
                onChange={(event) => {
                    setHotelData(prevState => {
                        return {
                            ...prevState,
                            address: event.target.value
                        }
                    })
                }}/>

            </div>


            <h2 className='font-quicksand text-[22px] font-normal mt-[100px] mb-[40px]'>
                Расскажите о вашем объекте размещения
            </h2>

            <h3 className='font-quicksand text-[18px] font-normal mb-[12px]'>
                Название вашего объекта
            </h3>
            <input className="w-[520px] h-[50px] px-5 py-3 rounded-full border-2 border-solid border-gray-300 outline-none pr-12" type="text" placeholder="Введите название вашего объекта"
                onChange={(event) => {
                    setHotelData(prevState => {
                        return {
                            ...prevState,
                            housing_name: event.target.value
                        }
                    })
                }}
            />
            <p className='font-quicksand text-[18px] text-[#A1A1A1] mt-[14px] mb-[40px]'>
                Это название будут видеть гости,при поиске варианта проживания
            </p>





            <h3 className='font-quicksand text-[18px] font-normal mb-[12px]'>
                Укажите количество звезд у отеля
            </h3>

            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{ display: 'flex', flexDirection: 'column' }}
            >
                {starsData.map((star) => {
                    return (
                        <FormControlLabel
                            key={star.value}
                            value={star.count}
                            control={
                                <Radio
                                    sx={{
                                        color: 'black',
                                        '&.Mui-checked': {
                                            color: 'black',
                                        },
                                    }}
                                />
                            }
                            onChange={(event) => {
                                setHotelData(prevState => {
                                    return {
                                        ...prevState,
                                        stars: Number(event.target.value)
                                    }
                                })
                            }}
                            label={star.count === 0 ? 'Без звезд' : generateStars(star.count)}
                        />
                    )
                })}
            </RadioGroup>




            <h3 className='font-quicksand text-[22px] font-normal mt-[100px]'>
                Какие услуги предоставляет ваш отель гостям?
            </h3>
            <p className='font-quicksand text-[18px] text-[#A1A1A1] mb-[40px]'>
                Из ниже перечисленных вариантов выберите то что вам подходит
            </p>
            {
                hotelServicesData.map((hotelServiceData, index3) => (
                    <div key={index3} className="flex items-center mb-[20px]">
                        <label className="checkbox" style={{display: 'flex', alignItems: 'center'}}>
                            <Checkbox
                                {...label}
                                sx={{
                                    color: "Black",
                                    '&.Mui-checked': {
                                        color: "Black",
                                    },
                                }}
                                onChange={() => {
                             setHotelData(prevState => {
                                 const state = prevState
                                 state[hotelServiceData.keyName] = !state[hotelServiceData.keyName]
                                 return {
                                     ...state
                                 }
                             })
                         }}
                            />
                            <img src={hotelServiceData.img} alt="icon" className="ml-[28px]"/>
                            <h3 className="text-base text-center font-normal leading-relaxed ml-[14px] ">{hotelServiceData.name}</h3>
                        </label>
                    </div>
                ))
            }
            

        </div>
    );
}

export default AccommodationInfo;
