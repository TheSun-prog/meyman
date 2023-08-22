// React modules
import {useEffect, useState} from "react";

// images
import logo from '../../../assets/images/logo.svg'
import HeaderUserNavbar from "../../ui/Header/HeaderUserNavbar/HeaderUserNavbar";
import HeaderProfile from "../../ui/Header/HeaderProfile/HeaderProfile";


const Header = ({
                    userType='user',
                    pageType='mainpage',
                }) => {

    const [isMainPage, setIsMainPage] = useState(false)


    useEffect(() => {
        switch (pageType) {
            case 'mainpage' : setIsMainPage(true); break;
            case 'car' : setIsMainPage(false); break;
            case 'hotel' : setIsMainPage(false); break;
        }
    }, [pageType])

    return (
        <div className="mx-auto w-[1240px]">
            <div className="h-[100px] flex items-center justify-between">
                <img src={logo} alt="Meyman"/>

                {
                    !isMainPage && <HeaderUserNavbar
                        pageType={pageType}
                    />
                }

                <div className="flex gap-[20px]">

                    { isMainPage && <HeaderUserNavbar
                        pageType={pageType}
                    />}

                    <HeaderProfile
                        userType={userType}
                    />

                </div>
            </div>
        </div>
    )
}

export default Header