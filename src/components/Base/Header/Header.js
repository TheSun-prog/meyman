// React modules
import {useEffect, useState} from "react";

// images
import logo from '../../../assets/images/logo.svg'
import HeaderUserNavbar from "../../ui/Header/HeaderUserNavbar/HeaderUserNavbar";
import HeaderProfile from "../../ui/Header/HeaderProfile/HeaderProfile";
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";


const Header = ({
                    pageType = 'mainpage',
                }) => {

    const location = useLocation()

    const [isMainPage, setIsMainPage] = useState(false)
    const [showModal, setShowModal] = useState('')
    const userType = useSelector(state => state.authSlice.userType)



    useEffect(() => {
        setShowModal('')
  }, [location]);

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

    return (<div className="border-b-[1px] border-b-grey z-0">
            <div className="mx-auto w-[1240px]">
                <div className="h-[100px] flex items-center justify-between">
                    <NavLink to={'/'}>
                        <img src={logo} alt="Meyman" className="cursor-pointer"/>
                    </NavLink>
                    {!isMainPage && <HeaderUserNavbar
                        pageType={pageType}
                    />}

                    <div className="flex items-center gap-[20px]">
                        <NavLink to={'/hotelcatalog'}>
                            <p className='pr-[40px]'>Список отелей</p>
                        </NavLink>

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
        </div>)
}

export default Header