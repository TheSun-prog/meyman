import React from 'react';
import infoLogo from '../../assets/images/infoGreen.svg'
import privileges from '../../assets/images/Privilegii_1.svg'
import privileges2 from '../../assets/images/Privilegii_2.svg'
import privileges3 from '../../assets/images/Privilegii_3.svg'
import Button from "../../components/ui/Button/Button";
import {Link} from "react-router-dom";


function BusinessOwnerNotification(props) {

    const privilegesData = [
        {
            text: 'Управлять объектом размещения из своего аккаунта ',
            img: privileges
        },
        {
            text: 'Зарабатывать на бронированиях от пользователей нашего сайта',
            img: privileges2
        },
        {
            text: 'Отслеживать бронирования со всех сайтов,с которыми вы работаете\n'+
                'благодаря синхронизации календарей',
            img: privileges3
        }
    ]
    return (

        <div className="mx-auto w-[1240px]">
            <h1 className='font-quicksand text-xl font-normal mt-[40px] mb-[40px]'>
                Отлично! Теперь все готово для начала приема первых гостей. Принимайте их с <br/> удовольствием!
            </h1>
            <div className="flex items-center mb-[80px]">
                <img src={infoLogo} alt="infoLogo"/>
                <p className="text-base font-normal leading-relaxed ml-[20px] text-[#A1A1A1]">С учетом налогов, комиссии и
                    Наши модераторы проверят регистрацию вашего<br/>
                    объекта и разместят объявление в течении 2 недель.<br/>
                    Вас уведомят о регистрации вашего объекта через вашу почту
                </p>
            </div>
            <h1 className='font-quicksand text-xl font-normal mb-[40px]'>
                Теперь вы сможете:
            </h1>
            {
                privilegesData.map((privilegeData) => (
                    <div className="flex items-center mb-[40px]">
                        <img src={privilegeData.img} alt="Logo"/>
                        <p className="text-base font-normal leading-relaxed ml-[20px] max-w-[622px]">
                            {privilegeData.text}
                        </p>
                    </div>
                ))
            }
            <Button classes={'py-[20px] mt-[80px] w-[312px] h-[53px] hover:bg-[#1178B4]'}>Продолжить</Button>
        </div>
    );
}

export default BusinessOwnerNotification;