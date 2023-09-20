import React, {useEffect, useState} from 'react';
import plus from '../../../assets/images/plus.svg'
import minus from '../../../assets/images/minus.svg'
const Counter = ({setRoomData}) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < 6) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    useEffect(() => {
        setRoomData(prevState => {
            prevState.max_guest_capacity = count
            return {
                ...prevState
            }
        })
    }, [count])

    return (
        <div className="w-[163px] h-[44px] border-2 border-solid border-[#1164B4] rounded-full flex justify-between items-center p-4">
            <button
                className="rounded-full flex justify-center items-center"
                onClick={decrement}
            >
                <img src={minus} alt=""/>
            </button>
            <span className="text-xl">{count}</span>
            <button
                className="rounded-full justify-center items-center"
                onClick={increment}
            >
                <img src={plus} alt=""/>
            </button>
        </div>
    );
};

export default Counter;
