import hotelIcon from "../../assets/images/hotel-icon.svg";
import carIcon from "../../assets/images/car-icon.svg";
import Button from "../../components/ui/Button/Button";
import React, { useEffect, useState } from "react";
import HotelCard from "../../components/hotelComponents/HotelCard/HotelCard";
import {
  fetchHousingData, selectHousingData, selectHousingDataCount, selectHousingError, selectHousingLoadingStatus,
} from "../../store/slice/housingSlice";
import { useDispatch, useSelector } from "react-redux";
import sort from '../../assets/images/sort.svg'
import filter from '../../assets/images/filter.svg'
import Sorting from "../../components/hotelCatalogComponents/Sorting/Sorting";
import Filters from "../../components/hotelCatalogComponents/Filters/Filters";
import emptyIcon from '../../assets/images/zero-search.svg'
import {Pagination} from "antd";

const HotelCatalog = () => {
  const [activeSearch, setActiveSearch] = useState("hotel");
  const [activeSorting, setActiveSorting] = useState(false)
  const [activeFilters, setActiveFilters] = useState(false)
  const [limitOffset, setLimitOffset] = useState({
    limit: 12,
    offset: 1
  })
  const [page, setPage] = useState(1)

  const currency = useSelector(state => state.currency)
  const dispatch = useDispatch();
  const hotelData = useSelector(selectHousingData);
  const hotelDataCount = useSelector(selectHousingDataCount);
  const loading = useSelector(selectHousingLoadingStatus);
  const error = useSelector(selectHousingError);

  const handleCancelSorting = () => {
    setActiveSorting(false)
  }

  const handleCancelFilters = () => {
    setActiveFilters(false)
  }

   useEffect(() => {
    setLimitOffset(prevState => {
      return {
        ...prevState,
        offset: (page - 1) * prevState.limit
      }
    })
  }, [page, ])

  useEffect(() => {
    dispatch(fetchHousingData({ limit: limitOffset.limit, offset: limitOffset.offset, currency: currency }));
  }, [limitOffset, dispatch, currency])


  return (<>
    <div className="bg-main z-[-100] bg-no-repeat bg-cover pt-[225px] h-[550px] ">
      <div className="mx-auto w-[1240px] h-[100%] relative">
        <div className=" flex flex-col gap-[50px]">
          <div className="flex gap-[20px]">
            <div
              className={`w-[115px] h-[76px] flex flex-col gap-[2px] items-center justify-center rounded-[10px] backdrop-blur-[9px] ${activeSearch === "hotel" ? "bg-grey border-[1px] border-white" : "bg-dark-blue"}`}
            >
              <img
                className="w-[32px] h-[32px]"
                src={hotelIcon}
                alt="hotel"
              />
              <p className="text-[20px] text-white">Жилье</p>
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
            <Button width={202} height={53} text={"Искать"} />
          </div>

        </div>
        <div className="flex gap-[20px] justify-end pt-[18px]">
          <Button width={200} height={40}
            classes={"flex gap-[21px]"}
            clickFunc={() => {setActiveSorting(true)}}
          >
            <img src={sort} alt="sort" />
            <p>Сортировка</p>
          </Button>
          <Button width={200} height={40}
            classes={"flex gap-[21px]"}
            clickFunc={() => {setActiveFilters(true)}}
          >
            <img src={filter} alt="filter" />
            <p>Фильтры</p>
          </Button>
        </div>
      </div>
    </div>
    <div className="mx-auto w-[1240px] flex flex-col items-center">
      <div className="pt-[80px] pb-[100px] flex flex-wrap gap-x-[95px] gap-y-[55px]">
        {hotelData && hotelData.map((value) => {
          return <HotelCard key={value.id} data={value} id={value.id} />
        })}
        {hotelData?.length === 0 ? <div className="w-[684px] mt-[100px] m-auto text-center flex flex-col justify-center">
          <img src={emptyIcon} alt="emptyIcon" className="w-[250px] m-auto"/>
          <h1 className="text-center text-[32px]">Ой, ничего не нашлось</h1>
          <p className="text-[28px] text-[#898989]">Проверьте, правильно ли вы написали название.</p>
        </div> : ''}


      </div>
      <Pagination current={page} total={hotelDataCount} defaultPageSize={12} disabled={loading} onChange={(pageNum) => {
          setPage(pageNum)
        window.scrollTo({top: 700, behavior:'smooth'})
        }}/>
    </div>
    <Sorting
      isOpen={activeSorting}
      handleOk={handleCancelSorting}
      handleCancel={handleCancelSorting}
    />
    <Filters 
      isOpen={activeFilters}
      handleOk={handleCancelFilters}
      handleCancel={handleCancelFilters}
    />
  </>);
};

export default HotelCatalog;
