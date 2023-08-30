import React from 'react';
import { useSelector } from 'react-redux';

const HotelGrade = () => {
  const { data } = useSelector(state => state.hotel);

  const ratingFields = [
    { title: 'Чистота', key: 'cleanliness_rating' },
    { title: 'Комфорт', key: 'comfort_rating' },
    { title: 'Питание', key: 'food_rating' },
    { title: 'Персонал', key: 'staff_rating' },
    { title: 'Цена/качество', key: 'value_for_money_rating' },
    { title: 'Месторасположение', key: 'location_rating' },
  ];

  const calculateAverageRating = (fieldName) => {
    const reviews = data?.reviews || []; // Ensure reviews array exists
    if (reviews.length === 0) {
      return 0; // Return 0 if there are no reviews
    }

    const totalRating = reviews.reduce((acc, curr) => acc + curr[fieldName], 0);
    const averageRating = totalRating / reviews.length;

    return Math.round(averageRating);
  };

  return (
    <div>
      <h2 className="text-[28px] mt-14">Отзывы</h2>
      <p className="text-[#666666] mb-[40px]">
        Количество отзывов: {data?.reviews?.length}
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between items-center">
          {ratingFields.slice(0, 3).map((field, index) => (
            <div key={index}>
              <h3 className="text-[20px] mr-auto">{field.title}</h3>
              <div className="flex mb-[30px] items-center">
                <div className="bg-[#B8B8B8] rounded-md flex justify-between h-[8px] w-[481px]">
                  <div className="rounded-lg bg-[#282F77]" style={{ width: `${calculateAverageRating(field.key) * 10}%` }}></div>
                </div>
                <div className="ml-2 text-[#282F77] text-[20px]">{calculateAverageRating(field.key)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between items-center">
          {ratingFields.slice(3).map((field, index) => (
            <div key={index}>
              <h3 className="text-[20px] mr-auto">{field.title}</h3>
              <div className="flex mb-[30px] items-center">
                <div className="bg-[#B8B8B8] rounded-md flex justify-between h-[8px] w-[481px]">
                  <div className="rounded-lg bg-[#282F77]" style={{ width: `${calculateAverageRating(field.key) * 10}%` }}></div>
                </div>
                <div className="ml-2 text-[#282F77] text-[20px]">{calculateAverageRating(field.key)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelGrade;
