// React modules
import {useState} from "react";

// components
import Button from "../../Button/Button";

// images
import som from '../../../../assets/images/som.svg'
import language from '../../../../assets/images/language.svg'
import LanguageMenu from "../DropdownMenues/LanguageMenu/LanguageMenu";
import MoneyMenu from "../DropdownMenues/MoneyMenu/MoneyMenu";

const HeaderUserNavbar = ({
                              pageType,
                              showModal,
                              handleShowModal,
                          }) => {

    const [isActive, setIsActive] = useState(1)


    const handleActiveLink = (index) => {
        setIsActive(index)
    }


    const mainpageNavbar = (
        <div className="flex gap-[57px] items-center justify-self-end">
            <div className="flex gap-[21px] items-center">
                <div className="relative">
                    <div
                        className="flex gap-[12px] items-center cursor-pointer relative"
                        onClick={() => {
                            if (showModal !== 'language') handleShowModal('language')
                            else handleShowModal('')
                        }}
                    >
                        <img src={language} alt="language"/>
                        <p className="text-[16px]">Русский</p>
                    </div>
                    {showModal === 'language' && <LanguageMenu handleMenu={handleShowModal}/>}
                </div>


                <div className="relative">
                    <div
                        className="flex gap-[12px] items-center cursor-pointer"
                        onClick={() => {
                            if (showModal !== 'money') handleShowModal('money')
                            else handleShowModal('')
                        }}
                    >
                        <img src={som} alt="som"/>
                        <p className="text-[16px]">Сом</p>

                    </div>
                    {showModal === 'money' && <MoneyMenu handleMenu={handleShowModal}/>}
                </div>


            </div>
            <Button
                width={237}
                height={44}
                text={'Сдать жилье на Meyman'}
            />
        </div>
    )


    const hotelNavbar = (
        <ul className="flex gap-[39px]">
            <li>
                <p
                    className={`text-[18px] p-[10px] cursor-pointer ${isActive === 1 ? 'text-black border-b-[2px] border-b-black' : 'text-grey'}`}
                    onClick={() => handleActiveLink(1)}
                >Объект размещения</p>
            </li>
            <li>
                <p
                    className={`text-[18px] p-[10px] cursor-pointer ${isActive === 2 ? 'text-black border-b-[2px] border-b-black' : 'text-grey'}`}
                    onClick={() => handleActiveLink(2)}
                >Номера</p>
            </li>
            <li>
                <p
                    className={`text-[18px] p-[10px] cursor-pointer ${isActive === 3 ? 'text-black border-b-[2px] border-b-black' : 'text-grey'}`}
                    onClick={() => handleActiveLink(3)}
                >Календарь</p>
            </li>
            <li>
                <p
                    className={`text-[18px] p-[10px] cursor-pointer ${isActive === 4 ? 'text-black border-b-[2px] border-b-black' : 'text-grey'}`}
                    onClick={() => handleActiveLink(4)}
                >Бронирования</p>
            </li>
        </ul>
    )


    const carNavbar = (
        <ul className="flex gap-[39px]">
            <li>
                <p
                    className={`text-[18px] p-[10px] cursor-pointer ${isActive === 1 ? 'text-black border-b-[2px] border-b-black' : 'text-grey'}`}
                    onClick={() => handleActiveLink(1)}
                >Авто размещения</p>
            </li>
            <li>
                <p
                    className={`text-[18px] p-[10px] cursor-pointer ${isActive === 2 ? 'text-black border-b-[2px] border-b-black' : 'text-grey'}`}
                    onClick={() => handleActiveLink(2)}
                >Календарь</p>
            </li>
            <li>
                <p
                    className={`text-[18px] p-[10px] cursor-pointer ${isActive === 3 ? 'text-black border-b-[2px] border-b-black' : 'text-grey'}`}
                    onClick={() => handleActiveLink(3)}
                >Арендования</p>
            </li>
        </ul>
    )


    return (
        <>
            {pageType === 'mainpage' && mainpageNavbar}
            {pageType === 'hotel' && hotelNavbar}
            {pageType === 'car' && carNavbar}
        </>
    )
}

export default HeaderUserNavbar