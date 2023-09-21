import React from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


function PriceSetting({setRoomData, roomData}) {

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#1164B4' : '#1164B4',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#8D8FA4' : '#8D8FA4',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    return (
        <div className="mx-auto w-[1240px]">
            <h1 className='font-quicksand text-xl font-normal mt-[100px] mb-[40px]'>
                Установите цену за ночь для этой комнаты
            </h1>
            <p className="text-base font-normal leading-relaxed mb-[20px]">Цена для гостей (в долларах)</p>
            <input
                className="w-[520px] h-[50px] px-5 py-3 rounded-full border-2 border-solid border-gray-300 outline-none pr-12"
                type="number" placeholder="Введите цену для гостей" min={0} value={roomData.price_per_night}
                onChange={(event) => {
                    setRoomData(prevState => {
                        return {
                            ...prevState,
                            price_per_night: event.target.value
                        }
                    })
                }}
            />
            <p className="text-base font-normal leading-relaxed mb-[20px] text-[#A1A1A1]">С учетом налогов, комиссии и
                сборов
            </p>
            <h1 className='font-quicksand text-xl font-normal mt-[100px] mb-[28px]'>
                Правила отмены
            </h1>

            <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Бесплатная отмена в любое время"
                checked={roomData.smoking_allowed}
                onChange={event => {
                    setRoomData(prevState => {
                        return {
                            ...prevState,
                            smoking_allowed: !prevState.smoking_allowed
                        }
                    })
                }}
            />
        </div>
    );
}

export default PriceSetting;