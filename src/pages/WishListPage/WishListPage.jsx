import React, {useEffect} from 'react';
import classes from "./wishListPage.module.sass";
import {Link, NavLink, useParams} from "react-router-dom";
import arrow from "../../assets/images/arrow2.svg";
import {useDispatch, useSelector} from "react-redux";
import {getWishList} from "../../store/slice/wishListSlice";


function WishListPage() {
    const dispatch = useDispatch()
    const { id} = useParams()

    const {oneWishList} = useSelector(state => state.wishList)

    console.log(oneWishList)

    useEffect(() => {
        dispatch(getWishList(id))
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
                <p className={classes.wishList_title}>Избранное</p>
                {
                    oneWishList.houseFavorite?.map(house  => <p key={house.id}>{house.housing}</p>)

                }

            </div>
        </div>
    );
}

export default WishListPage;