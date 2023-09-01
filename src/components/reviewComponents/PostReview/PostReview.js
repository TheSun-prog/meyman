import close from '../../../assets/images/close.svg'
import Button from "../../ui/Button/Button";
import {useState} from "react";


function PostReview() {

    const [textLen, setTextLen] = useState(0)

    return (<div className="flex justify-center">
        <div className="fixed top-0 left-0 z-40 w-[100vw] h-[100vh] bg-black bg-opacity-40"

        >

        </div>
        <div
            className="fixed bg-white w-[620px] h-[612px] z-50 rounded-[45px] overflow-hidden flex flex-col mt-[-20px]">

            <div className="flex px-[50px] justify-between h-[80px] items-center border-b-[1px] border-grey">
                <img src={close} alt="close"/>
                <p>Отзыв о сайте</p>
                <span></span>
            </div>

            <div className="flex flex-col gap-[20px] px-[50px] pt-[20px]">
                <p>Пожалуйста, оставьте ваш комментарий:</p>
                <textarea name="reviewWebsite" id="review" cols="100" rows="5"
                          maxLength={500} placeholder="Напишите ваш комментарий"
                          className="w-[520px] h-[300px] px-[25px] py-[15px] rounded-[35px] border-[1px] border-grey outline-none resize-none overflow-auto"
                          onChange={event => {
                              setTextLen(event.target.value.length)
                          }}
                >

                </textarea>
                <p>Символов: {textLen} из 500</p>
            </div>

            <div className="flex justify-center pt-[30px]">
                <Button width={520} height={53} text={"Отправить"}/>
            </div>
        </div>
    </div>);
}

export default PostReview;