import React, {useEffect, useState} from 'react';
import plus from '../../../assets/images/plus.svg'
import minus from '../../../assets/images/minus.svg'

const Counter = ({bedData, setRoomData,roomData}) => {

    const increment = () => {
        setRoomData(prevState => {
            prevState[bedData.key] += 1
            return {
                ...prevState
            }
        })
    };

    const decrement = () => {
        if (roomData[bedData.key] > 0) {

            setRoomData(prevState => {
                prevState[bedData.key] -= 1
                return {
                    ...prevState
                }
            })
        }
    };


    return (<div
        className="w-[163px] h-[44px] border-2 border-solid border-[#1164B4] rounded-full flex justify-between items-center p-4">
        <button
            className="rounded-full flex justify-center items-center"
            onClick={decrement}
        >
            <img src={minus} alt=""/>
        </button>
        <span className="text-xl">{roomData[bedData.key]}</span>
        <button
            className="rounded-full justify-center items-center"
            onClick={increment}
        >
            <img src={plus} alt=""/>
        </button>
    </div>);
};

export default Counter;
