import React from 'react';
import AccommodationInfo from "./AccommodationInfo/AccommodationInfo";
import BreakfastService from "./BreakfastService/BreakfastService";
import AccommodationRules from "./AccommodationRules";
import AddHotelPhoto from "./AddHotelPhoto/AddHotelPhoto";
import FillingRoomDetails from "../FillingRoomDetails/FillingRoomDetails";

function FillingHotelDetails(props) {
    return (
        <div className="mx-auto w-[1240px]">
            <div className="flex justify-between items-center mt-[40px] mb-[40px]">
                <h1 className='w-[34px] h-[34px] text-center text-white bg-[#1164B4] rounded-full text-lg font-normal'>
                    1
                </h1>
                <div className="w-[1152px] h-[5px] bg-[#D9D9D9] rounded-[3px]">
                </div>
                <h1 className='w-[34px] h-[34px] text-center text-white bg-[#A1A1A1] rounded-full text-lg font-normal'>
                    2
                </h1>
            </div>
            <AccommodationInfo/>
            <BreakfastService/>
            <AccommodationRules/>
            <AddHotelPhoto/>
        </div>
    );
}

export default FillingHotelDetails;