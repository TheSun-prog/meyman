import React, { useState } from 'react';
import plus from '../../../assets/images/plus.svg'
import minus from '../../../assets/images/minus.svg'
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

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
