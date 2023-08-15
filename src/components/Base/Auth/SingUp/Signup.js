import {useState} from "react";
import googleIcon from '../../../../assets/images/google.svg'
import {postSignupData} from "../../../../common/axios/authorization";

const Signup = ({}) => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [password, setPassword] = useState("")
    const [redoPassword, setRedoPassword] = useState("")


    const checkFormData = () => {
        // If error, return true
        if (password !== redoPassword) return true
        if (!email) return true
        if (!name) return true
        if (!surname) return true

        return false

    }

    const clearForm = () => {
        setEmail("")
        setName("")
        setSurname("")
        setPassword("")
        setRedoPassword("")
    }

    const sendFormdata = async () => {

        console.log(email)
        console.log(name)
        console.log(password)

        const sighupData = new FormData()

        sighupData.append('email', email)
        sighupData.append('username', name)
        sighupData.append('user_type', 'client')
        sighupData.append('password', password)

        await postSignupData(sighupData)

        clearForm()
    }

    return (
        <div className="container mx-auto w-[620px] px-[50px] py-[35px] bg-white rounded-[70px] shadow-auth">
            <h4 className="text-[24px] text-center">Зарегистрироваться</h4>
            <div className="flex flex-col gap-[20px] py-[35px]">
                <label htmlFor="email">
                    <p className="pb-[10px]">Адрес электронной почты</p>
                    <input
                        className="border-2 border-black rounded-full px-[25px] py-[20px] text-[16px] w-[520px] h-[50px]"
                        type="email"
                        id="email"
                        placeholder="Введите свой адрес электронной почты"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>

                <label htmlFor="name">
                    <p className="pb-[10px] text-[18px]">Имя</p>
                    <input
                        className="border-2 border-black rounded-full px-[25px] py-[20px] text-[16px] w-[520px] h-[50px]"
                        type="text"
                        id="name"
                        placeholder="Введите свое имя"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>

                <label htmlFor="surname">
                    <p className="pb-[10px]">Фамилия</p>
                    <input
                        className="border-2 border-black rounded-full px-[25px] py-[20px] text-[16px] w-[520px] h-[50px]"
                        type="text"
                        id="surname"
                        placeholder="Введите свое фамилие"
                        value={surname}
                        onChange={(event) => setSurname(event.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    <p className="pb-[10px]">Пароль</p>
                    <input
                        className="border-2 border-black rounded-full px-[25px] py-[20px] text-[16px] w-[520px] h-[50px]"
                        type="password"
                        id="password"
                        placeholder="Ведите пароль"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>

                <label htmlFor="confirmPassword">
                    <p className="pb-[10px]">Подтвердите пароль</p>
                    <input
                        className="border-2 border-black rounded-full px-[25px] py-[20px] text-[16px] w-[520px] h-[50px]"
                        type="password"
                        id="confirmPassword"
                        placeholder="Ведите пароль"
                        value={redoPassword}
                        onChange={(event) => setRedoPassword(event.target.value)}
                    />
                </label>

            </div>

            <button
                onClick={() => {
                    if (checkFormData()) {
                        console.log("SignUp error")
                    } else {
                        sendFormdata()
                    }
                }}
                className="w-[520px] h-[53px] bg-blue rounded-[40px] text-white flex items-center justify-center"
            >Зарегистрироваться
            </button>

            <p
                className="relative text-center py-[10px] after:content-[''] after:w-[215px] after:h-[1px] after:bg-black after:absolute after:left-[0px] after:top-[50%] before:content-[''] before:w-[215px] before:h-[1px] before:bg-black before:absolute before:right-[0] before:top-[50%]"
            >или</p>

            <div className="flex flex-col items-center gap-[20px]">
                <p>Зарегистрируйтесь через соц.сеть</p>
                <img className="w-[50px] h-[50px]" src={googleIcon} alt="google"/>
            </div>
        </div>
    )
}

export default Signup