import './ThridStep.css'
import back from '../../../../assets/images/back.svg';
import { Link } from "react-router-dom";


const ThirdStep = ({ savedData, submitForm, handleSubmit, register }) => {
    const regions = ["Ош", "Чуй", "Джалал Абад", "Баткен", "Иссык-куль", "Наарын", "Талас"]
    return (
        <div className="Auth__title">
            <Link to="/auth/choose-category"><img className='mb-[50px]' src={back} alt="back" /> </Link>
            <h1>Где находится ваш объект?</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="Auth__input">
                    <label htmlFor="region">
                        <h3>Область</h3>
                        <select className='region' defaultValue={savedData?.region} placeholder='Укажите область' name="region" id="region" {...register("region")}>
                            {
                                regions.map(item => <option placeholder='Укажите область' value={item} key={item}>{item}</option>)
                            }
                        </select>
                        <br />
                        <label htmlFor="address">
                            <h3>Адрес</h3>
                            <input placeholder='Введите ваш адрес' defaultValue={savedData?.address} name="address" type="text" id="address" {...register("address")} />
                        </label>
                    </label>
                </div>
                <button className='w-[392px] h-[62px] rounded-[31px] bg-blue-700 text-lg text-white mt-[98px]' type="submit">Продолжить</button>
            </form>
        </div>
    )
}

export default ThirdStep;