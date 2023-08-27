// React modules
import {useEffect, useState} from "react";

// images
import logo from '../../../assets/images/logo.svg'
import HeaderUserNavbar from "../../ui/Header/HeaderUserNavbar/HeaderUserNavbar";
import HeaderProfile from "../../ui/Header/HeaderProfile/HeaderProfile";


const Header = ({
                    userType = 'user',
                    pageType = 'mainpage',
                }) => {

    const [isMainPage, setIsMainPage] = useState(false)
    const [showModal, setShowModal] = useState('')

    const handleShowModal = (value) => {
        setShowModal(value)
    }


    useEffect(() => {
        switch (pageType) {
            case 'mainpage' :
                setIsMainPage(true);
                break;
            case 'car' :
                setIsMainPage(false);
                break;
            case 'hotel' :
                setIsMainPage(false);
                break;
        }
    }, [pageType])

    return (
        <div className="border-b-[1px] border-b-grey">
            <div className="mx-auto w-[1240px]">
                <div className="h-[100px] flex items-center justify-between">
                    <img src={logo} alt="Meyman"/>

                    {
                        !isMainPage && <HeaderUserNavbar
                            pageType={pageType}
                        />
                    }

                    <div className="flex gap-[20px]">

                        {isMainPage && <HeaderUserNavbar
                            pageType={pageType}
                            handleShowModal={handleShowModal}
                            showModal={showModal}
                        />}

                        <HeaderProfile
                            userType={userType}
                            handleShowModal={handleShowModal}
                            showModal={showModal}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header