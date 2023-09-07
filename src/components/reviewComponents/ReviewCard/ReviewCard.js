import React from "react";

const ReviewCard = ({ reviewData }) => {
  return (
    <div className="w-[441px] h-[271px] px-[40px] py-[25px] rounded-[35px] bg-blue relative flex flex-col gap-[24px] text-white z-0">
      <div className="flex gap-[139px] items-center">
        <div className="flex gap-[20px] items-center">
          <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center">
            <p className="uppercase text-[16px] text-blue">A</p>
          </div>
          <p className="text-[18px]">Кто-то</p>
        </div>
        <p className="text-[16px]">{reviewData?.created_at}</p>
      </div>
      <p className="text-[16px]">{reviewData?.content}</p>
      <span className="text-[12px] absolute right-[40px] bottom-[25px] z-0">
        Еще....
      </span>
    </div>
  );
};

export default ReviewCard;
