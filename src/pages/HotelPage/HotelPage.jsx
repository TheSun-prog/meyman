// icons
import arrow from "../../assets/images/arrow2.svg";
// components
import HotelName from "../../components/hotelComponents/HotelName/HotelName";
import HotelImages from "../../components/hotelComponents/HotelImages/HotelImages";
import HotelRules from "../../components/hotelComponents/HotelRules/HotelRules";
import HotelRooms from "../../components/hotelComponents/HotelRooms/HotelRooms";
import HotelGrade from "../../components/hotelComponents/HotelGrade/HotelGrade";
import ReviewSwiper from "../../components/reviewComponents/ReviewSwiper/ReviewSwiper";
import ModalReview from "../../components/hotelComponents/modals/ModalReview";
import ModalAllRooms from "../../components/hotelComponents/modals/ModalAllRooms";
import ModalAllPhotos from "../../components/hotelComponents/modals/ModalAllPhotos";
import HotelDate from "../../components/hotelComponents/HotelDate/HotelDate";
import ModalFilteredRooms from "../../components/hotelComponents/modals/ModalFilteredRooms";
import ModalServices from "../../components/hotelComponents/modals/ModalServices";
// modules
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHousingData } from "../../store/slice/housingSlice";

const HotelPage = () => {
  const [activeModalReview, setActiveModalReview] = useState(false);
  const [activeModalAllRooms, setActiveModalAllRooms] = useState(false);
  const [activeModalALlImages, setActiveModalImages] = useState(false);
  const [modalFilteredRoom, setModalFilteredRoom] = useState(false);
  const [activeModalServices, setActiveModalServices] = useState(false);
  const [reviewData, setReviewData] = useState();

  const dispatch = useDispatch();

  const { data, isError } = useSelector((state) => state.housing);

  const { hotelId } = useParams();

  const openModalFilteredRoom = () => {
    setModalFilteredRoom(true);
  };

  useEffect(() => {
    dispatch(fetchHousingData({ limit: 12, offset: 0 }));
  }, [dispatch]);

  return (
    <div className="mx-auto w-[1240px]" style={{fontFamily: 'Quicksand, sans-serif'}}>
      <div className="flex items-center mb-[50px] mt-[45px]">
        <Link to={"/"}>Главная</Link>
        <img className="-rotate-90 h-4" src={arrow} alt="arrow" />
        <Link to={`/hotelcatalog/${hotelId}`}>Отель</Link>
      </div>
      <div>
        <HotelName data={data} id={hotelId} />
        {isError ? (
          <h1 className="text-center text-[40px] text-red-700 mt-2">
            Нет такого отеля!
          </h1>
        ) : (
          <HotelImages
            data={data}
            id={hotelId}
            handleOpenModalImages={setActiveModalImages}
          />
        )}
        <div className="flex justify-between mt-[50px]">
          <HotelRules
            data={data}
            id={hotelId}
            handleClickModal={() => {
              setActiveModalServices(true);
            }}
          />
          <HotelDate
            data={data}
            id={hotelId}
            openModalFilteredRoom={openModalFilteredRoom}
          />
        </div>
        <HotelRooms
          data={data}
          id={hotelId}
          handleActiveModal={() => {
            setActiveModalAllRooms(true);
          }}
        />
        <HotelGrade data={data} id={hotelId} />
        <ReviewSwiper
          data={data}
          id={hotelId}
          handleClick={(value) => {
            setReviewData(value);
            setActiveModalReview(true);
          }}
        />
      </div>
      {activeModalReview && (
        <ModalReview
          data={reviewData}
          handleCLickCloseModal={() => {
            setActiveModalReview(false);
          }}
        />
      )}
      {activeModalAllRooms && (
        <ModalAllRooms
          data={data}
          id={hotelId}
          handleCLickCloseModal={() => {
            setActiveModalAllRooms(false);
          }}
        />
      )}
      {activeModalALlImages && (
        <ModalAllPhotos
          data={data}
          id={hotelId}
          handleCLickCloseModal={() => {
            setActiveModalImages(false);
          }}
        />
      )}
      {modalFilteredRoom && (
        <ModalFilteredRooms
          handleCLickCloseModal={() => {
            setModalFilteredRoom(false);
          }}
        />
      )}
      {activeModalServices && (
        <ModalServices
          data={data}
          id={hotelId}
          handleCLickCloseModal={() => {
            setActiveModalServices(false);
          }}
        />
      )}
    </div>
  );
};

export default HotelPage;
