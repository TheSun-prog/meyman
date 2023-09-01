import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


const NotUserMenu = ({}) => {
    const dispatch = useDispatch(), navigate = useNavigate()

    return(
        <div className="w-[286px] min-h-[206px] absolute right-0 top-[51px] z-[100] rounded-[18px] shadow-dropdown-menu border-dropdown border-[1px] p-[20px] flex flex-col gap-[20px] bg-white">
            <p
                className="text-[16px] py-[10px] border-b-grey border-b-[1px] cursor-pointer"
                onClick={() => navigate('/register')}
            >
                Зарегестрироватья
            </p>
            <p
                className="text-[16px] py-[10px] border-b-grey border-b-[1px] cursor-pointer"
                onClick={() => navigate('/auth')}
            >
                Войти
            </p>
            <p
                className="text-[16px] py-[10px] border-b-grey border-b-[1px] cursor-pointer"
            >
                Скачать приложение Meyman
            </p>
        </div>
    )
}

export default NotUserMenu