import React from 'react';
import infoLogo from '../../assets/images/infoGreen.svg'
import privileges from '../../assets/images/Privilegii_1.svg'
import privileges2 from '../../assets/images/Privilegii_2.svg'
import privileges3 from '../../assets/images/Privilegii_3.svg'
import Button from "../../components/ui/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import {$authApi} from "../../axios/axios";
import {useDispatch, useSelector} from "react-redux";


function BusinessOwnerNotification(props) {

    const data = useSelector(state => state.owner)
    console.log(data)
    const navigate = useNavigate()

    const privilegesData = [{
        text: 'Управлять объектом размещения из своего аккаунта ', img: privileges
    }, {
        text: 'Зарабатывать на бронированиях от пользователей нашего сайта', img: privileges2
    }, {
        text: 'Отслеживать бронирования со всех сайтов,с которыми вы работаете\n' + 'благодаря синхронизации календарей',
        img: privileges3
    }]
    return (

        <div className="mx-auto w-[1240px]">
            <h1 className='font-quicksand text-xl font-normal mt-[40px] mb-[40px]'>
                Отлично! Теперь все готово для начала приема первых гостей. Принимайте их с <br/> удовольствием!
            </h1>
            <div className="flex items-center mb-[80px]">
                <img src={infoLogo} alt="infoLogo"/>
                <p className="text-base font-normal leading-relaxed ml-[20px] text-[#A1A1A1]">С учетом налогов, комиссии
                    и
                    Наши модераторы проверят регистрацию вашего<br/>
                    объекта и разместят объявление в течении 2 недель.<br/>
                    Вас уведомят о регистрации вашего объекта через вашу почту
                </p>
            </div>
            <h1 className='font-quicksand text-xl font-normal mb-[40px]'>
                Теперь вы сможете:
            </h1>
            {privilegesData.map((privilegeData) => (<div className="flex items-center mb-[40px]">
                <img src={privilegeData.img} alt="Logo"/>
                <p className="text-base font-normal leading-relaxed ml-[20px] max-w-[622px]">
                    {privilegeData.text}
                </p>
            </div>))}
            <Button classes={'py-[20px] mt-[80px] w-[312px] h-[53px] hover:bg-[#1178B4]'}
                    clickFunc={() => {
                        const req = async () => {
                            try {
                                await $authApi.put('/api/users/profile/update_user_type/', {user_type: 'owner'})
                            } catch (e) {
                            }

                            const formHotelData = new FormData()
                            for (const key in data.hotelData) {
                                if (key === 'images') {
                                    for (let i = 0; i < data.hotelData.images.length; i++) {
                                        formHotelData.append(`images[${i}]image`, data.hotelData.images[i])
                                    }
                                } else if (['breakfast_type'].includes(key)) {
                                    for (let i = 0; i < data.hotelData[key].length; i++) {
                                        formHotelData.append(`${key}[${i}]`, data.hotelData[key][i])
                                    }
                                } else {
                                    formHotelData.append(key, data.hotelData[key])
                                }
                            }

                            const hotelRes = await $authApi.post('/api/housing/housing/', formHotelData)
                            const hotelId = hotelRes.data.id

                            for (let y = 0; y < data.roomData.length; y++){
                                const formRoomData = new FormData()
                                for (const key in data.roomData[y]) {
                                    if (key === 'images') {
                                        for (let i = 0; i < data.roomData[y].images.length; i++) {
                                            formRoomData.append(`images[${i}]image`, data.roomData[y].images[i])
                                        }
                                    } else if (['room_amenities', 'kitchen', 'outside', 'bathroom'].includes(key)) {
                                        for (let i = 0; i < data.roomData[y][key].length; i++) {
                                            formRoomData.append(`${key}`, data.roomData[y][key][i])
                                        }
                                    } else {
                                        formRoomData.append(key, data.roomData[y][key])
                                    }
                                }
                                formRoomData.append('housing', hotelId)
                                try {
                                    await $authApi.post('/api/housing/rooms/', formRoomData)
                                } catch (e) {
                                }
                            }
                        }
                        req()
                        navigate('/')
                    }}
            >Продолжить</Button>
        </div>);
}

export default BusinessOwnerNotification;