// React modules
import {useState} from "react";

// images
import close from '../../../../../assets/images/close.svg'


const LanguageMenu = ({closeMenu}) => {

    const [ruIsActive, setRuIsActive] = useState(true)
    const [enIsActive, setEnIsActive] = useState(false)

    const handleActiveLanguage = (language) => {

        if (language === 'ru') {
            setRuIsActive(true)
            setEnIsActive(false)
        }
        if (language === 'en') {
            setEnIsActive(true)
            setRuIsActive(false)
        }
    }


    return (
        <div
            className={`absolute top-[42px] right-0 w-[224px] min-h-[186px] rounded-[18px] shadow-dropdown-menu border-light-white border-[1px] py-[20px] px-[30px] flex flex-col gap-[25px] bg-white`}
        >
            <div className="flex justify-between">
                <p>Язык</p>
                <img
                    src={close} alt="close"
                    className="cursor-pointer"
                    onClick={() => closeMenu('')}
                />
            </div>
            <div className="flex flex-col gap-[12px]">
                <div
                    className={`w-[164px] h-[42px] rounded-[10px] px-[20px] flex items-center border-blue border-[1px] cursor-pointer ${ruIsActive ? "bg-blue text-white" : ''} `}
                    onClick={() => handleActiveLanguage('ru')}
                >
                    <p>Русский</p>
                </div>
                <div
                    className={`w-[164px] h-[42px] rounded-[10px] px-[20px] flex items-center border-blue border-[1px] cursor-pointer ${enIsActive ? "bg-blue text-white" : ''} `}
                    onClick={() => handleActiveLanguage('en')}
                >
                    <p>Английский</p>
                </div>
            </div>
        </div>
    )
}

export default LanguageMenu