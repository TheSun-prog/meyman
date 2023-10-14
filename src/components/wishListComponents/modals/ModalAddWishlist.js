import React, { useEffect, useState } from 'react';
import classes from './modalAddWishlist.module.sass';
import close from '../../../assets/images/clear18.svg';
import { addNewWishList, getUserWishList } from '../../../store/slice/wishListSlice';
import { useDispatch, useSelector } from 'react-redux';
import WishListAddItem from '../WishListItem/WishListAddItem';

function ModalAddWishlist({ active, setActive, id }) {
  const dispatch = useDispatch();
  const { wishLists } = useSelector((state) => state.wishList);

  const wishListIsEmpty = wishLists.length === 0 ? true : false;

  const [addWishlist, setAddWishlist] = useState(true);

  const [name, setName] = useState('');

  const { userType } = useSelector((state) => state.authSlice);

  const clickAddNewWishlist = () => {
    dispatch(addNewWishList(name, id));
    dispatch(getUserWishList());
    setActive(false);
    setAddWishlist(true);
    setName('');
  };
  const clickNewWishlist = () => {
    setAddWishlist(false);
  };

  useEffect(() => {
    if (active && userType === 'client') {
      if (wishListIsEmpty) {
        dispatch(getUserWishList());
      }
    }
  }, [active, wishListIsEmpty, dispatch, userType]);

  return (
    <div className={active ? `${classes.modal} ${classes.active}` : `${classes.modal}`}>
      <div
        className={
          active ? `${classes.modal__content} ${classes.active}` : `${classes.modal__content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.header}>
          <img
            src={close}
            alt='close'
            onClick={() => {
              setActive(false);
            }}
          />
          <p className={classes.header_title}>Добавить в вишлист</p>
        </div>
        {addWishlist && !wishListIsEmpty ? (
          <>
            <div className={classes.favorites_item}>
              {wishLists?.map((wishList) => (
                <WishListAddItem
                  key={wishList.id}
                  wishList={wishList}
                  id={id}
                  setActive={setActive}
                />
              ))}
            </div>
            <div className={classes.btn_box}>
              <button className={classes.btn} onClick={clickNewWishlist}>
                Добавить свой вишлист
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={classes.add_box}>
              <input
                className={classes.add_box_name}
                type='text'
                maxLength={40}
                placeholder='Текст'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className={classes.add_box_count}>{`Символов: ${name.length} из 40`}</p>
            </div>
            <div className={classes.btn_box}>
              <button className={classes.btn} onClick={clickAddNewWishlist}>
                Создать свой вишлист
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalAddWishlist;
