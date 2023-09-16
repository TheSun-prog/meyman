// modules
import { Modal } from 'antd';
import { useEffect, useState } from 'react';
// icon
import closeIcon from '../../../assets/images/clear.svg';
// components
import sortingData from '../sortingData';
import SortingItem from './SortingItem/SortingItem';
import Button from '../../ui/Button/Button';

const Sorting = ({ isOpen, handleOk, handleCancel }) => {
  const [data, setData] = useState(sortingData);

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

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closeIcon={false}
      bodyStyle={{ padding: 50 }}
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
      <Button classes={'py-[17px] w-full !text-[18px]'}>Показать варианты</Button>
    </Modal>
  );
};

export default Sorting;
