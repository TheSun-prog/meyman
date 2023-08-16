import "./FourthStep.css";
import onestar from "../../../../assets/images/onestar.svg"
import twostars from "../../../../assets/images/twostar.svg"
import threestars from "../../../../assets/images/thristar.svg"
import fourstars from "../../../../assets/images/fourstar.svg"
import fivestars from "../../../../assets/images/fiftystar.svg"
import { useState } from "react";
import back from '../../../../assets/images/back.svg';
import { Link } from "react-router-dom";
import Auth from "../../Auth";
import finish from "./finish";


const FourthStep = ({ savedData, submitForm, handleSubmit, register }) => {

    const options = [
        { value: "5", label: <img width="256" height="42" src={fivestars} /> },
        { value: "4", label: <img width="207" height="42" src={fourstars} /> },
        { value: "3", label: <img width="152" height="42" src={threestars} /> },
        { value: "2", label: <img width="97" height="42" src={twostars} /> },
        { value: "1", label: <img width="42" height="42" src={onestar} /> },
        { value: "0", label: "Без звезд" },
    ];

    const initSO = savedData?.stars ? savedData?.stars : options[2].value;
    const [selectedOption, setSelectedOption] = useState(initSO);

    const handleOptionSelect = (value) => {
        setSelectedOption(value);
    };
    return (
        <div className="Auth__title">
            <Link className="" to="/auth/choose-place"><img className="mb-[50px]" src={back} alt="back" /> </Link>
            <h3>Расскажите о вашем объекте размещения</h3>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="Auth-input">
                    <label htmlFor="building_name">
                        <h3 className="mt-[40px]">Название вашего объекта</h3>
                        <input className="pl-5 border-2 border-gary-400 rounded-[35px] w-[534px] h-[50px] mt-5 mb-3"
                            type="text"
                            id="building_name"
                            placeholder="Введите название вашего объекта"
                            defaultValue={savedData.building_name}
                            {...register("building_name")} />
                        <p className="text-gray-400">Это название будут видеть гости,при поиске варианта проживания</p>
                        <div className="w-[1200px] bg-gray-400 h-[1px] mb-[40px] mt-[40px]"></div>

                    </label>

                    {options.map((option) => (
                        <>
                            <label
                                key={option.value}
                                className={`option ${selectedOption === option.value ? 'selected' : ''}`}
                                onClick={() => handleOptionSelect(option.value)}
                                htmlFor="rating">
                                <input
                                    type="radio"
                                    value={option.value}
                                    checked={selectedOption === option.value}
                                    className='w-[30px] h-[30px] '
                                    {...register("rating")}
                                />
                                {option.label}
                            </label>
                        </>
                    ))}
                    <div className="w-[1200px] bg-gray-400 h-[1px] mt-[40px]"></div>
                </div>
                <button className='w-[392px] h-[62px] rounded-[31px] bg-blue-700 text-lg mt-[100px] text-white   ' 
                 type="submit">Продолжить</button>
            </form>
        </div>
    )
}

export default FourthStep;