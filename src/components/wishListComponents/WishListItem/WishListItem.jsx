import React, { useEffect, useState } from 'react';
import classes from './WishListItem.module.sass';
import clear from '../../../assets/images/clear_wish_list.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setError } from '../../../store/slice/wishListSlice';
import { $mainApi } from '../../../axios/axios';
import ModalDeleteWishlist from '../modals/ModalDeleteWishlist';

function WishListItem({ wishList }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [img, setImg] = useState('');

  const [modalDeleteActive, setModalDeleteActive] = useState(false);

  const clickHandler = () => {
    navigate(`/favorites/${wishList.id}/`);
  };

  const housingId = wishList.houseFavorite[0]?.housing;

  const getHousingImg = (housingId) => {
    return async (dispatch) => {
      try {
        const { data } = await $mainApi.get(`/api/housing/housing/${housingId}`);
        setImg(`${process.env.REACT_APP_API_URL}${data.housing_image}`);
      } catch (e) {
        dispatch(setError(e));
      }
    };
  };

  useEffect(() => {
    dispatch(getHousingImg(housingId));
  }, [housingId]);

  return (
    <div className={classes.wishListItem}>
      <img
        src={clear}
        alt='delete_img'
        onClick={() => {
          setModalDeleteActive(true);
        }}
        className={classes.wishListItem_delete}
      />
      <div className={classes.wishListItem_box} onClick={clickHandler}>
        <div className={classes.wishListItem_box_img}>
          <img src={img} alt='img' />
        </div>
        <div className={classes.wishListItem_box_desciption}>
          <p className={classes.title}>{wishList.title}</p>
          <p className={classes.favorite_count}>Сохраненные объекты: {wishList.favorite_count}</p>
        </div>
      </div>
      <ModalDeleteWishlist
        active={modalDeleteActive}
        setActive={setModalDeleteActive}
        title={wishList.title}
        id={wishList.id}
      />
    </div>
  );
}

export default WishListItem;
