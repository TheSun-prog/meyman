import React, {useEffect, useState} from 'react';
import AccommodationInfo from "./AccommodationInfo/AccommodationInfo";
import BreakfastService from "./BreakfastService/BreakfastService";
import AccommodationRules from "./AccommodationRules";
import AddHotelPhoto from "./AddHotelPhoto/AddHotelPhoto";
import FillingRoomDetails from "../FillingRoomDetails/FillingRoomDetails";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setHotelState} from "../../store/slice/ownerSlice";

function FillingHotelDetails(props) {

    const dispatch = useDispatch()

    const [hotelData, setHotelData] = useState({
        housing_name: '',
        images: [],
        stars: 0,
        housing_type: '',
        accommodation_type: 'Жилье целиком',
        free_internet: false,
        bar: false,
        restaurant: false,
        airport_transfer: false,
        food_type: 'Все включено',
        children_playground: false,
        region: 'Бишкек',
        parking_location: "На территории",
        car_rental: false,
        paid_transfer: false,
        park: false,
        paid_parking: false,
        spa_services: false,
        pool: false,
        paid_bar: false,
        gym: false,
        room_service: false,
        poolside_bar: false,
        cafe: false,
        breakfast_type: [],
        in_room_internet: false,
        hotel_wide_internet: false,
        address: '',
        check_in_time_start: '00:00',
        check_in_time_end: '00:00',
        check_out_time_start: '00:00',
        check_out_time_end: '00:00',
        children_allowed: false,
        pets_allowed: false,
        pet_fee: false,
        breakfast_cost_usd: "0",
    })

    const requiredHotelData = ['housing_name', 'images', 'housing_type', 'accommodation_type', 'region', 'parking_location', 'breakfast_type', 'address', 'check_in_time_start', 'check_in_time_end', 'check_out_time_start', 'check_out_time_end']

    const checkHotelData = () => {
        for (const key in hotelData) {
            if (!requiredHotelData.includes(key)) {
                continue
            }
            if (hotelData[key]) {
                continue
            }
            return false
        }

        // const formData = new FormData()
        // for (const key in hotelData) {
        //     if (key === 'images') {
        //         for (let i = 0; i < hotelData.images.length; i++) {
        //             formData.append(`images[${i}]image`, hotelData.images[i])
        //         }
        //     } else if (['breakfast_type'].includes(key)){
        //         for (let i = 0; i < hotelData[key].length; i++) {
        //             formData.append(`${key}[${i}]`, hotelData[key][i])
        //         }
        //     } else {
        //         formData.append(key, hotelData[key])
        //     }
        // }

        dispatch(setHotelState(hotelData))
        window.scrollTo(0, 0);
        return true
    }

    return (<div className="mx-auto w-[1240px]">
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
            <AccommodationInfo setHotelData={setHotelData}/>
            <BreakfastService hotelData={hotelData} setHotelData={setHotelData}/>
            <AccommodationRules setHotelData={setHotelData}/>
            <AddHotelPhoto hotelData={hotelData} setHotelData={setHotelData} checkHotelData={checkHotelData}/>
        </div>);
}

export default FillingHotelDetails;