import {useState} from "react";
import Input from "../../../ui/Input/Input";


const ObjectLocation = () => {

    const [isShow, setIsShow] = useState(false)
    const [regionValue, setRegionValue] = useState("")

    return (
            <div className="flex flex-col gap-[40px] pt-[100px]">


                <p className="text-[22px]">Где находится ваш объект?</p>

                <div className="relative w-[520px]">


                    <label htmlFor="region">
                        <p className="pb-[12px]">Область</p>
                        <input
                            type="text" id="region" placeholder="Выберите область" readOnly={true}
                            className="w-[520px] h-[50px] px-[25px] flex items-center rounded-full border-[2px] hover:border-blue text-[16px] cursor-pointer -ms-clear border-grey outline-black text-black placeholder:text-grey"
                            onClick={() => setIsShow(prevState => !prevState)}
                            value={regionValue}
                        />
                        {isShow &&
                            <div
                                className="w-[170px] min-h-[344px] absolute right-0 bottom-[-344px] shadow-bigBtn rounded-[14px] px-[20px] py-[10px] flex flex-col gap-[5px] bg-white z-10">
                                <div
                                    className="w-[130px] h-[42px] border-b-[1px] border-b-grey px-[10px] flex items-center"
                                    onClick={() => setRegionValue('Чуй')}
                                >
                                    <p>Чуй</p>
                                </div>
                                <div
                                    className="w-[130px] h-[42px] border-b-[1px] border-b-grey px-[10px] flex items-center"
                                    onClick={() => setRegionValue('Жалал-Абал')}
                                >
                                    <p>Жалал-Абад</p>
                                </div>
                                <div
                                    className="w-[130px] h-[42px] border-b-[1px] border-b-grey px-[10px] flex items-center"
                                    onClick={() => setRegionValue('Ош')}
                                >
                                    <p>Ош</p>
                                </div>
                                <div
                                    className="w-[130px] h-[42px] border-b-[1px] border-b-grey px-[10px] flex items-center"
                                    onClick={() => setRegionValue('Ыссык-Куль')}
                                >
                                    <p>Ыссык-Куль</p>
                                </div>
                                <div
                                    className="w-[130px] h-[42px] border-b-[1px] border-b-grey px-[10px] flex items-center"
                                    onClick={() => setRegionValue('Нарын')}
                                >
                                    <p>Нарын</p>
                                </div>
                                <div
                                    className="w-[130px] h-[42px] border-b-[1px] border-b-grey px-[10px] flex items-center"
                                    onClick={() => setRegionValue('Талас')}
                                >
                                    <p>Талас</p>
                                </div>
                                <div
                                    className="w-[130px] h-[42px] border-b-[1px] border-b-grey px-[10px] flex items-center"
                                    onClick={() => setRegionValue('Баткен')}
                                >
                                    <p>Баткен</p>
                                </div>
                            </div>
                        }
                    </label>

                </div>

                <div className="z-0">
                    <p className="pb-[12px]">Адрес</p>
                    <input
                            type="text" id="region" placeholder="Введите адрес вашего объекта"
                            className="w-[520px] h-[50px] px-[25px] flex items-center rounded-full border-[2px] hover:border-blue text-[16px] cursor-pointer -ms-clear border-grey outline-black text-black placeholder:text-grey"
                        />
                </div>
        </div>
    )
}

export default ObjectLocation