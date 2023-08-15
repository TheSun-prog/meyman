import Heart from "react-heart"
import {useState} from "react";
import favorite from '../../../assets/images/favorite.svg'
import arrowRight from '../../../assets/images/arrow-right.svg'
import star from '../../../assets/images/star.svg'
import location from '../../../assets/images/location.svg'
import done from '../../../assets/images/done.svg'


const HotelCard = ({name, onHeartClick, heartActiveted}) => {

    const [active, setActive] = useState(false)

    const handleHeartClick = () => {
        onHeartClick()
        setActive(!active)
    }

    return (
        <div className="w-[400px] h-[591px] flex flex-col gap-[10px]">
            <div className="relative bg-hotel-card w-[400px] h-[400px] rounded-[30px]">
                <img src={favorite} alt="favorite"/>
                <img src={arrowRight} alt="arrow-right"/>
                <div className="">
                    <p>Завтрак включен</p>
                </div>
            </div>
            <div className="flex">
                <div className="">
                    <h3>Novotel</h3>
                    <p>5</p>
                    <img src={star} alt="star"/>
                </div>
                <div className="">
                    <p>10</p>
                    <p>Замечательно</p>
                </div>
                <div className="">
                    <img src={location} alt="location"/>
                    <p>2,1 км от центра</p>
                </div>
                <div className="">
                    <img src={done} alt="done"/>
                    <p>Бесплатная отмена</p>
                </div>
                <div className="">
                    <p>от 3000</p>

                </div>
            </div>
        </div>
    )
}

export default HotelCard