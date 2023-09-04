import ProfileInfo from "../../components/objectRegisterComponents/ProfileInfo/ProfileInfo";
import {useState} from "react";


const ObjectRegister = () => {

    const [step, setStep] = useState(1)

    const handleStep = (num) => {
        setStep(num)
    }

    const [hotelData, setHotelData] = useState({})

    return(
        <>
            <ProfileInfo
                step={step}
                handleStep={handleStep}
            />
        </>
    )
}

export default ObjectRegister