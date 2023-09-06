import { Modal } from 'antd'
import HotelSendReview from '../HotelSendReview/HotelSendReview'
import { Rate } from 'antd/lib'
import geo from '../../../assets/images/place.svg'
import TextArea from 'antd/es/input/TextArea'
import Button from '../../ui/Button/Button'
import { useEffect, useState } from 'react'
import clear from '../../../assets/images/clear.svg'
import { useDispatch } from 'react-redux'
import { postReviewsData } from '../../../store/slice/reviewsSlice'
import jwtDecode from 'jwt-decode'

const ModalSendReview = ({ isOpen, handleOk, handleCancel, data, hotelId }) => {

  const dispatch = useDispatch();

  

  const [initialDataRate, setInitialDataRate] = useState({
    housing: parseInt(hotelId),
    staff_rating: 0,
    comfort_rating: 0,
    cleanliness_rating: 0,
    value_for_money_rating: 0,
    food_rating: 0,
    location_rating: 0,
    comment: ''
  });

  const customIcons = Array.from({ length: 10 }, (_, i) => (
    <HotelSendReview key={i} num={i + 1} />
  ));

  const fields = [
    {
      field: 'staff_rating',
      label: 'Насколько вам понравился персонал?',
    },
    {
      field: 'comfort_rating',
      label: 'Было ли вам комфортно в нашем отеле?',
    },
    {
      field: 'cleanliness_rating',
      label: 'Довольны ли вы уровнем чистоты в отеле?',
    },
    {
      field: 'value_for_money_rating',
      label: 'Вас устроило соотношение цены и качества?',
    },
    {
      field: 'food_rating',
      label: 'Вам понравилось питание в нашем отеле?',
    },
    {
      field: 'location_rating',
      label: 'Вас устроило месторасположение отеля?',
    },
  ];

  const ratingDescriptions = {
    1: { text: 'Плохо', color: '#660000' },
    2: { text: 'Ужасно', color: '#8C2800' },
    3: { text: 'Неудовлетворительно', color: '#994C00' },
    4: { text: 'Не очень', color: '#B57100' },
    5: { text: 'Нормально', color: '#CC9900' },
    6: { text: 'Хорошо', color: '#E6B21E' },
    7: { text: 'Очень хорошо', color: '#A3C140' },
    8: { text: 'Отлично', color: '#7AC15F' },
    9: { text: 'Замечательно', color: '#51C17E' },
    10: { text: 'Превосходно', color: '#00B700' },
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(postReviewsData(initialDataRate));
  };

  const handleRateChange = (field, rate) => {
    setInitialDataRate((prev) => ({
      ...prev,
      [field]: rate,
    }));
  };

  useEffect(() => {
    console.log(initialDataRate);
  }, [initialDataRate]);

  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={725}
      style={{ borderRadius: '20px' }}
      bodyStyle={{ padding: '20px 70px' }}
      closeIcon={false}
    >
      <img
        onClick={handleCancel}
        className="absolute cursor-pointer top-6 left-6"
        src={clear}
        alt="clear"
      />
      <h2 className="text-center text-[28px] border-b pb-4">Отзывы</h2>
      <div className="flex gap-[27px] mt-[40px]">
        <img
          src={data?.results?.[hotelId]?.housing_images?.[0]?.image}
          alt="hotel"
          className="object-cover w-[270px] h-[250px] rounded-xl"
        />
        <div>
          <h3 className="text-[32px] font-[500]">
            {data?.results?.[hotelId]?.housing_name}
          </h3>
          <Rate defaultValue={5} disabled />
          <div className="flex gap-2 mt-3">
            <img src={geo} alt="geo" />
            <span className="text-[22px] text-[#787878]">
              {data?.results?.[hotelId]?.address}
            </span>
          </div>
        </div>
      </div>
      <form className="mt-[40px]" onSubmit={handleFormSubmit}>
        {fields.map(({ field, label }) => (
          <div className="mb-[40px]" key={field}>
            <label htmlFor={label} className="text-[22px]">
              {label}
            </label>
            <p
              className="text-[22px] mb-[12px] font-[500]"
              style={{ color: ratingDescriptions[initialDataRate[field]]?.color }}
            >
              {ratingDescriptions[initialDataRate[field]]?.text}
            </p>
            <Rate
              onChange={(rate) => handleRateChange(field, rate)}
              count={10}
              style={{ fontSize: '22px', color: '#1164B4' }}
              character={({ index }) => customIcons[index]}
            />
          </div>
        ))}
        <h3 className="text-[22px] mb-[20px] mt-[40px]">
          Пожалуйста, оставьте ваш комментарий:
        </h3>
        <TextArea
          onChange={(e) =>
            setInitialDataRate((prev) => ({
              ...prev,
              comment: e.target.value,
            }))
          }
          value={initialDataRate.comment}
          style={{ borderRadius: '27px', border: '2px solid #787878', padding: "10px" }}
          autoSize={{ minRows: 6, maxRows: 12 }}
          maxLength={500}
          placeholder="Напишите ваш комментарий "
        />
        <span className="block mb-[40px]">
          Символов: {initialDataRate.comment.length} из 500
        </span>
        <Button classes={'py-[20px] w-full mb-[60px]'}>Отправить</Button>
      </form>
    </Modal>
  );
};

export default ModalSendReview
