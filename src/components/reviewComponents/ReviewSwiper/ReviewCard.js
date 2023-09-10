import React from "react";

const ReviewCard = ({ data }) => {
  return (
    <div className=" h-[249px] px-[40px] py-[25px] rounded-[35px] shadow-xl bg-blue relative flex flex-col gap-[24px] text-white z-0">
      <div className="flex gap-[139px] items-center">
        <div className="flex gap-[20px] items-center">
          <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center">
            <p className="uppercase text-[16px] text-blue">A</p>
          </div>
          <p className="text-[18px]">{data?.id}</p>
        </div>
        <p className="text-[16px]">{data?.date_added}</p>
      </div>
      <p className="text-[16px]">{data?.comment}</p>
      <span className="text-[12px] absolute right-[40px] bottom-[25px] z-0">
        Еще....
      </span>
    </div>
  );
};

export default ReviewCard;
