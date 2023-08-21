import {useEffect, useState} from "react";
import passwordHide from '../../assets/images/password-hide.svg'
import passwordShow from '../../assets/images/password-show.svg'


const Input = ({type='text', text, isError, handleIsError}) => {

    const styleNotError = 'border-grey outline-black text-black placeholder:text-grey'
    const styleisError = 'border-red outline-red text-red placeholder:text-red'

    const [inputStyle, setInputStyle] = useState(styleNotError)
    const [passwordImage, setPasswordImage] = useState(passwordHide)
    const [inputType, setInputType] = useState(type)
    const isPassword = type === 'password'


    const handleInputType = () => {
        if (inputType === 'password') setInputType('text')
        if (inputType === 'text') setInputType('password')
    }

    const handlePasswordImage = () => {
        if (passwordImage === passwordHide) setPasswordImage(passwordShow)
        if (passwordImage === passwordShow) setPasswordImage(passwordHide)
    }


    useEffect(() => {
        setInputStyle(isError ? styleisError : styleNotError)
    }, [isError])


    return (
        <div className="relative w-[520px]">
            <input
                type={inputType}
                className={`w-[520px] h-[50px] px-[25px] flex items-center rounded-full border-[2px] hover:border-blue text-[16px] -ms-clear ${inputStyle}`}
                placeholder={text}
                onClick={() => {
                    handleIsError()
                }}
            />
            {isPassword ? <img
                src={passwordImage} alt="password show/hide"
                className="absolute right-[25px] inset-y-[13px]"
                onClick={
                    () => {
                        handlePasswordImage()
                        handleInputType()
                    }
                }
            /> : null}
        </div>
    )
}

export default Input