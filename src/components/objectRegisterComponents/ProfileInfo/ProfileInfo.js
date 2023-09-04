import startImg from '../../../assets/images/startRegMenu.png'
import back from '../../../assets/images/back.svg'
import Button from "../../ui/Button/Button";
import {NavLink} from "react-router-dom";
import Input from "../../ui/Input/Input";


const ProfileInfo = ({step, handleStep}) => {


    const startMenu = (
        <div className="mx-auto w-[1240px]">
            <div className="flex justify-between items-center h-[calc(100vh-100px)]">
                <div className="w-[652px]">
                    <p className="pb-[18px] text-[28px]">
                        Приветствуем вас на нашей платформе!
                    </p>
                    <p className="pb-[40px] text-[22px]">
                        Мы предлагаем простой и эффективный способ. <br/>Представить ваше жилье тысячам путешественникам
                    </p>
                    <Button
                    classes="w-[344px] h-[61px]"
                    clickFunc={() => {
                        handleStep(2)
                    }}
                    >
                        Начать
                    </Button>
                </div>
                <img src={startImg} alt="start image"/>
            </div>
        </div>
    )

    const getProfileData = (
        <div className="mx-auto w-[1240px]">
            <div className="flex flex-col items-start relative gap-[40px] pt-[100px]">
                <NavLink to={'/'}>
                    <img
                        src={back} alt="back"
                        className="absolute top-[40px] l-0"
                    />
                </NavLink>

                <div className="">
                    <p className="text-[24px] pb-[8px]">Данные вашего аккаунта</p>
                    <p className="text-[20px] text-half-opacity">Чтобы зарегестрировать ваш объект и управлять им</p>
                </div>

                <div className="text-[16px]">
                    <p>Имя и фамилия</p>
                    <Input
                        classes="mt-[12px]"
                        text="Имя и фамилия"
                    />
                </div>

                <div className="text-[16px]">
                    <p>Адрес электронной почты</p>
                    <Input
                        classes="mt-[12px]"
                        text="Адрес электронной почты"
                    />
                </div>

                <div className="text-[16px] pb-[40px]">
                    <p>Номер телефона</p>
                    <Input
                        classes="mt-[12px]"
                        text="Номер телефона"
                    />
                </div>

                <Button
                    classes="w-[392px] h-[61px]"
                    clickFunc={() => {
                        handleStep(3)
                    }}
                >
                    Продолжить
                </Button>
            </div>
        </div>
    )

    return (
        <>
            {step === 1 && startMenu}
            {step === 2 && getProfileData}
        </>
    )
}

export default ProfileInfo