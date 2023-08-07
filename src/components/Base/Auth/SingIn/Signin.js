import {useState} from "react";
import googleIcon from '../../../../assets/images/google.svg'


const Signin = ({}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const checkFormdata = () => {
        if (!email) return true
        if (!password) return true
        return false
    }

    const sendFromdata = () => {
        if (checkFormdata()) return

        // axios

        setEmail("")
        setPassword("")
    }

    return (
        <div className="container mx-auto w-[774px] p-[80px] bg-white rounded-[70px]">
            <h4 className="text-[30px] text-center">Войти</h4>
            <div className="flex flex-col gap-[20px] py-[54px]">
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
            </div>
            <button
                className="w-[611px] py-[20px] text-center bg-blue rounded-[40px] text-white"
                onClick={sendFromdata}
            >Войти
            </button>

            <p
                className="relative text-center mt-[55px] after:content-[''] after:w-[215px] after:h-[1px] after:bg-black after:absolute after:left-[37.5px] after:top-[50%] before:content-[''] before:w-[215px] before:h-[1px] before:bg-black before:absolute before:right-[37.5px] before:top-[50%]"
            >или</p>

            <div className="pt-[35px] flex flex-col items-center gap-[53px]">
                <p>Войти через соц.сеть</p>
                <img src={googleIcon} alt="google"/>
            </div>
        </div>
    )
}

export default Signin