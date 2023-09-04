import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setModalReview} from "../../../store/slice/reviewSlice";

export default function AddReview() {
    const {reviewModal} = useSelector(state => state.reviewSlice)
    const dispatch = useDispatch()

    console.log(reviewModal)

    return (
        <>
            <div
                className="fixed w-full h-full bg-darkgra"
                onClick={() => dispatch(setModalReview())}
            >
                <div className="flex items-start gap-[144px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate eaque eligendi et ex hic,
                    illo, impedit inventore laborum molestiae nihil perferendis qui ratione rerum soluta velit veniam
                    veritatis, voluptate?
                </div>
            </div>

        </>
    )
}