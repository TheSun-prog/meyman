import {useState} from "react";
import googleIcon from '../../../../assets/images/google.svg'


const Signup = ({}) => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [password, setPassword] = useState("")
    const [redoPassword, setRedoPassword] = useState("")
    const [finalPassword, setFinalPassword] = useState("")


    const checkFormData = () => {
        // If error, return true

        if (password !== redoPassword) return true
        setFinalPassword(password)

        if (!email) return true
        if (!name) return true
        if (!surname) return true
        if (!finalPassword) return true

        return false

    }

    const clearForm = () => {
        setEmail("")
        setName("")
        setSurname("")
        setPassword("")
        setRedoPassword("")
        setFinalPassword("")
    }

    const sendFromdata = () => {
        if (checkFormData()) return


        // axios


        clearForm()
    }

    return (
        <div className="container mx-auto w-[774px] px-[80px] py-[90px] bg-white rounded-[70px]">
            <h4 className="text-[30px] text-center">Зарегистрироваться</h4>
            <div className="flex flex-col gap-[20px] py-[35px]">
                <label htmlFor="email">
                    <p className="pb-[21px]">Адрес электронной почты</p>
                    <input
                        className="border-2 border-black rounded-full px-[25px] py-[20px] text-[16px] w-[614px]"
                        type="email"
                        id="email"
                        placeholder="Введите свой адрес электронной почты"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>

                <label htmlFor="name">
                    <p className="pb-[21px] text-[18px]">Имя</p>
                    <input
                        className="border-2 border-black rounded-full px-[25px] py-[20px] text-[16px] w-[614px]"
                        type="text"
                        id="name"
                        placeholder="Введите свое имя"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>

                <label htmlFor="surname">
                    <p className="pb-[21px]">Фамилия</p>
                    <input
                        className="border-2 border-black rounded-full px-[25px] py-[20px] text-[16px] w-[614px]"
                        type="text"
                        id="surname"
                        placeholder="Введите свое фамилие"
                        value={surname}
                        onChange={(event) => setSurname(event.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    <p className="pb-[21px]">Пароль</p>
                    <input
                        className="border-2 border-black rounded-full px-[25px] py-[20px] text-[16px] w-[614px]"
                        type="password"
                        id="password"
                        placeholder="Ведите пароль"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>

                <label htmlFor="confirmPassword">
                    <p className="pb-[21px]">Подтвердите пароль</p>
                    <input
                        className="border-2 border-black rounded-full px-[25px] py-[20px] text-[16px] w-[614px]"
                        type="password"
                        id="confirmPassword"
                        placeholder="Ведите пароль"
                        value={redoPassword}
                        onChange={(event) => setRedoPassword(event.target.value)}
                    />
                </label>

            </div>

            <button
                onClick={sendFromdata}
                className="w-[611px] py-[20px] text-center bg-blue rounded-[40px] text-white"
            >Зарегистрироваться
            </button>

            <p
                className="relative text-center mt-[55px] after:content-[''] after:w-[215px] after:h-[1px] after:bg-black after:absolute after:left-[37.5px] after:top-[50%] before:content-[''] before:w-[215px] before:h-[1px] before:bg-black before:absolute before:right-[37.5px] before:top-[50%]"
            >или</p>

            <div className="pt-[35px] flex flex-col items-center gap-[53px]">
                <p>Зарегистрируйтесь через соц.сеть</p>
                <img className="w-[78px] h-[79px]" src={googleIcon} alt="google"/>
            </div>
        </div>
    )
}

export default Signup