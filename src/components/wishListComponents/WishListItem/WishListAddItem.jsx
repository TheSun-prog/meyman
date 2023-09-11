import React, {useEffect, useState} from 'react'
import classes from "./WishListAddItem.module.sass"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setError} from "../../../store/slice/wishListSlice";
import {$mainApi} from "../../../axios/axios";


function WishListAddItem({wishList}) {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [img, setImg] = useState('')

    const clickHandler = () => {
        navigate(`/favorites/${wishList.id}/`)
    }

    const housingId = wishList.houseFavorite[0]?.housing

    const getHousingImg = (housingId) => {
        return async (dispatch) => {
            try {
                const {data} = await $mainApi.get(`housing/${housingId}`)
                setImg(`${process.env.REACT_APP_API_URL}${data.housing_image}`)
            } catch (e) {
                dispatch(setError(e))
            }
        }
    }

    useEffect(() => {
        dispatch(getHousingImg(housingId))
    },[housingId])

    return (
        <div className={classes.wishListItem}>
            <div className={classes.wishListItem_box} onClick={clickHandler}>
                <div className={classes.wishListItem_box_img}>
                    <img src={img} alt="img"/>
                </div>
                <div className={classes.wishListItem_box_desciption}>
                    <p className={classes.title}>{wishList.title}</p>
                    <p className={classes.favorite_count}>Сохраненные объекты: {wishList.favorite_count}</p>
                </div>
            </div>
        </div>
    );
}

export default WishListAddItem;