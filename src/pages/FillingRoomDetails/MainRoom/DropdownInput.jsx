import React, { useState } from 'react';
import arrow_d from '../../../assets/images/arrow2.svg'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const DropdownInput = () => {

    // const [isOpen, setIsOpen] = useState(false);
    // const [selectedRoom, setSelectedRoom] = useState('');
    // const roomTypes = ['Двухместный номер с 1 кроватью', 'Двухместный с 2 отдельными \n' +
    // 'кроватями', 'Двухместный номер с 1 кроватью или\n' +
    // '2 отдельными кроватями', 'Люкс', 'Трехместный номер', 'Семейный', 'Делюкс', 'Четырехместный ', 'Пентхаус', 'Коннектирующийся номер', 'Бизнес', 'Королевский люкс', 'Эконом', 'Стандартный'];
    //
    //
    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };
    //
    // const handleRoomSelect = (room) => {
    //     setSelectedRoom(room);
    //     setIsOpen(false);
    // };

    const [room, setRoom] = React.useState('');

    const handleChange = (event) => {
        setRoom(event.target.value);
    };

    return (
        <div className="mx-auto w-[1240px]">

            <FormControl sx={{ width: 520,
                '& .MuiOutlinedInput-root': {
                    borderRadius: 35,
                },
                '& .MuiPaper-rounded': {
                    borderRadius: 40,
                },

            }}>
                <InputLabel id="demo-simple-select-helper-label" >Выберите название вашего номера </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={room}
                    label="Выберите название вашего номера"
                    onChange={handleChange}

                >

                    <MenuItem value={10}>Двухместный номер с 1 кроватью</MenuItem>
                    <MenuItem value={20}>Двухместный с 2 отдельными
                        кроватями</MenuItem>
                    <MenuItem value={30}>Двухместный номер с 1 кроватью или
                        2 отдельными кроватями</MenuItem>
                    <MenuItem value={40}>Люкс</MenuItem>
                    <MenuItem value={50}>Трехместный номер</MenuItem>
                    <MenuItem value={60}>Семейный</MenuItem>
                    <MenuItem value={70}>Делюкс</MenuItem>
                    <MenuItem value={80}>Четырехместный </MenuItem>
                    <MenuItem value={90}>Пентхаус</MenuItem>
                    <MenuItem value={100}>Коннектирующийся номер</MenuItem>
                    <MenuItem value={110}>Бизнес</MenuItem>
                    <MenuItem value={120}>Королевский люкс</MenuItem>
                    <MenuItem value={130}>Эконом</MenuItem>
                    <MenuItem value={140}>Стандартный</MenuItem>
                </Select>

            </FormControl>



            {/*<div className="relative flex">*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        className="w-[520px] h-[50px] px-5 py-3 rounded-full border-2 border-solid border-gray-300 outline-none pr-12"*/}
            {/*        placeholder="Выберите название вашего номера"*/}
            {/*        onClick={toggleDropdown}*/}
            {/*        value={selectedRoom}*/}
            {/*        readOnly*/}
            {/*    />*/}
            {/*    <ul className={`absolute top-12 left-0 w-[520px] border-2 border-solid border-gray-300 pr-[30px] pl-[30px] rounded-2xl bg-white shadow-xl mb-4  ${isOpen ? 'block' : 'hidden'}`}>*/}
            {/*        {roomTypes.map((room, index) => (*/}
            {/*            <li*/}
            {/*                key={index}*/}
            {/*                className="px-5 py-3 cursor-pointer border-b-2"*/}
            {/*                onClick={() => handleRoomSelect(room)}*/}
            {/*            >*/}
            {/*                {room}*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    );
};

export default DropdownInput;
