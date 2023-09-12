import React, {useState} from 'react';
import arrow_back from '../../assets/images/arrow2.svg'
import Button from "../../components/ui/Button/Button";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setOwnerState} from "../../store/slice/ownerSlice";
function BusinessAccountData(props) {
    const dispatch = useDispatch()

    const [ownerData, setOwnerData] = useState("")

    return (
        <div className="mx-auto w-[1240px]">
            <button className='mt-[40px]'>
                <img className="transform rotate-90 " src={arrow_back} alt=""/>
            </button>
            <h1 className='font-quicksand text-[24px] font-normal mt-[40px]'>
                Данные вашего аккаунта
            </h1>
            <p className='font-quicksand text-[20px] font-normal mb-[40px] text-[#8C8C8C]'>
                Приветствуем вас на нашей платформе!
            </p>

            <div className="mb-[40px]">
                <p className='font-quicksand text-[20px] font-normal mb-[12px]'>
                    Имя и фамилия
                </p>
                <input
                    className="w-[520px] h-[50px] px-5 py-3 rounded-full border-2 border-solid border-gray-300 outline-none pr-12"
                    type="text" placeholder="Введите имя и фамилия"/>
            </div>

            <div className="mb-[40px]">
                <p className='font-quicksand text-[20px] font-normal mb-[12px]'>
                    Адрес электронной почты
                </p>
                <input
                    className="w-[520px] h-[50px] px-5 py-3 rounded-full border-2 border-solid border-gray-300 outline-none pr-12"
                    type="email" placeholder="Введите адрес электронной почты "/>
            </div>

            <div className="mb-[80px]">
                <p className='font-quicksand text-[20px] font-normal mb-[12px]'>
                    Номер телефона
                </p>
                <input
                    className="w-[520px] h-[50px] px-5 py-3 rounded-full border-2 border-solid border-gray-300 outline-none pr-12"
                    type="number" placeholder="Введите номер телефона" value={ownerData} onChange={(event) => {
                    setOwnerData(event.target.value)
                }}/>
            </div>
            <div onClick={() => {
                dispatch(setOwnerState())
            }}>
                <Button classes='w-[392px] h-[61px] hover:bg-[#1178B4]'>
                    Продолжить
                </Button>
                </div>
        </div>
    );
}

export default BusinessAccountData;