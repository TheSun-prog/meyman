// React modules
import {useEffect, useState} from "react";

// images
import profile from '../../../../assets/images/profile.svg'
import NotUserMenu from "../HeaderUserNavbar/DropdownMenues/NotUserMenu/NotUserMenu";
import IsUserMenu from "../HeaderUserNavbar/DropdownMenues/IsUserMenu/IsUserMenu";
import {useDispatch, useSelector} from "react-redux";
import {setModalsClosed} from "../../../../store/slice/headerModalsSlice";


const HeaderProfile = ({
                           userType,
                       }) => {


    const [isShow, setIsShow] = useState(false)
    const [isReg, setIsReg] = useState(false)

    const handleIsShow = () => {

        setIsShow(prevState => !prevState)

    }

    useEffect(() => {
        switch (userType) {
            case 'user':
                setIsReg(false);
                break;
            case 'client':
                setIsReg(true);
                break;
            case 'onwer':
                setIsReg(true);
                break;
            case 'admin':
                setIsReg(true);
                break;
        }
    }, [userType])


    const nonRegProfile =
        <img className="w-[28px] h-[28px]" src={profile} alt="profile"/>


    const isRegProfile =
        <div className="w-[28px] h-[28px] bg-blue rounded-full flex items-center justify-center">
            <p className="uppercase text-[16px] text-white">A</p>
        </div>


    return (
        <div className="relative">
            <div
                className="w-[112px] h-[42px] rounded-full flex items-center justify-center border-[1px] border-blue cursor-pointer"
                onClick={handleIsShow}
            >
                {isReg ? isRegProfile : nonRegProfile}
            </div>
            {isShow && (isReg ? <IsUserMenu/> : <NotUserMenu/>)}
        </div>
    )
}

export default HeaderProfile