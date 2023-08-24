// React modules
// images
import heartOn from '../../../assets/images/heart-on.svg'
import heartOff from '../../../assets/images/heart-off.svg'
import star from '../../../assets/images/star.svg'
import som from '../../../assets/images/som.svg'
import done from '../../../assets/images/done.svg'
import location from '../../../assets/images/location.svg'
import hotelImage from '../../../assets/images/hotel-image.png'
import {useState} from "react";
import {NavLink} from "react-router-dom";


const HotelCard = ({data}) => {

    const hotelName = 'Novotel'
    const hotelStar = '5'
    const hotelRating = '10'
    const hotelLocation = '2,1 км от центра'
    const hotelPrice = '3000'

    const [isFavorite, setIsFavorite] = useState(false)

    const handleIsFavorite = () => {
        setIsFavorite(prevState => !prevState)
    }


    return (

            <div className="w-[350px] h-[540px] flex flex-col gap-[10px] relative">

                <NavLink to="/hotelcatalog/hotel">

                <div
                    className="bg-cover bg-center bg-no-repeat w-[350px] h-[350px] rounded-[30px]"
                    style={
                        {
                            backgroundImage: `url("${hotelImage}")`,
                        }
                    }
                >
                    <img
                        src={isFavorite ? heartOn : heartOff} alt="heart"
                        className="absolute top-[20px] right-[20px] cursor-pointer"
                        onClick={handleIsFavorite}
                    />
                    <div
                        className="absolute top-[40px] w-[195px] h-[38px] bg-green rounded-r-full flex items-center pl-[10px]">
                        <p className="text-white text-[21px]">Завтрак включен</p>
                    </div>

                </div>
                <div className="flex flex-col gap-[10px] pt-[10px]">
                    <div className="flex gap-[5px] items-center h-[30px]">
                        <h3 className="font-[600] text-[22px]">{hotelName}</h3>
                        <p className="font-[500] text-[20px]">{hotelStar}</p>
                        <img className="w-[18px] h-[18px]" src={star} alt="star"/>
                    </div>
                    <div className="flex h-[28px] gap-[5px] items-center">
                        <p className="px-[6px] py-[11px] bg-yellow rounded-[20px] text-white text-[16px] h-[18px] flex items-center">{hotelRating}</p>
                        <p>Замечательно</p>
                    </div>
                    <div className="flex gap-[5px] h-[25px] items-center">
                        <img src={location} alt="location"/>
                        <p className="text-grey text-[18px]">{hotelLocation}</p>
                    </div>
                    <div className="flex gap-[10px] h-[24px] items-center">
                        <img src={done} alt="done"/>
                        <p className="text-green text-[18px]">Бесплатная отмена</p>
                    </div>
                    <div className="flex items-center h-[34px]">
                        <p className="text-[24px] font-[400]">от {hotelPrice}</p>
                        <img
                            src={som} alt="som"
                            className="w-[18px] h-[18px]"
                        />
                    </div>
                </div>
                </NavLink>
            </div>



    )
}

export default HotelCard