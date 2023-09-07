import React, {useState} from 'react'
import {Modal} from "antd";
import Button from "../../ui/Button/Button";
import {fetchReviewData, postReviewData} from "../../../store/slice/reviewSlice";
import {useDispatch} from "react-redux";


export default function AddReview({modalShow, setModalShow}) {

    const dispatch = useDispatch()

    const [lenght, setLenght] = useState(0)
    const [content, setContent] = useState('')

    const handleClick = async () => {
        const formData = new FormData()
        await formData.append("content", content)
        dispatch(fetchReviewData({limit: 7, offset: 0}))
        dispatch(postReviewData(formData))
        setModalShow(false)
        setContent('')
    }

    return (<Modal
        open={modalShow}
        onOk={setModalShow}
        onCancel={setModalShow}
        footer={null}
        closeIcon={false}
        bodyStyle={{padding: '20px 50px', borderRadius: '30px'}}
        width={620}
        height={612}
    >
        <div className="">
            <div className="flex justify-center items-center">
                <p className="text-[24px]">Отзыв о сайте</p>
            </div>
            <div className="pt-[20px] flex flex-col gap-[20px]">
                <p className="text-[22px]">Пожалуйста, оставьте ваш комментарий:</p>
                <textarea
                    name="review" id="" cols="23" rows="50" placeholder="Напишите ваш комментарий"
                    maxLength={500}
                    className="w-[520px] h-[234px] px-[25px] py-[14px] rounded-[34px] border-grey border-[1px] resize-none text-[16px]"
                    onChange={event => {
                        setLenght(event.target.value.length)
                        setContent(event.target.value)
                    }}
                ></textarea>
                <p className="text-[16px] text-grey">Символов: {lenght} из 500</p>
                <Button
                    width={520}
                    height={53}
                    text={'Отправить'}
                    clickFunc={handleClick}
                />
            </div>
        </div>
    </Modal>)
}