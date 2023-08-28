import ProfileInfo from "../../components/objectRegisterComponents/ProfileInfo/ProfileInfo";
import {useState} from "react";
import ObjectType from "../../components/objectRegisterComponents/HotelRegister/Inputs/ObjectType";
import ObjectLocation from "../../components/objectRegisterComponents/HotelRegister/Inputs/ObjectLocation";
import HotelRegister from "../../components/objectRegisterComponents/HotelRegister/HotelRegister";


const ObjectRegisterPage = () => {

    const [step, setStep] = useState(1)

    const handleStep = (num) => {
        setStep(num)
    }

    const [hotelData, setHotelData] = useState({})

    return(
        <>
            <HotelRegister/>
        </>
    )
}

export default ObjectRegisterPage