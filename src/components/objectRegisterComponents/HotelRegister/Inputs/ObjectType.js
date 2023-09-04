import hotelIcon from '../../../../assets/images/hotel-reg-icon.svg'
import homeIcon from '../../../../assets/images/home-reg-icon.svg'
import apartIcon from '../../../../assets/images/apart-reg-icon.svg'
import {useState} from "react";


const ObjectType = () => {

    const activeCardStyle = 'border-none shadow-bigBtn'

    const [type, setType] = useState('')

    const handleType = (value) => {
        setType(value)
    }

    return (

            <div className="flex flex-col gap-[40px]">
                <p className="text-[30px]">Информация об объекте размещения</p>

                <p className="text-[22px]">Выберите,на какой из представленных категорий <br/>подходит ваш объект</p>

                <div
                    className={`w-[587px] h-[180px] py-[18px] px-[20px] rounded-[18px] border-[1px] border-dark-grey cursor-pointer ${type === 'hotel' && activeCardStyle}`}
                    onClick={() => handleType('hotel')}
                >
                    <img className="w-[30px] h-[30px]" src={hotelIcon} alt="hotel"/>
                    <p className="pt-[25px]">Отели</p>
                    <p className="pt-[12px] text-grey">Это недвижимость, с готовыми номерами <br/>и наборами услуг</p>
                </div>

                <div
                    className={`w-[587px] h-[180px] py-[18px] px-[20px] rounded-[18px] border-[1px] border-dark-grey cursor-pointer ${type === 'home' && activeCardStyle}`}
                    onClick={() => handleType('home')}
                >
                    <img className="w-[30px] h-[30px]" src={homeIcon} alt="hotel"/>
                    <p className="pt-[25px]">Дома</p>
                    <p className="pt-[12px] text-grey">Этот объект относится к недвижимости, такой как дома для <br/>отдыха
                        и аналогичные варианты размещения</p>
                </div>

                <div
                    className={`w-[587px] h-[180px] py-[18px] px-[20px] rounded-[18px] border-[1px] border-dark-grey cursor-pointer ${type === 'apartment' && activeCardStyle}`}
                    onClick={() => handleType('apartment')}
                >
                    <img className="w-[30px] h-[30px]" src={apartIcon} alt="hotel"/>
                    <p className="pt-[25px]">Квартиры</p>
                    <p className="pt-[12px] text-grey">Этот объект представляет собой апартаменты, находящиеся <br/>в
                        многоэтажных зданиях</p>
                </div>


            </div>
    )
}

export default ObjectType