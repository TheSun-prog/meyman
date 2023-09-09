import React, { useState } from 'react';
import {Checkbox, FormControlLabel, Radio, RadioGroup} from "@mui/material";

function BreakfastService(props) {
    const [selectedOption1, setSelectedOption1] = useState('no');
    const [selectedOption2, setSelectedOption2] = useState('no');
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="mx-auto w-[1240px]">
            <h1 className='font-quicksand text-[22px] font-normal mt-[100px] mb-[40px]'>
                Услуги завтрака
            </h1>
            <h3 className='font-quicksand text-[18px] font-normal mb-[12px]'>
                Вы предлагаете гостям завтрак?
            </h3>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group1"
                sx={{ display: "flex", flexDirection: "column" }}
                value={selectedOption1}
                onChange={(event) => setSelectedOption1(event.target.value)}
            >
                <FormControlLabel value="yes" control={<Radio sx={{
                    color: "black",
                    '&.Mui-checked': {
                        color: 'black',
                    },
                }} />} label="Да" />
                <FormControlLabel value="no" control={<Radio sx={{
                    color: "black",
                    '&.Mui-checked': {
                        color: 'black',
                    },
                }} />} label="Нет" />
            </RadioGroup>

            {selectedOption1 === 'yes' && (
                <div>
                    <h3 className='font-quicksand text-[18px] font-normal mb-[12px] mt-[40px]'>
                        Завтрак включен в стоимость проживания?
                    </h3>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group2"
                        sx={{ display: "flex", flexDirection: "column" }}
                        value={selectedOption2}
                        onChange={(event) => setSelectedOption2(event.target.value)}
                    >
                        <FormControlLabel value="yes2" control={<Radio sx={{
                            color: "black",
                            '&.Mui-checked': {
                                color: 'black',
                            },
                        }} />} label="Да" />
                        <FormControlLabel value="no2" control={<Radio sx={{
                            color: "black",
                            '&.Mui-checked': {
                                color: 'black',
                            },
                        }} />} label="Нет" />
                    </RadioGroup>
                </div>
            )}

            {selectedOption2 === 'no2' && (
                <div>
                    <h3 className='font-quicksand text-[18px] font-normal mb-[12px] mt-[40px]'>
                        Стоимость завтрака в сомах (с человека за ночь)
                    </h3>
                    <input className="w-[520px] h-[50px] px-5 py-3 rounded-full border-2 border-solid border-gray-300 outline-none pr-12" type="number" placeholder="Введите цену"/>
                </div>
            )}

            {selectedOption1 === 'yes' && (
                <div>
                    <h3 className='font-quicksand text-[18px] font-normal mb-[12px] mt-[40px]'>
                        Какой тип завтрака вы предлагаете?
                    </h3>

                    <div>
                        <label className="checkbox" style={{display: 'flex', alignItems: 'center'}}>
                            <Checkbox
                                {...label}
                                sx={{
                                    color: "Black",
                                    position: "left",
                                    '&.Mui-checked': {
                                        color: "Black",
                                    },
                                }}
                            />
                            <h3 className="text-base text-center font-normal leading-relaxed">Национальный</h3>
                        </label>
                        <label className="checkbox" style={{display: 'flex', alignItems: 'center'}}>
                            <Checkbox
                                {...label}
                                sx={{
                                    color: "Black",
                                    '&.Mui-checked': {
                                        color: "Black",
                                    },
                                }}
                            />
                            <h3 className="text-base text-center font-normal leading-relaxed">Континентальный</h3>
                        </label>
                        <label className="checkbox" style={{display: 'flex', alignItems: 'center'}}>
                            <Checkbox
                                {...label}
                                sx={{
                                    color: "Black",
                                    '&.Mui-checked': {
                                        color: "Black",
                                    },
                                }}
                            />
                            <h3 className="text-base text-center font-normal leading-relaxed">Шведский</h3>
                        </label>
                    </div>
                </div>
            )}


        </div>
    );
}

export default BreakfastService;
