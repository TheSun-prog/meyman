import Input from "../../../ui/Input/Input";
import star from '../../../../assets/images/star.svg'
import radioOn from '../../../../assets/images/radio-on.svg'
import radioOff from '../../../../assets/images/radio-off.svg'
import {useState} from "react";

const ObjectInfo = () => {

    const [stars, setStars] = useState(5)


    return (
        <div className="flex flex-col gap-[40px] pt-[100px]">
            <p className="text-[22px]">Расскажите о вашем объекте размещения</p>
            <div className="flex flex-col gap-[13px]">
                <p>Название вашего объекта</p>

                <Input
                    type={'text'}
                    text={"Введите название вашего объекта"}
                />

                <p className="text-grey">Это название будут видеть гости,при поиске варианта проживания</p>
            </div>
            <div className="flex flex-col gap-[20px]">
                <p>Укажите количество звезд у отеля</p>
                <div className="flex flex-col gap-[14px]">
                    <div
                        className="flex gap-[10px] cursor-pointer"
                        onClick={() => setStars(5)}
                    >
                        <img src={stars === 5 ? radioOn : radioOff} alt="radio"/>
                        <div className="flex gap-[13px]">
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                        </div>
                    </div>
                    <div
                        className="flex gap-[10px] cursor-pointer"
                        onClick={() => setStars(4)}
                    >
                        <img src={stars === 4 ? radioOn : radioOff} alt="radio"/>
                        <div className="flex gap-[13px]">
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                        </div>
                    </div>
                    <div
                        className="flex gap-[10px] cursor-pointer"
                        onClick={() => setStars(3)}
                    >
                        <img src={stars === 3 ? radioOn : radioOff} alt="radio"/>
                        <div className="flex gap-[13px]">
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                        </div>
                    </div>
                    <div
                        className="flex gap-[10px] cursor-pointer"
                        onClick={() => setStars(2)}
                    >
                        <img src={stars === 2 ? radioOn : radioOff} alt="radio"/>
                        <div className="flex gap-[13px]">
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                        </div>
                    </div>
                    <div
                        className="flex gap-[10px] cursor-pointer"
                        onClick={() => setStars(1)}
                    >
                        <img src={stars === 1 ? radioOn : radioOff} alt="radio"/>
                        <div className="flex gap-[13px]">
                            <img src={star} alt="star" className="w-[24px] h-[24px]"/>
                        </div>
                    </div>
                    <div
                        className="flex gap-[10px] cursor-pointer"
                        onClick={() => setStars(0)}
                    >
                        <img src={stars === 0 ? radioOn : radioOff} alt="radio"/>
                        <p>Без звезд</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ObjectInfo