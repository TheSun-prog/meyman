// modules
import { Modal } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// icon
import closeIcon from '../../../assets/images/clear.svg';
// components
import sortingData from '../sortingData';
import SortingItem from './SortingItem/SortingItem';
import Button from '../../ui/Button/Button';
import { fetchHousingData } from '../../../store/slice/housingSlice';

const Sorting = ({ isOpen, handleOk, handleCancel }) => {

  const dispatch = useDispatch()
  const [data, setData] = useState(sortingData);
  const currency = useSelector(state => state.currency)

  const handleChangeCheckBox = (e, index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.map((item) => (item.checked = false));
      newData[index] = {
        ...newData[index],
        checked: e.target.checked,
      };
      return newData;
    });
  };

  const handleClickSubmit = () => {
    dispatch(fetchHousingData({ limit: 12, offset: 0, currency: currency, sortData: data.filter(item => item.checked === true)?.[0]?.key}))
    handleOk()
  }

  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closeIcon={false}
      bodyStyle={{ padding: 50, height: 600}}
      width={550}

    >
      <div className='flex items-center'>
        <img
          src={closeIcon}
          alt='close'
          className='w-[24px] h-[24px] cursor-pointer'
          onClick={handleCancel}
        />
        <h3 className='flex-1 text-center text-[20px]'>Сортировка</h3>
      </div>
      <div className='flex flex-col gap-[35px] mb-[45px] mt-[40px]'>
        {data.map((item, index) => (
          <SortingItem
            key={item.id}
            checked={item.checked}
            text={item.type}
            handleChange={(e) => {
              handleChangeCheckBox(e, index);
            }}
          />
        ))}
      </div>
      <Button classes={'py-[17px] w-full !text-[18px] shadow-xl'} clickFunc={handleClickSubmit}>Показать варианты</Button>
    </Modal>
  );
};

export default Sorting;
