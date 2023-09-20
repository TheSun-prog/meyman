import {NavLink} from "react-router-dom";
import axios from "axios";
import {$authApi} from "../../../../../axios/axios";
import {useDispatch} from "react-redux";
import {setUserType} from "../../../../../store/slice/AuthSlice";


const IsUserMenu = ({}) => {
    const dispatch = useDispatch()
    return (<div
        className="w-[286px] min-h-[206px] absolute right-0 top-[51px] rounded-[18px] shadow-dropdown-menu border-dropdown border-[1px] p-[20px] flex flex-col gap-[20px] bg-white z-[-1]">
        <NavLink to={'/personal-area'}><p
            className="text-[16px] py-[10px] border-b-grey border-b-[1px] cursor-pointer"
        >
            Личный кабинет
        </p>
        </NavLink>
        <NavLink to={'/favorites'}>
            <p
                className="text-[16px] py-[10px] border-b-grey border-b-[1px] cursor-pointer"
            >
                Избранное
            </p>
        </NavLink>
        <p
            className="text-[16px] py-[10px] border-b-grey border-b-[1px] cursor-pointer"
            onClick={() => {
                localStorage.setItem('access', '')
                localStorage.setItem('refresh', '')
                localStorage.setItem('user_id', '')
                localStorage.setItem('user_type', '')
                window.location.reload();
            }}
        >
            Выйти
        </p>
    </div>)
}

export default IsUserMenu