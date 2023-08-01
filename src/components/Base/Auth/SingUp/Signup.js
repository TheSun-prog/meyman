import {useState} from "react";
import googleIcon from '../../../../assets/images/google.svg'
import facebookIcon from '../../../../assets/images/facebook.svg'


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
        <>
            <h4>Зарегистрироваться</h4>

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

                <label htmlFor="name">
                    <p>Имя</p>
                    <input
                        type="text"
                        id="name"
                        placeholder="Введите свое имя"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>

                <label htmlFor="surname">
                    <p>Фамилия</p>
                    <input
                        type="text"
                        id="surname"
                        placeholder="Введите свое фамилие"
                        value={surname}
                        onChange={(event) => setSurname(event.target.value)}
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

                <label htmlFor="confirmPassword">
                    <p>Подтвердите пароль</p>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Ведите пароль"
                        value={redoPassword}
                        onChange={(event) => setRedoPassword(event.target.value)}
                    />
                </label>

            </div>

            <label htmlFor="checkbox" className="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                />
                <p>Создавая учетную запись, я соглашаюсь с Условиями использования и Политикой конфиденциальности
                    logo.kg</p>
            </label>

            <button
                onClick={sendFromdata}
                className="authorization__regbtn"
            >Зарегистрироваться
            </button>

            <p>или</p>

            <div className="authorization__with">
                <p>Зарегистрируйтесь через соц.сети</p>
                <div>
                    <img src={googleIcon} alt="google"/>
                    <img src={facebookIcon} alt="facebook"/>
                </div>
            </div>
        </>
    )
}

export default Signup