// icons
import placeIcon from '../../assets/images/place.svg';
import whatsAppIcon from '../../assets/images/whats-app.svg';
import heartIcon from '../../assets/images/heart.svg';
import done from '../../assets/images/done.svg';
import dish from '../../assets/images/dish-green.svg';
import arrow from '../../assets/images/arrow.svg';
import arrow2 from '../../assets/images/arrow2.svg';
import kgs from '../../assets/images/som.svg';
import usd from '../../assets/images/usd.svg';
import eur from '../../assets/images/euro.svg';
// ui
import Button from '../../components/ui/Button/Button';
import ModalAllServices from '../../components/roomComponents/modals/ModalAllServices';
// react
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// components
import roomIcons from './roomIcon';
import RoomDate from '../../components/roomComponents/RoomDate';
import ModalAllPhotos from '../../components/hotelComponents/modals/ModalAllPhotos';
import { fetchRoomData } from '../../store/slice/roomSlice';
import { fetchHotelData } from '../../store/slice/hotelSlice';
import SkeletonImage from 'antd/es/skeleton/Image';
import { Skeleton } from 'antd';

const RoomPage = () => {
  const [activeModalAllPhotosRooms, setActiveModalAllPhotosRooms] = useState(false);
  const [activeModalALlServices, setActiveModalAllServices] = useState(false);

  const dispatch = useDispatch();

  const { hotelId, roomId } = useParams();

  const { data } = useSelector((state) => state.room);
  const hotelData = useSelector((state) => state.hotel.data);
  const currency = useSelector((state) => state.currency);

  const handleActiveModal = () => {
    setActiveModalAllPhotosRooms(true);
  };

  const handleCloseAllPhotosModal = () => {
    setActiveModalAllPhotosRooms(false);
  };

  const handleCloseAllServicesModal = () => {
    setActiveModalAllServices(false);
  };

  useEffect(() => {
    dispatch(
      fetchRoomData({
        roomId: roomId,
        currency: currency,
      }),
    );
  }, [dispatch, currency]);

  useEffect(() => {
    dispatch(
      fetchHotelData({
        hotelId: hotelId,
        currency: currency,
      }),
    );
  }, [dispatch, currency]);

  return (
    <div className='mx-auto w-[1240px] min-h-screen'>
      <div className='text-[16px] flex items-center mb-[50px] mt-[45px]'>
        <NavLink to={'/'}>Главная</NavLink>
        <img className='-rotate-90 h-4' src={arrow2} alt='arrow' />
        <NavLink to={`/hotelcatalog/${hotelId}`}>Отель</NavLink>
        <img className='-rotate-90 h-4' src={arrow2} alt='arrow' />
        Номер
      </div>
      <div>
        <div className='flex justify-between'>
          {data?.room_name && hotelData?.address && hotelData?.location ? (
            <div>
              <h1 className='text-[32px] font-[500]'>{data?.room_name}</h1>
              <div className='flex'>
                <img src={placeIcon} alt='placeIcon' />
                <span className='text-2xl text-grey'>
                  {hotelData?.address}/{hotelData?.location}
                </span>
              </div>
            </div>
          ) : (
            <Skeleton />
          )}
          <div className='flex'>
            <img className='mr-[20px]' src={whatsAppIcon} alt='whatsAppIcon' />
            <img src={heartIcon} alt='heartIcon' />
          </div>
        </div>
        <div onClick={handleActiveModal} className='flex justify-between mt-[20px] cursor-pointer'>
          {data?.room_images?.[0]?.image ? (
            <div>
              <img
                className='rounded-l-2xl h-[500px] w-[490px] object-cover'
                src={data?.room_images?.[0]?.image}
                alt='hotelImg'
              />
            </div>
          ) : (
            <SkeletonImage style={{ width: '490px', height: '500px' }} />
          )}
          <div className=''>
            <div className='flex justify-between gap-[10px] mb-[10px]'>
              {data?.room_images?.[1]?.image ? (
                <img
                  className='w-[365px] h-[245px] object-cover'
                  src={data?.room_images?.[1]?.image}
                  alt='hotelImg2'
                />
              ) : (
                <SkeletonImage style={{ width: '365px', height: '245px' }} />
              )}
              {data?.room_images?.[2]?.image ? (
                <img
                  className='w-[365px] h-[245px] rounded-tr-2xl object-cover'
                  src={data?.room_images?.[2]?.image}
                  alt='hotelImg2'
                />
              ) : (
                <SkeletonImage style={{ width: '365px', height: '245px' }} />
              )}
            </div>
            <div className='flex gap-[10px] relative'>
              {data?.room_images?.[3]?.image ? (
                <img
                  className='w-[365px] h-[245px] object-cover'
                  src={data?.room_images?.[3]?.image}
                  alt='hotelImg2'
                />
              ) : (
                <SkeletonImage style={{ width: '365px', height: '245px' }} />
              )}
              {data?.room_images?.[4]?.image ? (
                <img
                  className='w-[365px] h-[245px] rounded-br-2xl object-cover'
                  src={data?.room_images?.[4]?.image}
                  alt='hotelImg2'
                />
              ) : (
                <SkeletonImage style={{ width: '365px', height: '245px' }} />
              )}
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-10'>
          <div>
            <div>
              <h3 className='text-[28px]'>Условия бронирования</h3>
              {data.Free_cancellation_anytime && (
                <div className='flex'>
                  <img className='mr-2' src={done} alt='done' />
                  <span className='text-[#59A859]'>Бесплатная отмена в любое время </span>
                </div>
              )}
              <div className='flex'>
                <img className='mr-2' src={dish} alt='done' />
                <span className='text-[#59A859]'>Завтрак включен</span>
              </div>
            </div>
            <div className='mt-10 w-[500px]'>
              <h3 className='text-[28px] mb-4'>Удобства номера</h3>
              <ul className='pb-[10px] flex justify-between '>
                <div className='max-w-[328px] h-[236px] flex flex-col flex-wrap'>
                  {data?.room_amenities?.slice(0, 8)?.map((item, index) => (
                    <li key={index} className='flex mb-[24px] mr-[40px]'>
                      <div className='flex border-b border-b-[#8C8C8C]'>
                        <img className='mr-[14px]' src={roomIcons[item]} alt='wifiIcon' />
                        <span className='text-[22px]'>{item}</span>
                      </div>
                    </li>
                  ))}
                </div>
              </ul>
              <Button
                clickFunc={() => {
                  setActiveModalAllServices(true);
                }}
                classes={'py-2 px-3 shadow-xl'}
              >
                Показать все Удобства <img src={arrow} alt='arrow' />
              </Button>
            </div>
          </div>
          <RoomDate data={data} roomId={roomId} />
        </div>
      </div>
      <ModalAllPhotos
        isOpen={activeModalAllPhotosRooms}
        handleOk={handleCloseAllPhotosModal}
        handleCancel={handleCloseAllPhotosModal}
        data={data?.room_images}
        id={hotelId}
      />
      <ModalAllServices
        isOpen={activeModalALlServices}
        handleOk={handleCloseAllServicesModal}
        handleCancel={handleCloseAllServicesModal}
        amenities={data}
      />
    </div>
  );
};

export default RoomPage;
