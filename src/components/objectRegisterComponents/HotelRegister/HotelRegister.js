import ObjectType from "./Inputs/ObjectType";
import ObjectLocation from "./Inputs/ObjectLocation";
import ObjectInfo from "./Inputs/ObjectInfo";
import ObjectService from "./Inputs/ObjectService";


const HotelRegister = () => {
    return (
        <div className="mx-auto w-[1240px] pt-[120px]">
            <div className="flex flex-col gap-[40px]">
                <ObjectType/>
                <ObjectLocation/>
                <ObjectInfo/>
                <ObjectService/>
            </div>
        </div>
    )
}

export default HotelRegister