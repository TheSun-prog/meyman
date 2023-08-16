import { useEffect, useState } from 'react';
import style from "./SecondStep.module.css";
import { Link } from 'react-router-dom';
import back from '../../../../assets/images/back.svg';
import home from '../../../../assets/images/home.svg';
import number from '../../../../assets/images/number.svg';
import image from '../../../../assets/images/image.svg';
import hotels from '../../../../assets/images/hotels.svg';
import homes from '../../../../assets/images/homes.svg';


function SecondStepChoose({ savedData, submitForm, handleSubmit, register }) {
    const options = [
        {
            value: "category1", label:
                <div className={style.Choices__block}>
                    <div className={style.Choices__one}>
                        <img src={hotels} alt="" />
                        <h1>Отели</h1>
                        <p>Это недвижимость, с готовыми номерами
                            и наборами услуг</p>
                    </div>
                </div>
        },
        {
            value: "category2", label:
                <div className={style.Choices__block}>
                    <div className={style.Choices__one}>
                        <img src={homes} alt="" />
                        <h1>Дома</h1>
                        <p>Это недвижимость, с готовыми номерами
                            и наборами услуг</p>
                    </div></div>
        },
        {
            value: "category3", label:
                <div className={style.Choices__block}>
                    <div className={style.Choices__one}>
                        <img src={home} alt="" />
                        <h1>Квартиры</h1>
                        <p>Это недвижимость, с готовыми номерами
                            и наборами услуг</p>
                    </div>
                </div>
        },
    ];
    const [initSO, setInitSO] = useState(savedData.category ? savedData.category : options[0].value);
    const [selectedOption, setSelectedOption] = useState(initSO);

    const handleOptionSelect = (value) => {
        setSelectedOption(value);
    };

    return (
        <div className={style.title}>
            <Link className={style.back} to="/auth/accdata"><img className='mb-[40px]' src={back} alt="back" /> </Link>

            <h5>Выберите,на какой из представленных категорий подходит ваш объект</h5>

            <form onSubmit={handleSubmit(submitForm)}>
                <div className={style['options-container']}>
                    {options.map((option) => (
                        <label
                            key={option.value}
                            className={selectedOption === option.value ? style.option__selected : style.option}
                            onClick={() => handleOptionSelect(option.value)}
                        >
                            <input
                                type="radio"
                                value={option.value}
                                checked={selectedOption === option.value}
                                className='hgo'
                                {...register("category")}
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
                <button className='w-[392px] h-[62px] rounded-[31px] bg-blue-700 text-lg text-white mt-[18px]'  type="submit">Продолжить</button>
            </form>
        </div>
    );
}

function SecondStep({ ...props }) {
    const initialSelectedOption = localStorage.getItem('enable') !== null ? localStorage.getItem("enable") : false;
    const [enable, setEnable] = useState(initialSelectedOption);

    useEffect(() => {
        localStorage.setItem('enable', enable);
    }, [enable]);

    if (enable === false) {
        return (
            <div className={style.Three__Step}>
                <div className={style.container}>
                <Link className='mt-[100px] mb-[100px]' to="/auth/accdata"><img src={back} alt="back" /> </Link>

                    <h1>Вам предстоит выпонить,три основных пункта</h1>
                    <div className={style.First__step}>
                        <div className={style.One__icons}><span>
                            <img src={home} alt="" srcset="" />
                        </span></div>
                        <div className={style.text}>
                            <h1>Шаг 1</h1>
                            <h3>Информация об объекте размещения</h3>
                            <p>Основная информация. Добавьте название, адрес и другие детали объекта</p>
                            <div className='w-[1200px]  mt-[40px] border-2 border-gray-400'></div>
                        </div>
                    </div>
                    <div className={style.Second__step}>
                        <div className={style.Two__icons}><span>
                            <img src={number} alt="" srcset="" />
                        </span></div>
                        <div className={style.text}>
                            <h1>Шаг 2</h1>
                            <h3>Номера</h3>
                            <p>Заполните информацию о комнате. После этого вы сможете добавить больше единиц размещения</p>
                            <div className='w-[1200px]  mt-[40px] border-2 border-gray-400'></div>
                        </div>
                    </div>
                    <div className={style.Thrid__step}>
                        <div className={style.Thrid__icons}>
                            <span>
                                <img src={image} alt="" />
                            </span>
                        </div>
                        <div className={style.text}>
                            <h1>Шаг 3</h1>
                            <h3>Фотографии</h3>
                            <p>Загрузите фотографии объекта, чтобы гости знали чего ожидать</p>
                            <div className='w-[1200px]  mt-[40px] border-2 border-gray-400'></div>
                        </div>
                    </div>
                </div>
                <button className='w-[392px] h-[62px] rounded-[31px] bg-blue-700 text-lg text-white mt-[98px]' onClick={() => setEnable(true)}>Продолжить</button>

            </div>
        )
    } else {
        return <SecondStepChoose {...props} />
    }
}

export default SecondStep;