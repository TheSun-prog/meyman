// images
import heartOn from "../../../assets/images/heart-on.svg";
import heartOff from "../../../assets/images/heart-off.svg";
import star from "../../../assets/images/star.svg";
import som from "../../../assets/images/som.svg";
import done from "../../../assets/images/done.svg";
import location from "../../../assets/images/location.svg";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteFavorite, getFavorites, getOneWishList, getUserWishList} from "../../../store/slice/wishListSlice";

const HotelCardWishlist = ({data, id, wishlist_id}) => {
    const dispatch = useDispatch()
    const hotelPrice = isNaN(parseInt(data?.cheapest_room_price)) ? 0 : parseInt(data?.cheapest_room_price)
    const {favorites} = useSelector(state => state.wishList)
    const {oneWishList} = useSelector(state => state.wishList)
    console.log('favorites', favorites)
    console.log('data', oneWishList.favorite_count)
    if (oneWishList.favorite_count === 0) alert('asdfasdfasdf')
    const {userType} = useSelector(state => state.authSlice)
    const navigate = useNavigate()
    const clickNavigate = () => {
        navigate(`/hotelcatalog/${id}`)
    }

    const findFavoriteIdByHousing = (data, housing) => {
        const foundItem = data.find(item => item.housing === housing);
        return foundItem ? foundItem.id : null;
    };

    const isFavorite = favorites.some(item => item.housing === id)

    console.log('isFavorite', isFavorite)

    const favoriteId = findFavoriteIdByHousing(favorites, id)

    const handleIsFavorite = () => {
        if (isFavorite) {
            dispatch(deleteFavorite(favoriteId))
            dispatch(getFavorites())
            dispatch(getOneWishList(wishlist_id))
        }
        dispatch(getFavorites())
        dispatch(getOneWishList(wishlist_id))
    }

    useEffect(() => {
        if (userType === 'client') {
                dispatch(getUserWishList());
                dispatch(getFavorites())
                dispatch(getOneWishList(wishlist_id))
        }
    }, [dispatch, userType]);


    return (
        <div
            className="w-[350px] h-[540px] flex flex-col gap-[10px] relative "
            onClick={clickNavigate}
        >
            <div
                className="bg-cover bg-center bg-no-repeat w-[350px] h-[350px] rounded-[30px]"
                style={{
                    backgroundImage: `url(${process.env.REACT_APP_API_URL}${data.housing_image[0]})`,
                }}
            >
                <img
                    src={isFavorite ? heartOn : heartOff}
                    alt="heart"
                    className="absolute top-[20px] right-[20px] cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation()
                        handleIsFavorite()
                    }}
                />
                <div
                    className="absolute top-[40px] w-[195px] h-[38px] bg-green rounded-r-full flex items-center pl-[10px]">
                    <p className="text-white text-[21px]">Завтрак включен</p>
                </div>
            </div>
            <div className="flex flex-col gap-[10px] pt-[10px]">
                <div className="flex gap-[5px] items-center h-[30px]">
                    <h3 className="font-[500] text-[22px]">{data.housing_name}</h3>
                    <p className="font-[500] text-[20px]">{data.stars}</p>
                    <img className="w-[18px] h-[18px]" src={star} alt="star"/>
                </div>
                <div className="flex h-[28px] gap-[5px] items-center">
                    <p className="px-[6px] py-[11px] bg-yellow rounded-[20px] text-white text-[16px] h-[18px] flex items-center">
                        {data.average_rating}
                    </p>
                    <p>Замечательно</p>
                </div>
                <div className="flex gap-[5px] h-[25px] items-center">
                    <img src={location} alt="location"/>
                    <p className="text-grey text-[15px]">{data.address}</p>
                </div>
                <div className="flex gap-[10px] h-[24px] items-center">
                    <img src={done} alt="done"/>
                    <p className="text-green text-[18px]">Бесплатная отмена</p>
                </div>
                <div className="flex items-center h-[34px]">
                    <p className="text-[24px] font-[400]">от {hotelPrice}</p>
                    <img src={som} alt="som" className="w-[18px] h-[18px]"/>
                </div>
            </div>
        </div>
    );
};

export default HotelCardWishlist;
