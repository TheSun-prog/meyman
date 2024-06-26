import React from 'react';
import DropdownInput from "./DropdownInput";
import bed_icon from '../../../assets/images/Bed_blue.svg'
import Counter from "./Counter";
import Counter2 from "./Counter2";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

function MainRoom({setRoomData, roomData}) {
    const roomsData = [
        {
            name: "Односпальная",
            size: "Ширина: 90-130 см",
            key: 'single_bed'
        },
        {
            name: "Двуспальная",
            size: "Ширина:131-150 см",
            key: 'double_bed'
        },
        {
            name: "Широкая(queen-size)  ",
            size: "Ширина:151-180 см",
            key: 'queen_bed'
        },
        {
            name: "Широкая(king-size)",
            size: "Ширина:181-210 см",
            key: 'king_bed'
        },
        {
            name: "Диван-кровать",
            size: "Ширина варьируется",
            key: 'sofa_bed'
        },
    ];
    return (

        <div className="mx-auto w-[1240px]">
            <p className="text-xl font-normal leading-relaxed mt-[40px]">Основная</p>
            <p className="text-base font-normal leading-relaxed mt-[40px] mb-[12px]">Укажите название номера</p>
            <DropdownInput setRoomData={setRoomData} roomData={roomData}/>
            <p className="text-base font-normal leading-relaxed mt-[40px] mb-[12px]">Какие в комнате кровати?</p>

            {
                roomsData.map((roomInfo, index) => (
                    <div key={index} className='flex w-[520px] justify-between mb-[20px]'>
                        <div className='flex'>
                            <img className="mr-[20px]" src={bed_icon} alt="Bed"/>
                            <div className=''>
                                <p className='text-sm'>{roomInfo.name}</p>
                                <p className="text-gray-500 text-sm">{roomInfo.size}</p>
                            </div>
                        </div>
                        <Counter setRoomData={setRoomData} bedData={roomInfo} roomData={roomData}/>
                    </div>
                ))
            }

            <p className="text-base font-normal mt-[40px] mb-[12px] max-w-[520px]">Максимальная вместимость гостей в номере (до 6 персон)</p>
            <Counter2 setRoomData={setRoomData} roomData={roomData}/>

            <p className="text-base font-normal leading-relaxed mt-[40px] mb-[12px]">Укажите размер комнаты(м²)</p>
            <input className="w-[520px] h-[50px] px-5 py-3 rounded-full border-2 border-solid border-gray-300 outline-none pr-12" type="number" placeholder="м²" min={0} value={roomData.room_area}
                onChange={(event) => {
                    setRoomData(prevState => {
                        return {
                            ...prevState,
                            room_area: event.target.value
                        }
                    })
                }}
            />

            <p className="text-base font-normal leading-relaxed mt-[40px] mb-[12px]">Разрешено ли курение в комнате?</p>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{display: "flex", flexDirection: "column"}}
                onChange={event => {
                    if (event.target.value === true){
                        setRoomData(prevState => {
                            return {
                                ...prevState,
                                smoking_allowed: true
                            }
                        })
                    }
                    if (event.target.value === false){
                        setRoomData(prevState => {
                            return {
                                ...prevState,
                                smoking_allowed: false
                            }
                        })
                    }
                }}
            >
                <FormControlLabel value={true} control={<Radio sx={{
                    color: "black",
                    '&.Mui-checked': {
                        color: 'black',
                    },
                }} />} label="Да" checked={roomData.smoking_allowed} onChange={() => {
                    setRoomData(prevState => {
                        return {
                            ...prevState,
                            smoking_allowed: true
                        }
                    })
                }}/>
                <FormControlLabel value={false} control={<Radio sx={{
                    color: "black",
                    '&.Mui-checked': {
                        color: 'black',
                    },
                }}/>} label="Нет" checked={!roomData.smoking_allowed} onChange={() => {

                    setRoomData(prevState => {
                        return {
                            ...prevState,
                            smoking_allowed: false
                        }
                    })
                }}/>

            </RadioGroup>



        </div>
    );
}

export default MainRoom;