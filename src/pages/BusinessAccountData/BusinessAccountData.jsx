import React, {useState} from 'react';
import arrow_back from '../../assets/images/arrow2.svg'
import Button from "../../components/ui/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setOwnerState} from "../../store/slice/ownerSlice";

function BusinessAccountData(props) {
    const dispatch = useDispatch(), navigate = useNavigate()

    const [ownerData, setOwnerData] = useState({
        username: JSON.parse(localStorage.getItem('userData')).username,
        email: JSON.parse(localStorage.getItem('userData')).email,
        phone_number: ''
    })
    const [error, setError] = useState('')

    return (<div className="mx-auto w-[1240px]">
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
                    type="text" placeholder="Введите имя и фамилия" value={`${ownerData.username}`}
                    onChange={(event) => {
                        setOwnerData(prevState => {
                            return {
                                ...prevState, username: event.target.value
                            }
                        })
                    }}
                />
            </div>

            <div className="mb-[40px]">
                <p className='font-quicksand text-[20px] font-normal mb-[12px] text-grey'>
                    Адрес электронной почты
                </p>
                <input
                    className="w-[520px] h-[50px] px-5 py-3 rounded-full border-2 border-solid border-gray-300 outline-none pr-12 text-grey"
                    type="email" value={`${ownerData.email}`} disabled={true}/>
            </div>

            <div>
                <p className='font-quicksand text-[20px] font-normal mb-[12px]'>
                    Номер телефона
                </p>
                <input
                    className="w-[520px] h-[50px] px-5 py-3 rounded-full border-2 border-solid border-gray-300 outline-none pr-12"
                    type="tel" placeholder="Введите номер телефона" value={ownerData.phone_number}
                    onChange={(event) => {
                        setError('')
                        setOwnerData(prevState => {
                            return {
                                ...prevState, phone_number: event.target.value
                            }
                        })
                    }}/>
            </div>
            <div className="pt-[20px] h-[20px] w-[400px]">
                <p className="text-red">{error}</p>
            </div>

            <div className="pt-[80px]">
                <Button classes='w-[392px] h-[61px] hover:bg-[#1178B4]'
                        clickFunc={() => {
                            if (ownerData.phone_number) {
                                dispatch(setOwnerState(ownerData))
                                navigate('/fillingHotelDetails')
                            } else {
                                setError("Заполните все поля чтобы продолжить")
                            }
                        }}
                >
                    Продолжить
                </Button>
            </div>
        </div>);
}

export default BusinessAccountData;