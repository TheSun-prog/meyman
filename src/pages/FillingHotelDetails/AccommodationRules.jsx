import React, {useState} from 'react';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

function AccommodationRules({setHotelData}) {
    const menuItemValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,];

    const [checkInFrom, setCheckInFrom] = React.useState('');
    const [checkInTo, setCheckInTo] = React.useState('');
    const [checkOutFrom, setCheckOutFrom] = React.useState('');
    const [checkOutTo, setCheckOutTo] = React.useState('');

    const handleChangeCheckInFrom = (event) => {
        const dataTime = event.target.value < 10 ? `0${event.target.value}:00` : `${event.target.value}:00`
        setHotelData(prevState => {
            return {
                ...prevState, check_in_time_start: dataTime
            }
        })
        setCheckInFrom(event.target.value);
    };

    const handleChangeCheckInTo = (event) => {
        const dataTime = event.target.value < 10 ? `0${event.target.value}:00` : `${event.target.value}:00`
        setHotelData(prevState => {
            return {
                ...prevState, check_in_time_end: dataTime
            }
        })
        setCheckInTo(event.target.value);
    };

    const handleChangeCheckOutFrom = (event) => {
        const dataTime = event.target.value < 10 ? `0${event.target.value}:00` : `${event.target.value}:00`
        setHotelData(prevState => {
            return {
                ...prevState, check_out_time_start: dataTime
            }
        })
        setCheckOutFrom(event.target.value);
    };

    const handleChangeCheckOutTo = (event) => {
        const dataTime = event.target.value < 10 ? `0${event.target.value}:00` : `${event.target.value}:00`
        setHotelData(prevState => {
            return {
                ...prevState, check_out_time_end: dataTime
            }
        })
        setCheckOutTo(event.target.value);
    };


    const [selectedOption11, setSelectedOption11] = useState('no');
    const [selectedOption12, setSelectedOption12] = useState('no');

    return (<div className="mx-auto w-[1240px]">
        <h1 className='font-quicksand text-[22px] font-normal mt-[100px] mb-[44px]'>
            Правила проживания
        </h1>
        <div>
            <h3 className='font-quicksand text-[18px] font-normal mb-[20px]'>
                Заезд
            </h3>
            <h1 className='font-quicksand text-[16px] font-normal mb-[12px]'>
                C
            </h1>
            <FormControl sx={{
                width: 520, height: 50, '& .MuiOutlinedInput-root': {
                    borderRadius: 35, padding: '10px',
                }, '& .MuiInputBase-root': {
                    height: 50,
                }, '& .MuiPaper-rounded': {
                    borderRadius: 40,
                },
            }}>
                <InputLabel id="check-in-from-label">Выберите время заезда</InputLabel>
                <Select
                    labelId="check-in-from-label"
                    id="check-in-from"
                    value={checkInFrom}
                    label="Выберите время заезда"
                    onChange={handleChangeCheckInFrom}
                >
                    {menuItemValues.map((value) => (<MenuItem key={value} value={value}>
                        {value < 10 ? `0${value}:00` : `${value}:00`}
                    </MenuItem>))}
                </Select>
            </FormControl>

            <h3 className='font-quicksand text-[16px] font-normal mt-[22px] mb-[12px]'>
                До
            </h3>

            <FormControl sx={{
                width: 520, height: 50, '& .MuiOutlinedInput-root': {
                    borderRadius: 35, padding: '10px',
                }, '& .MuiInputBase-root': {
                    height: 50,
                }, '& .MuiPaper-rounded': {
                    borderRadius: 40,
                },
            }}>
                <InputLabel id="check-in-to-label">Выберите время заезда</InputLabel>
                <Select
                    labelId="check-in-to-label"
                    id="check-in-to"
                    value={checkInTo}
                    label="Выберите время заезда"
                    onChange={handleChangeCheckInTo}
                >
                    {menuItemValues.map((value) => (<MenuItem key={value} value={value}>
                        {value < 10 ? `0${value}:00` : `${value}:00`}
                    </MenuItem>))}
                </Select>
            </FormControl>
        </div>

        <div>
            <h3 className='font-quicksand text-[18px] font-normal mb-[20px] mt-[44px]'>
                Выезд
            </h3>
            <h1 className='font-quicksand text-[16px] font-normal mb-[12px]'>
                C
            </h1>
            <FormControl sx={{
                width: 520, height: 50, '& .MuiOutlinedInput-root': {
                    borderRadius: 35, padding: '10px',
                }, '& .MuiInputBase-root': {
                    height: 50,
                }, '& .MuiPaper-rounded': {
                    borderRadius: 40,
                },
            }}>
                <InputLabel id="check-out-from-label">Выберите время выезда</InputLabel>
                <Select
                    labelId="check-out-from-label"
                    id="check-out-from"
                    value={checkOutFrom}
                    label="Выберите время выезда"
                    onChange={handleChangeCheckOutFrom}
                >
                    {menuItemValues.map((value) => (<MenuItem key={value} value={value}>
                        {value < 10 ? `0${value}:00` : `${value}:00`}
                    </MenuItem>))}
                </Select>
            </FormControl>

            <h3 className='font-quicksand text-[16px] font-normal mt-[22px] mb-[12px]'>
                До
            </h3>

            <FormControl sx={{
                width: 520, height: 50, '& .MuiOutlinedInput-root': {
                    borderRadius: 35, padding: '10px',
                }, '& .MuiInputBase-root': {
                    height: 50,
                }, '& .MuiPaper-rounded': {
                    borderRadius: 40,
                },
            }}>
                <InputLabel id="check-out-to-label">Выберите время выезда</InputLabel>
                <Select
                    labelId="check-out-to-label"
                    id="check-out-to"
                    value={checkOutTo}
                    label="Выберите время выезда"
                    onChange={handleChangeCheckOutTo}
                >
                    {menuItemValues.map((value) => (<MenuItem key={value} value={value}>
                        {value < 10 ? `0${value}:00` : `${value}:00`}
                    </MenuItem>))}
                </Select>
            </FormControl>
        </div>

        <h3 className='font-quicksand text-[18px] font-normal mb-[20px] mt-[44px]'>
            У вас можно проживать с домашними животными?
        </h3>
        <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group1"
            sx={{display: "flex", flexDirection: "column"}}
            value={selectedOption11}
            onChange={(event) => {
                setSelectedOption11(event.target.value)
                if (event.target.value === 'yes') setHotelData(prevState => {
                    return {...prevState, pets_allowed: true}
                })
                if (event.target.value === 'no') setHotelData(prevState => {
                    return {...prevState, pets_allowed: false, pet_fee: false}
                })
            }}
        >
            <FormControlLabel value="yes" control={<Radio sx={{
                color: "black", '&.Mui-checked': {
                    color: 'black',
                },
            }}/>} label="Да"/>
            <FormControlLabel value="no" control={<Radio sx={{
                color: "black", '&.Mui-checked': {
                    color: 'black',
                },
            }}/>} label="Нет"/>
        </RadioGroup>

        {selectedOption11 === 'yes' && (<div>
            <h3 className='font-quicksand text-[18px] font-normal mb-[20px] mt-[44px]'>
                Вы берете оплату за домашних животных?
            </h3>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group1"
                sx={{display: "flex", flexDirection: "column"}}
                value={selectedOption12}
                onChange={(event) => {
                    setSelectedOption12(event.target.value)

                    if (event.target.value === 'yes') setHotelData(prevState => {
                        return {...prevState, pet_fee: true}
                    })
                    if (event.target.value === 'no') setHotelData(prevState => {
                        return {...prevState, pet_fee: false}
                    })
                }}
            >
                <FormControlLabel value="yes" control={<Radio sx={{
                    color: "black", '&.Mui-checked': {
                        color: 'black',
                    },
                }}/>} label="Да"/>
                <FormControlLabel value="no" control={<Radio sx={{
                    color: "black", '&.Mui-checked': {
                        color: 'black',
                    },
                }}/>} label="Нет"/>
            </RadioGroup>
        </div>)}
    </div>);
}

export default AccommodationRules;
