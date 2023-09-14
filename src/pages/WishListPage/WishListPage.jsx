import React, {useEffect} from 'react';
import classes from "./wishListPage.module.sass";
import {Link, NavLink, useParams} from "react-router-dom";
import arrow from "../../assets/images/arrow2.svg";
import {useDispatch, useSelector} from "react-redux";
import {getOneWishList} from "../../store/slice/wishListSlice";
import HotelCardWishlist from "../../components/hotelComponents/HotelCardWishlist/HotelCardWishlist";


function WishListPage() {
    const dispatch = useDispatch()
    const { id} = useParams()

    const {oneWishList} = useSelector(state => state.wishList)

    useEffect(() => {
        dispatch(getOneWishList(id))
    }, [dispatch, id])

    return (
        <div className="mx-auto w-[1240px]">
            <div className="flex items-center mb-[50px] mt-[45px]">
                <Link to={'/'}>Главная</Link>
                <img className="-rotate-90 h-4" src={arrow} alt="arrow"/>
                <Link to={`/favorites/`}>Избранное</Link>
                <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
                <NavLink to={`/favorites/${id}/`}>{oneWishList.title}</NavLink>
            </div>
            <div className={classes.wishList}>
                <p className={classes.wishList_title}>{oneWishList.title}</p>
                <div className={classes.wishList_wrapper}>
                    {
                        oneWishList.houseFavorite?.map((house)  => <HotelCardWishlist key={house.id} data={house} id={house.housing} wishlist_id={id}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default WishListPage;