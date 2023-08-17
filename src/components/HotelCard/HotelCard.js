import favorite from '../../assets/images/favorite.svg'
import star from '../../assets/images/star.svg'
import location from '../../assets/images/location.svg'
import done from '../../assets/images/done.svg'
import som from '../../assets/images/som.svg'


const HotelCard = ({data}) => {

    const hotelName = 'Novotel'
    const hotelStar = '5'
    const hotelRating = '5'
    const hotelLocation = '2,1 км от центра'
    const hotelPrice = `от ${"3000"}`

    return (
        <div className="w-[400px] h-[591px] flex flex-col gap-[10px]">
            <div className="relative bg-hotel-card bg-cover bg-center bg-no-repeat w-[400px] h-[400px] rounded-[30px]">
                <img
                    className="absolute top-[40px] right-[30px]"
                    src={favorite} alt="favorite"/>
                {/*<img*/}
                {/*    className="absolute"*/}
                {/*    src={arrowRight} alt="arrow-right"/>*/}
                <div className="absolute top-[48px] w-[229px] h-[46px] bg-hotel-option rounded-hotel-option flex items-center pl-[10px]">
                    <p className="text-white text-[25px]">Завтрак включен</p>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[5px] items-center h-[30px]">
                    <h3 className="font-[600] text-[24px]">{hotelName}</h3>
                    <p className="font-[500] text-[21px]">{hotelStar}</p>
                    <img className="w-[26px] h-[26px] self-start" src={star} alt="star"/>
                </div>
                <div className="flex h-[28px] gap-[5px] items-center">
                    <p className="px-[10px] bg-yellow rounded-[20px] text-white text-[22px] h-[28px] flex items-center font-[500]">{hotelRating}</p>
                    <p>Замечательно</p>
                </div>
                <div className="flex gap-[5px] h-[25px] items-center">
                    <img src={location} alt="location"/>
                    <p className="text-grey text-[20px]">{hotelLocation}</p>
                </div>
                <div className="flex gap-[10px] h-[24px] items-center">
                    <img src={done} alt="done"/>
                    <p className="text-green text-[16px]">Бесплатная отмена</p>
                </div>
                <div className="flex items-center h-[34px]">
                    <p className="text-[24px] font-[500]">{hotelPrice}</p>
                    <img src={som} alt="som"/>
                </div>
            </div>
        </div>
    )
}

export default HotelCard