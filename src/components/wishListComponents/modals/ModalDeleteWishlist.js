import React from 'react';
import classes from "./modalDeleteWishlist.module.sass";
import close from "../../../assets/images/clear18.svg"
import {deleteWishList} from "../../../store/slice/wishListSlice";
import {useDispatch} from "react-redux";

function ModalDeleteWishlist({active, setActive, title, id}) {
    const dispatch = useDispatch()

    const clickDeleteWishlist = () => {
        dispatch(deleteWishList(id))
        setActive(false)
    }

    return (
        <div className={active ? `${classes.modal} ${classes.active}` : `${classes.modal}`}
             onClick={() => setActive(false)}>
            <div className={active ? `${classes.modal__content} ${classes.active}` : `${classes.modal__content}`}
                 onClick={e => e.stopPropagation()}>
                <img src={close} alt="close" onClick={() => {
                    setActive(false)
                }}
                     className={classes.clear}
                />
                <div className={classes.delete_box}>
                    <p className={classes.delete_box_title}>
                        Удалить вишлист?
                    </p>
                    <p className={classes.delete_box_description}>
                        {`Вишлист “${title}” будет удален без возможности восстановления`}
                    </p>
                </div>
                <div className={classes.btn_box}>
                    <button className={classes.btn} onClick={clickDeleteWishlist}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalDeleteWishlist;