import React, {useEffect, useState} from 'react';
import MainRoom from "./MainRoom/MainRoom";
import Room from "./Room/Room";
import PriceSetting from "./PriceSetting/PriceSetting";
import AddPhotoRoom from "./AddPhoto/AddPhotoRoom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setRoomState} from "../../store/slice/ownerSlice";


function FillingRoomDetails({}) {

    const dispatch = useDispatch()

    const [roomData, setRoomData] = useState({
        housing: '',
        room_name: '',
        price_per_night: '',
        images: [],
        room_amenities: [],
        kitchen: [],
        outside: [],
        bathroom: [],
        bedrooms: '1 спальня',
        bed_type: 'Односпальные',
        single_bed: 0,
        double_bed: 0,
        queen_bed: 0,
        king_bed: 0,
        sofa_bed: 0,
        max_guest_capacity: 1,
        room_area: 0,
        smoking_allowed: false,
        Free_cancellation_anytime: false
    })



    const saveRoomData = () => {

        // const formData = new FormData()
        // for (const key in roomData) {
        //     if (key === 'images') {
        //         for (let i = 0; i < roomData.images.length; i++) {
        //             formData.append(`images[${i}]image`, roomData.images[i])
        //         }
        //     } else if (['room_amenities', 'kitchen', 'outside', 'bathroom'].includes(key)){
        //         for (let i = 0; i < roomData[key].length; i++) {
        //             formData.append(`${key}[${i}]`, roomData[key][i])
        //         }
        //     } else {
        //         formData.append(key, roomData[key])
        //     }
        // }

        dispatch(setRoomState(roomData))
        window.scrollTo(0, 0);
        return true
    }

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
            <MainRoom roomData={roomData} setRoomData={setRoomData}/>
            <Room roomInfo={roomData} setRoomData={setRoomData}/>
            <PriceSetting roomData={roomData} setRoomData={setRoomData}/>
            <AddPhotoRoom saveRoomData={saveRoomData} setRoomData={setRoomData} roomData={roomData}/>
        </div>
    );

}

export default FillingRoomDetails;