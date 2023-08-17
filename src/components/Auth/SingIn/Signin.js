import {useState} from "react";
import googleIcon from '../../../assets/images/google.svg'
import {postLoginData} from "../../../axios/authorization";


const Signin = ({}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const checkFormdata = () => {
        if (!email) return true
        if (!password) return true
        return false
    }

    const sendFromdata = () => {
        if (checkFormdata()) {
            console.log("Login error")
            return
        }

        const loginData = new FormData()
        loginData.append('email', email)
        loginData.append('password', password)

        postLoginData(loginData)

        setEmail("")
        setPassword("")
    }

    return (
        <div className="container mx-auto w-[600px] px-[40px] py-[35px] bg-white rounded-[70px] shadow-auth">
            <h4 className="text-[24px] text-center">Войти</h4>
            <div className="flex flex-col gap-[18px] pt-[54px]">
                <label htmlFor="email">
                    <p className="pb-[10px] text-[16px]">Адрес электронной почты</p>
                    <input
                        className="border-2 border-black rounded-full px-[25px] py-[14px] text-[16px] w-[520px] h-[50px]"
                        type="email"
                        id="email"
                        placeholder="Введите свой адрес электронной почты"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    <p className="pb-[10px] text-[16px]">Пароль</p>
                    <input
                        className="border-2 border-black rounded-full px-[25px] py-[14px] text-[16px] w-[520px] h-[50px]"
                        type="password"
                        id="password"
                        placeholder="Ведите пароль"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
            </div>
            <button
                className="w-[520px] h-[50px] mt-[30px] mb-[20px] text-center bg-blue rounded-[40px] text-white"
                onClick={sendFromdata}
            >Войти
            </button>

            <p
                className="relative text-center mb-[10px] after:content-[''] after:w-[215px] after:h-[1px] after:bg-black after:absolute after:left-[0px] after:top-[50%] before:content-[''] before:w-[215px] before:h-[1px] before:bg-black before:absolute before:right-[0px] before:top-[50%]"
            >или</p>

            <div className="flex flex-col items-center gap-[20px]">
                <p>Войти через соц.сеть</p>
                <img className="w-[50px] h-[50px]" src={googleIcon} alt="google"/>
            </div>
        </div>
    )
}

export default Signin