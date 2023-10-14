import React, { useEffect } from 'react';
import classes from './wishListPage.module.sass';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import arrow from '../../assets/images/arrow2.svg';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWishList, getOneWishList } from '../../store/slice/wishListSlice';
import HotelCardWishlist from '../../components/hotelComponents/HotelCardWishlist/HotelCardWishlist';
import { message } from 'antd';

function WishListPage() {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Отель успешно удален из избранного',
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { oneWishList } = useSelector((state) => state.wishList);
  const count = oneWishList.favorite_count;

  if (count === 0) {
    dispatch(deleteWishList(id))
    setTimeout(() => {
      navigate(`/favorites/`)
    }, 3000)
}

useEffect(() => {
    dispatch(getOneWishList(id))
}, [dispatch, id])


  return (
    <div className='mx-auto w-[1240px]'>
      {contextHolder}
      <div className='flex items-center mb-[50px] mt-[45px]'>
        <Link to={'/'}>Главная</Link>
        <img className='-rotate-90 h-4' src={arrow} alt='arrow' />
        <Link to={`/favorites/`}>Избранное</Link>
        <img className='-rotate-90 h-4' src={arrow} alt='arrow' />
        <NavLink to={`/favorites/${id}/`}>{oneWishList.title}</NavLink>
      </div>
      <div className={classes.wishList}>
        <p className={classes.wishList_title}>{oneWishList.title}</p>
        <div className={classes.wishList_wrapper}>
          {oneWishList.houseFavorite?.map((house) => (
            <HotelCardWishlist key={house.id} message={success} data={house} id={house.housing} wishlist_id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WishListPage;
