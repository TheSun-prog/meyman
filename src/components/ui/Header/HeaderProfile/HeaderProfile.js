// React modules
import {useEffect, useState} from "react";

// images
import profile from '../../../../assets/images/profile.svg'
import NotUserMenu from "../DropdownMenues/NotUserMenu/NotUserMenu";
import IsUserMenu from "../DropdownMenues/IsUserMenu/IsUserMenu";


const HeaderProfile = ({userType, showModal, handleShowModal,}) => {
    const [isReg, setIsReg] = useState(false)


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


    const nonRegProfile =(<img className="w-[28px] h-[28px]" src={profile} alt="profile"/>)

    const isRegProfile = (
        <div className="w-[28px] h-[28px] bg-blue rounded-full flex items-center justify-center">
            <p className="uppercase text-[16px] text-white">A</p>
        </div>
    )

    return (
        <div className="relative">
            <div
                className="w-[112px] h-[42px] rounded-full flex items-center justify-center border-[1px] border-blue cursor-pointer"
                onClick={() => {
                    if (showModal !== 'profile') handleShowModal('profile')
                    else handleShowModal('')
                }}
            >
                {isReg ? isRegProfile : nonRegProfile}
            </div>
            {showModal === 'profile' && (isReg ? <IsUserMenu/> : <NotUserMenu/>)}
        </div>
    )
}

export default HeaderProfile