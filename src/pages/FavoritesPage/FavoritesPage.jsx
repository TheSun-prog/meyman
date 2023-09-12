import React, {useEffect} from 'react';
import classes from "./favoritesPage.module.sass";
import {Link} from "react-router-dom";
import arrow from "../../assets/images/arrow2.svg";
import {useDispatch, useSelector} from "react-redux";
import {getUserWishList} from "../../store/slice/wishListSlice";
import WishListItem from "../../components/wishListComponents/WishListItem/WishListItem";


function FavoritesPage() {
    const dispatch = useDispatch()
    const {wishLists} = useSelector(state => state.wishList)

    const wishListIsEmpty = wishLists.length !== 0 ? false : true

    useEffect(() => {
        dispatch(getUserWishList())
    }, [dispatch])

    return (
        <div className="mx-auto w-[1240px]">
            <div className="flex items-center mb-[50px] mt-[45px]">
                <Link to={'/'}>Главная</Link>
                <img className="-rotate-90 h-4" src={arrow} alt="arrow"/>
                <Link to={`/favorites/`}>Избранное</Link>
            </div>
            <div className={classes.favorites}>
                <p className={classes.favorites_title}>Избранное</p>
                {
                    wishListIsEmpty
                        ?
                        <>
                            <p className={classes.favorites_subtitle}>Создайте свой первый вишлист</p>
                            <p className={classes.favorites_description}>Нажмите на сердечко,чтобы добавить понравившейся
                                объект в ваши избранные.Тем самым,создавая для себя,ваш вишлист</p>
                        </>
                        :
                        <div className={classes.favorites_item}>
                            {wishLists?.map(wishList => <WishListItem key={wishList.id} wishList={wishList}/>)}
                        </div>
                }
            </div>
        </div>
    );
}

export default FavoritesPage;