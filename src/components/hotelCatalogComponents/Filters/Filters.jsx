//icon
import closeIcon from '../../../assets/images/clear.svg';
// modules
import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { TextField } from '@mui/material';
import { Radio } from 'antd';
import { Rate } from 'antd';
import { Checkbox } from '@mui/material';
import { Switch } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
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
import { fetchHousingData } from '../../../store/slice/housingSlice';

const initialFiltersState = {
  price_per_night__gte: '',
  price_per_night__lte: '',
  housing_type: [],
  accommodation_type: '',
  rooms__bedrooms: '',
  bed_type: [],
  food_type: '',
  stars: '',
  rating_range: '',
  facilityHotel: {
    free_internet: null,
    restaurant: null,
    airport_transfer: null,
    car_rental: null,
    gym: null,
    children_playground: null,
    park: null,
    bar: null,
    spa_services: null,
    pool: null,
    room_service: null,
    poolside_bar: null,
    cafe: null,
    in_room_internet: null,
    hotel_wide_internet: null,
  },
  facilityRoom: [],
};

const Filters = ({ isOpen, handleOk, handleCancel }) => {
  const [initialState, setInitialState] = useState(initialFiltersState);

  const dispatch = useDispatch()

  const clearAllFields = () => {
    console.log("Очищаем все поля");
    setInitialState(initialFiltersState);
  };

  const submitFilters = () => {
    const { facilityHotel, ...restFilters } = initialState;
    const data = { ...restFilters, ...facilityHotel };
    dispatch(fetchHousingData({ limit: 12, offset: 0, data}))
    handleOk()
  }

  useEffect(() => {
    console.log(initialState);
  }, [initialState]);

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
            <TextField
              onChange={(e) => {
                setInitialState((prev) => ({
                  ...prev,
                  price_per_night__gte: e.target.value,
                }));
              }}
              value={initialState.price_per_night__gte}
              type='number'
              id='min'
              label='Минимум'
              variant='outlined'
            />
            <TextField
              onChange={(e) => {
                setInitialState((prev) => ({
                  ...prev,
                  price_per_night__lte: e.target.value,
                }));
              }}
              value={initialState.price_per_night__lte}
              type='number'
              id='max'
              label='Максимум'
              variant='outlined'
            />
          </div>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Тип жилья</h2>
          <ul className='flex items-center gap-[21px]'>
            {typeHousing.map((type) => (
              <li
                key={type.id}
                onClick={() =>
                  setInitialState((prev) => ({
                    ...prev,
                    housing_type: type.type,
                  }))
                }
                className={`${
                  initialState.housing_type === type.type
                    ? '!border-[#DFDFE5] shadow-xl transition-all'
                    : ''
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
              <li
                key={type.id}
                className='flex items-center'
                onClick={() =>
                  setInitialState((prev) => ({
                    ...prev,
                    accommodation_type: type.title,
                  }))
                }
              >
                <div className='mr-[30px]'>
                  <Radio checked={initialState.accommodation_type === type.title ? true : false} />
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
            {numberBedRooms.map((number) => (
              <li
                key={number.id}
                className='flex gap-[30px]'
                onClick={() =>
                  setInitialState((prev) => ({
                    ...prev,
                    rooms__bedrooms: number.number,
                  }))
                }
              >
                <Radio checked={initialState.rooms__bedrooms === number.number ? true : false} />
                <p className='text-[22px]'>{number.number}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Тип кроватей</h2>
          <ul className='flex gap-[10px]'>
            {typeBed.map((type) => (
              <li
                key={type.id}
                onClick={() =>
                  setInitialState((prev) => ({
                    ...prev,
                    bed_type: type.type
                  }))
                }
                className={`${
                  initialState.bed_type === type.type
                    ? '!border-[#DFDFE5] shadow-xl transition-all'
                    : ''
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
            {food.map((foodType) => (
              <li
                key={foodType.id}
                className='flex gap-[30px]'
                onClick={() =>
                  setInitialState((prev) => ({
                    ...prev,
                    food_type: foodType.text,
                  }))
                }
              >
                <Radio checked={initialState.food_type === foodType.text ? true : false} />
                <p className='text-[22px]'>{foodType.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Количество звезд</h2>
          <ul className='flex flex-col gap-[25px]'>
            {stars.map((stars, index) => (
              <li
                key={index}
                className='flex items-center gap-[30px]'
                onClick={() =>
                  setInitialState((prev) => ({
                    ...prev,
                    stars: stars,
                  }))
                }
              >
                <Radio checked={initialState.stars === stars ? true : false} />
                <Rate
                  style={{ fontSize: '25px' }}
                  defaultValue={stars}
                  disabled={true}
                  value={stars}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Рейтинг по отзывам</h2>
          <ul className='flex flex-col gap-[25px]'>
            {rate.map((rate, index) => (
              <li
                key={index}
                className='flex items-center gap-[30px]'
                onClick={() =>
                  setInitialState((prev) => ({
                    ...prev,
                    rating_range: rate,
                  }))
                }
              >
                <Radio checked={initialState.rating_range === rate ? true : false} />
                <span className='text-[22px]'>{rate}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Удобства в объекте</h2>
          <ul className='grid grid-cols-2 gap-[40px]'>
            {facilityObject.map((facility) => (
              <li key={facility.id} className='flex items-center'>
                <Checkbox
                  checked={initialState.facilityHotel[facility.key] || false}
                  onChange={(e) => {
                    setInitialState((prev) => ({
                      ...prev,
                      facilityHotel: {
                        ...prev.facilityHotel,
                        [facility.key]: e.target.checked,
                      },
                    }));
                  }}
                />
                <span className='text-[22px]'>{facility.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Удобства в номере</h2>
          <ul className='grid grid-cols-2 gap-[40px]'>
            {facilityRoom.map((facility) => (
              <li key={facility.id} className='flex items-center'>
                <Checkbox
                  checked={initialState.facilityRoom.includes(facility.text)}
                  onChange={() => {
                    setInitialState((prev) => {
                      const updatedFacilityRoom = [...prev.facilityRoom];
                      if (updatedFacilityRoom.includes(facility.text)) {
                        const index = updatedFacilityRoom.indexOf(facility.text);
                        updatedFacilityRoom.splice(index, 1);
                      } else {
                        updatedFacilityRoom.push(facility.text);
                      }
                      return {
                        ...prev,
                        facilityRoom: updatedFacilityRoom,
                      };
                    });
                  }}
                />
                <span className='text-[22px]'>{facility.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='border-b pb-[40px]'>
          <h2 className='text-[30px] my-[50px]'>Бронирование</h2>
          <div className='flex flex-col gap-[20px]'>
            <div className='flex items-center gap-[10px]'>
              <Switch />
              <span className='text-[22px]'>Оплата за полную стоимость</span>
            </div>
            <div className='flex items-center gap-[10px]'>
              <Switch />
              <span className='text-[22px]'>Бесплатная отмена</span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between pt-[60px]'>
          <p className='text-[28px] border-b border-[black] pb-2 cursor-pointer' onClick={clearAllFields}>Очистить все</p>
          <Button classes={'!text-[18px] py-[17px] px-[70px] shadow-xl'} clickFunc={submitFilters}>Показать варианты</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Filters;
