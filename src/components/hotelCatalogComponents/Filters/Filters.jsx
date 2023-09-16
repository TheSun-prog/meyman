//icon
import closeIcon from '../../../assets/images/clear.svg';
// modules
import React, { useState } from 'react';
import { Modal } from 'antd';
import { TextField } from '@mui/material';
import { Radio } from 'antd';
import { Rate } from 'antd'
import { Checkbox } from '@mui/material';
import { Switch } from '@mui/material';
// components
import { typeHousing } from './filtersData';
import { typeAllocation } from './filtersData';
import { numberBedRooms } from './filtersData';
import { typeBed } from './filtersData';
import { food } from './filtersData';
import { stars } from './filtersData';
import { rate } from './filtersData';
import { facilityObject } from './filtersData';
import { facilityRoom } from './filtersData';
import Button from '../../ui/Button/Button';

const Filters = ({ isOpen, handleOk, handleCancel }) => {
  const [activeHousingType, setActiveHousingType] = useState(null); // Изначально нет активного типа
  const [activeAllocation, setActiveAllocation] = useState(null)
  const [numberBedRoomsState, setNumberBedRoomsState] = useState(null)

  const handleClickHousingType = (type) => {
    setActiveHousingType(type); // Устанавливаем активный тип при клике
  };

  const handleClickAllocationType = (type) => {
    setActiveAllocation(type); // Устанавливаем активный тип при клике
  };

  const handleNumberBedRooms = (number) => {
    setNumberBedRoomsState(number); // Устанавливаем активный тип при клике
  };

  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closeIcon={false}
      bodyStyle={{ padding: '64px 0px' }}
      width={1100}
    >
      <div className='flex items-center border-b pb-[56px] px-[87px]'>
        <img
          src={closeIcon}
          alt='close'
          className='w-[32px] h-[32px] cursor-pointer'
          onClick={handleCancel}
        />
        <h1 className='flex-1 text-[40px] text-center'>Фильтры</h1>
      </div>
      <div className='px-[87px]'>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Цена за одну ночь</h2>
          <div className='flex items-center gap-[34px]'>
            <TextField type='number' id='min' label='Минимум' variant='outlined' />
            <TextField type='number' id='min' label='Максимум' variant='outlined' />
          </div>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Тип жилья</h2>
          <ul className='flex items-center gap-[21px]'>
            {typeHousing.map((type) => (
              <li
                key={type.id}
                onClick={() => handleClickHousingType(type)}
                className={`${
                  activeHousingType === type ? 'border-[#DFDFE5] shadow-xl transition-all' : ''
                } 
                transition-all rounded-[10px] h-[123px] border border-[black] pt-[20px] pl-[20px] pb-[14px] pr-[60px] cursor-pointer`}
              >
                <img src={type.icon} alt='icon' />
                <p className='text-[24px]'>{type.type}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Тип размещения</h2>
          <ul className='flex flex-col gap-[50px]'>
            {typeAllocation.map((type) => (
              <li key={type.id} className='flex items-center' onClick={() => handleClickAllocationType(type)}>
                <div className='mr-[30px]'>
                  <Radio checked={activeAllocation === type ? true : false}/>
                </div>
                <div>
                  <h4 className='text-[22px]'>{type.title}</h4>
                  <p className='text-[20px]'>{type.subTitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Количество спальных комнат</h2>
          <ul className='flex flex-col gap-[50px]'>
            {numberBedRooms.map(number => (
              <li key={number.id} className='flex gap-[30px]' onClick={() => {handleNumberBedRooms(number)}}>
                <Radio checked={numberBedRoomsState === number ? true : false}/>
                <p className='text-[22px]'>{number.number}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Тип кроватей</h2>
          <ul className='flex gap-[10px]'>
            {typeBed.map(type => (
              <li
              key={type.id}
              onClick={() => handleClickHousingType(type)}
              className={`${
                activeHousingType === type ? 'border-[#DFDFE5] shadow-xl transition-all' : ''
              } 
              transition-all rounded-[10px] h-[123px] border border-[black] pt-[20px] pl-[20px] pb-[14px] pr-[15px] cursor-pointer`}
            >
              <img src={type.icon} alt='icon' />
              <p className='text-[24px]'>{type.type}</p>
            </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Питание</h2>
          <ul className='flex flex-col gap-[55px]'>
          {food.map(foodType => (
              <li key={foodType.id} className='flex gap-[30px]' onClick={() => {handleNumberBedRooms(foodType)}}>
                <Radio checked={numberBedRoomsState === foodType ? true : false}/>
                <p className='text-[22px]'>{foodType.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Количество звезд</h2>
          <ul className='flex flex-col gap-[25px]'>
          {stars.map((stars, index) => (
              <li key={index} className='flex items-center gap-[30px]' onClick={() => {handleNumberBedRooms(stars)}}>
                <Radio checked={numberBedRoomsState === stars ? true : false}/>
                {stars === 'Без звезд' ? <p className='text-[22px]'>Без звезд</p> : <Rate style={{fontSize: '25px'}} defaultValue={stars} disabled={true} value={stars}/>}
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Рейтинг по отзывам</h2>
          <ul className='flex flex-col gap-[25px]'>
          {rate.map((rate, index) => (
              <li key={index} className='flex items-center gap-[30px]' onClick={() => {handleNumberBedRooms(stars)}}>
                <Radio checked={numberBedRoomsState === stars ? true : false}/>
                <span className='text-[22px]'>{rate}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Удобства в объекте</h2>
          <ul className='grid grid-cols-2 grid-rows-4 gap-[40px]'>
            {facilityObject.map(facility => (
              <li key={facility.id} className='flex items-center'>
                <Checkbox />
                <span className='text-[22px]'>{facility.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Удобства в номере</h2>
          <ul className='grid grid-cols-2 grid-rows-5 gap-[40px]'>
            {facilityRoom.map(facility => (
              <li key={facility.id} className='flex items-center'>
                <Checkbox />
                <span className='text-[22px]'>{facility.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Бронирование</h2>
          <div className='flex flex-col gap-[20px]'>
            <div className='flex items-center gap-[10px]'>
              <Switch/>
              <span className='text-[22px]'>Оплата за полную стоимость</span>
            </div>
            <div className='flex items-center gap-[10px]'>
              <Switch/>
              <span className='text-[22px]'>Бесплатная отмена</span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between pt-[60px]'>
          <p className='text-[28px] border-b border-[black] pb-2 cursor-pointer'>Очистить все</p>
          <Button classes={'!text-18px py-[17px] px-[70px]'}>Показать варианты</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Filters;
