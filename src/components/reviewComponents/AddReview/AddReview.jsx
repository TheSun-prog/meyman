import React, {useState} from 'react'
import {Modal} from "antd";
import close from '../../../assets/images/close.svg'
import Button from "../../ui/Button/Button";


export default function AddReview({modalShow = true, setModalShow}) {

    const [lenght, setLenght] = useState(0)

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
            <div className="flex justify-between items-center">
                <img className="w-[32px] h-[32px]" src={close} alt="close" onClick={() => setModalShow(false)}/>
                <p className="text-[24px]">Отзыв о сайте</p>
                <span></span>
            </div>
            <div className="pt-[20px] flex flex-col gap-[20px]">
                <p className="text-[22px]">Пожалуйста, оставьте ваш комментарий:</p>
                <textarea
                    name="review" id="" cols="23" rows="50" placeholder="Напишите ваш комментарий"
                    maxLength={500}
                    className="w-[520px] h-[234px] px-[25px] py-[14px] rounded-[34px] border-grey border-[1px] resize-none text-[16px]"
                    onChange={event => setLenght(event.target.value.length)}
                ></textarea>
                <p className="text-[16px] text-grey">Символов: {lenght} из 500</p>
                <Button
                    width={520}
                    height={53}
                    text={'Отправить'}
                />
            </div>
        </div>
    </Modal>)
}