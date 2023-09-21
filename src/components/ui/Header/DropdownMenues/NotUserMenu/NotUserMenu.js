import {NavLink} from "react-router-dom";


const NotUserMenu = ({}) => {

    return (<div
        className="w-[286px] min-h-[206px] absolute right-0 top-[51px] z-10 rounded-[18px] shadow-dropdown-menu border-dropdown border-[1px] p-[20px] flex flex-col gap-[20px] bg-white">
        <NavLink to={'/register'}>
            <p
                className="text-[16px] py-[10px] border-b-grey border-b-[1px] cursor-pointer"
            >
                Зарегистрироватья
            </p>
        </NavLink>
        <NavLink to={'/auth'}>
            <p
                className="text-[16px] py-[10px] border-b-grey border-b-[1px] cursor-pointer"
            >
                Войти
            </p>
        </NavLink>
        <p
            className="text-[16px] py-[10px] border-b-grey border-b-[1px] cursor-pointer"
        >
            Скачать приложение Meyman
        </p>
    </div>)
}

export default NotUserMenu