// React modules
import {useState} from "react";

// images
import close from '../../../../../../assets/images/close.svg'


const LanguageMenu = ({handleMenu}) => {

    const [kgsIsActive, setKgzIsActive] = useState(true)
    const [usdIsActive, setUsdIsActive] = useState(false)
    const [eurIsActive, setEurIsActive] = useState(false)

    const handleActiveLanguage = (language) => {

        if (language === 'kgs') {
            setKgzIsActive(true)
            setUsdIsActive(false)
            setEurIsActive(false)
        } else
        if (language === 'eur') {
            setKgzIsActive(false)
            setUsdIsActive(false)
            setEurIsActive(true)
        } else
        if (language === 'usd') {
            setKgzIsActive(false)
            setUsdIsActive(true)
            setEurIsActive(false)
        }
    }


    return (
        <div
            className={`absolute top-[42px] right-0 w-[224px] min-h-[276px] rounded-[18px] shadow-dropdown-menu border-light-white border-[1px] py-[20px] px-[30px] flex flex-col gap-[25px]`}
        >
            <div className="flex justify-between">
                <p>Валюта</p>
                <img
                    src={close} alt="close"
                    className="cursor-pointer"
                    onClick={() => handleMenu('close')}
                />
            </div>
            <div className="flex flex-col gap-[12px]">
                <div
                    className={`w-[164px] h-[54px] rounded-[10px] px-[20px] py-[4px] text-[16px] flex flex-col items-between border-blue border-[1px] cursor-pointer ${kgsIsActive ? "bg-blue text-white" : ''} `}
                    onClick={() => handleActiveLanguage('kgs')}
                >
                    <p>Сом</p>
                    <p>KGS</p>
                </div>
                <div
                    className={`w-[164px] h-[54px] rounded-[10px] px-[20px] py-[4px] text-[16px] flex flex-col items-between border-blue border-[1px] cursor-pointer ${usdIsActive ? "bg-blue text-white" : ''} `}
                    onClick={() => handleActiveLanguage('usd')}
                >
                    <p>Доллар</p>
                    <p>USD</p>
                </div>
                <div
                    className={`w-[164px] h-[54px] rounded-[10px] px-[20px] py-[4px] text-[16px] flex flex-col items-between border-blue border-[1px] cursor-pointer ${eurIsActive ? "bg-blue text-white" : ''} `}
                    onClick={() => handleActiveLanguage('eur')}
                >
                    <p>Евро</p>
                    <p>EUR</p>
                </div>
            </div>
        </div>
    )
}

export default LanguageMenu