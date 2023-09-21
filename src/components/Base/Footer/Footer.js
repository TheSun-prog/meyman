import googlePlay from '../../../assets/images/google-play.svg'

import {NavLink} from "react-router-dom";


const Footer = ({}) => {


    return (<div className="border-t-[1px] border-t-grey mt-[100px]">

        <div className="mx-auto w-[1240px]">
            <div className="min-h-[386px] pt-[70px] pb-[30px] flex justify-between relative">
                <div className="flex flex-col gap-[30px]">
                    <p className='text-[22px]'>Компания</p>
                    <div className="flex flex-col gap-[20px]">
                        <NavLink to={'/about'}>
                            <p>О нас</p>
                        </NavLink>
                        <NavLink to={'/support'}>Служба поддержки</NavLink>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] text-[22px]">
                    <p>Партнёрам</p>
                    <div className="flex flex-col gap-[20px] text-[18px]">
                        <NavLink to={'/businessMainPage'}><p>Подключить отель</p></NavLink>
                        <p>Подключить транспорт</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[37px] text-[22px]">
                    <p>Приложение Meyman</p>
                    <img src={googlePlay} alt="download"/>
                </div>
                <p className="absolute left-0 bottom-[30px]">© 2023 Meyman</p>
            </div>
        </div>
    </div>)
}

export default Footer