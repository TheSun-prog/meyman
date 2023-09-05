import React from 'react';
import './FillingRoomDetails.css'
import MainRoom from "./MainRoom/MainRoom";
import Room from "./Room/Room";
import PriceSetting from "./PriceSetting/PriceSetting";
import AddPhotoRoom from "./AddPhoto/AddPhotoRoom";
import BusinessOwnerNotification from "../BusinessOwnerNotification/BusinessOwnerNotification";


function FillingRoomDetails(props) {
    return (
        <div className="mx-auto w-[1240px]">
            <div className="flex justify-between items-center mt-[40px] mb-[40px]">
                <h1 className='w-[34px] h-[34px] text-center text-white bg-[#1164B4] rounded-full text-lg font-normal'>
                    1
                </h1>
                    <div className="w-[1152px] h-[5px] bg-[#C3D8EC] rounded-[3px]">
                    </div>
                <h1 className='w-[34px] h-[34px] text-center text-white bg-[#1164B4] rounded-full text-lg font-normal'>
                    2
                </h1>
            </div>
            <h1 className='font-quicksand text-3xl font-normal mt-[40px]'>
                Информация о номере
            </h1>
            <MainRoom/>
            <Room/>
            <PriceSetting/>
            <AddPhotoRoom/>
        </div>
    );

}

export default FillingRoomDetails;