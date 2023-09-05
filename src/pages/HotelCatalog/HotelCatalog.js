import hotelIcon from "../../assets/images/hotel-icon.svg";
import carIcon from "../../assets/images/car-icon.svg";
import Button from "../../components/ui/Button/Button";
import React, {useEffect, useState} from "react";
import HotelCard from "../../components/hotelComponents/HotelCard/HotelCard";
import {
    fetchHousingData, selectHousingData, selectHousingError, selectHousingLoadingStatus,
} from "../../store/slice/housingSlice";
import {useDispatch, useSelector} from "react-redux";
import FilterModal from "../../components/hotelComponents/FilterModal/FilterModal";
import {NavLink} from "react-router-dom";
import sort from '../../assets/images/sort.svg'
import filter from '../../assets/images/filter.svg'

const HotelCatalog = () => {
    const [activeSearch, setActiveSearch] = useState("hotel");

    const dispatch = useDispatch();
    const hotelData = useSelector(selectHousingData);
    const loading = useSelector(selectHousingLoadingStatus);
    const error = useSelector(selectHousingError);

    useEffect(() => {
        dispatch(fetchHousingData({limit: 12, offset: 0}));
    }, [dispatch]);

    const [filterShow, setFilterShow] = useState(false);
    const [filters, setFilters] = useState({
        housing_type: "",
        food_type: "",
        stars: "",
        rating_range: "",
        free_internet: "",
        gym: "",
        bar: "",
        restaurant: "",
        airport_transfer: "",
        park: "",
        pool: "",
        spa_services: "",
        room_service: "",
        children_playground: "",
    });

    console.log(filterShow)

    return (<>
        <div className="bg-main bg-no-repeat bg-cover h-[550px]">
            <div className="mx-auto w-[1240px] h-[100%] relative">
                <div className="pt-[180px] flex flex-col gap-[50px]">
                    <div className="flex gap-[20px]">
                        <div
                            className={`w-[115px] h-[76px] flex flex-col gap-[2px] flex items-center justify-center rounded-[10px] backdrop-blur-[9px] ${activeSearch === "hotel" ? "bg-grey border-[1px] border-white" : "bg-dark-blue"}`}
                        >
                            <img
                                className="w-[32px] h-[32px]"
                                src={hotelIcon}
                                alt="hotel"
                            />
                            <p className="text-[20px] text-white">Жилье</p>
                        </div>
                        <div
                            className={`w-[115px] h-[76px] flex flex-col gap-[2px] flex items-center justify-center rounded-[10px] backdrop-blur-[9px] ${activeSearch === "car" ? "bg-grey border-[1px] border-white" : "bg-dark-blue"}`}
                        >
                            <img className="w-[32px] h-[32px]" src={carIcon} alt="hotel"/>
                            <p className="text-[20px] text-white">Транспорт</p>
                        </div>
                    </div>
                    <div className="flex h-[80px] bg-white rounded-full pl-[75px] pr-[20px] py-[13px]">
                        <div className="w-[422px] h-[100%]">
                            <p>Куда</p>
                            <input
                                type="text"
                                placeholder="Куда вы хотите поехать?"
                                className="w-[90%] outline-none text-[16px]"
                            />
                        </div>
                        <div className="w-[156px] h-[100%]">
                            <p>Заезд</p>
                            <input
                                type="text"
                                placeholder="когда?"
                                className="w-[90%] outline-none text-[16px]"
                            />
                        </div>
                        <div className="w-[161px] h-[100%]">
                            <p>Выезд</p>
                            <input
                                type="text"
                                placeholder="когда?"
                                className="w-[90%] outline-none text-[16px]"
                            />
                        </div>
                        <div className="w-[205px] h-[100%]">
                            <p>Кто</p>
                            <input
                                type="text"
                                placeholder="кол-во людей?"
                                className="w-[90%] outline-none text-[16px]"
                            />
                        </div>
                        <Button width={202} height={53} text={"Искать"}/>
                    </div>

                </div>
                <div className="flex gap-[20px] justify-end pt-[18px]">
                        <Button width={200} height={40}
                                classes={"flex gap-[21px]"}
                        >
                            <img src={sort} alt="sort"/>
                            <p>Сортировка</p>
                        </Button>
                        <Button width={200} height={40}
                                classes={"flex gap-[21px]"}
                                clickFunc={() => {
                                    setFilterShow(prevState => !prevState)
                                }}
                        >
                            <img src={filter} alt="filter"/>
                            <p>Фильтры</p>
                        </Button>
                    </div>
            </div>
        </div>
        <div className="mx-auto w-[1240px]">
            <div className="pt-[80px] pb-[100px] flex flex-wrap gap-x-[95px] gap-y-[55px]">
                {hotelData && hotelData.map((value, index, array) => {
                    return (<NavLink key={index} to={`/hotelcatalog/${index}`}>
                        <HotelCard data={value} index={index}/>
                    </NavLink>);
                })}
            </div>
        </div>
        {filterShow && <FilterModal filters={filterShow} setFilters={setFilterShow}/>}
    </>);
};

export default HotelCatalog;
