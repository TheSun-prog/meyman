import {useState} from "react";
import googleIcon from '../../../../assets/images/google.svg'
import facebookIcon from '../../../../assets/images/facebook.svg'


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
        <>
            <div className="authorization__form-inputs">
                <label htmlFor="email">
                    <p>Адрес электронной почты</p>
                    <input
                        type="email"
                        id="email"
                        placeholder="Введите свой адрес электронной почты"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    <p>Пароль</p>
                    <input
                        type="password"
                        id="password"
                        placeholder="Ведите пароль"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
            </div>
            <button
                className="authorization__loginbtn"
                onClick={sendFromdata}
            >Войти
            </button>

            <p>или</p>

            <div className="authorization__with">
                <p>Войти через соц.сети</p>
                <div>
                    <img src={googleIcon} alt="google"/>
                    <img src={facebookIcon} alt="facebook"/>
                </div>
            </div>
        </>
    )
}

export default Signin