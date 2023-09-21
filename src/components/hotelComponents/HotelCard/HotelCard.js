// images
import heartOn from "../../../assets/images/heart-on.svg";
import heartOff from "../../../assets/images/heart-off.svg";
import star from "../../../assets/images/star.svg";
import som from "../../../assets/images/som.svg";
import eur from "../../../assets/images/euro.svg"
import usd from "../../../assets/images/usd.svg"
import done from "../../../assets/images/done.svg";
import location from "../../../assets/images/location.svg";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ModalAddWishlist from "../../wishListComponents/modals/ModalAddWishlist";
import {useDispatch, useSelector} from "react-redux";
import {deleteFavorite, getFavorites, getUserWishList} from "../../../store/slice/wishListSlice";
import {$authApi} from "../../../axios/axios";

const HotelCard = ({data, id, imageUrl}) => {


    const currencys = {
        KGS: som,
        EUR: eur,
        USD: usd
    }

    const dispatch = useDispatch()
    const firstRoomsPrice = parseInt(data?.cheapest_room_price)
    const {wishLists} = useSelector(state => state.wishList)
    const {favorites} = useSelector(state => state.wishList)
    const currency = useSelector(state => state.currency)
    const localStorageCurrency = localStorage.getItem('currency')

    const [hotelPrice, setHotelPrice] = useState(
        firstRoomsPrice ? firstRoomsPrice : 0
    );

    const [modalAddActive, setModalAddActive] = useState(false)
    const {userType} = useSelector(state => state.authSlice)

    const wishListIsEmpty = wishLists.length === 0 ? true : false

    const navigate = useNavigate()

    const clickNavigate = () => {
        navigate(`/hotelcatalog/${id}`)
    }

    const findFavoriteIdByHousing = (data, housing) => {
        const foundItem = data.find(item => item.housing === housing);
        return foundItem ? foundItem.id : null;
    };

    const isFavorite = favorites.some(item => item.housing === id)

    const favoriteId = findFavoriteIdByHousing(favorites, id)

    const handleIsFavorite = () => {
        if (userType !== 'client') {
            $authApi.put('/api/users/update_user_type/', {user_type: 'client'})
        }
        if (!isFavorite) {
            setModalAddActive(true)
        } else {
            dispatch(deleteFavorite(favoriteId))
        }
    };

    useEffect(() => {
        if (userType === 'client') {
            if (wishListIsEmpty) {
                dispatch(getUserWishList());
                dispatch(getFavorites())
            }
        }
    }, [wishListIsEmpty, dispatch, userType]);

    return (
        <div
            className="w-[350px] h-[540px] flex flex-col gap-[10px] relative "
            key={data.id}
            onClick={clickNavigate}
        >
            <div
                className="bg-cover bg-center bg-no-repeat w-[350px] h-[350px] rounded-[30px]"
                style={{
                    backgroundImage: `url(${imageUrl ? imageUrl : data?.housing_images[0].image.replace("http://", "https://")})`,
                }}
            >
                {userType && (<img
                    src={isFavorite ? heartOn : heartOff}
                    alt="heart"
                    className="absolute top-[20px] right-[20px] cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation()
                        handleIsFavorite()
                    }}
                />)}
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
                        {data.average_rating ? data.average_rating : '10'}
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
                    <p className="text-[24px] font-[400]">от {data.cheapest_room_price ? data.cheapest_room_price : 'НЕТ ЦЕНЫ'}</p>
                    <img src={currency === 'KGS' ? som : currency === 'USD' ? usd : currency === 'EUR' ? eur : currencys[localStorageCurrency]} alt="som" className="w-[18px] h-[18px]"/>
                </div>
            </div>
            <ModalAddWishlist active={modalAddActive} setActive={setModalAddActive} id={data.id}/>
        </div>
    );
};

export default HotelCard;
