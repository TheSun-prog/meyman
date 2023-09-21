import {links} from "./links"
import HotelCatalog from "../pages/HotelCatalog/HotelCatalog";
import Mainpage from "../pages/Mainpage/Mainpage";
import HotelPage from "../pages/HotelPage/HotelPage";
import RoomPage from "../pages/RoomPage/RoomPage";
import BookingPage from "../pages/BookingPage/BookingPage";
import PersonalAreaPage from "../pages/PersonalAreaPage/PersonalAreaPage";
import HistoryReservationPage from "../pages/PersonalAreaPage/HistoryReservationPage";
import PersonalInfoPage from "../pages/PersonalAreaPage/PersonalInfoPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import RegPage from "../pages/RegPage/RegPage";
import ConfirmCode from "../pages/ConfirmCodePage/ConfirmCode";
import AuthPage from "../pages/AuthPage/AuthPage";
import BusinessMainPage from "../pages/BusinessMainPage/BusinessMainPage";
import BusinessAccountData from "../pages/BusinessAccountData/BusinessAccountData";
import FillingRoomDetails from "../pages/FillingRoomDetails/FillingRoomDetails";
import BusinessOwnerNotification from "../pages/BusinessOwnerNotification/BusinessOwnerNotification";
import Support from "../pages/Support/Support";
import Test from "../pages/Test/Test";
import RestorePassEmail from "../pages/RestorePassEmail/RestorePassEmail";
import RestorePassCode from "../pages/RestorePassCode/RestorePassCode";
import RestorePassNewPass from "../pages/RestorePassNewPass/RestorePassNewPass";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import WishListPage from "../pages/WishListPage/WishListPage";
import FillingHotelDetails from "../pages/FillingHotelDetails/FillingHotelDetails";

export const publicRoutes = [
    {
        path: links.base,
        element: <Mainpage/>
    },
    {
        path: links.hotelcatalog,
        element: <HotelCatalog/>
    },
    {
        path: links.hotelcatalog + '/:hotelId',
        element: <HotelPage/>
    },
    {
        path: links.hotelcatalog + '/:hotelId' + '/:roomId',
        element: <RoomPage/>
    },
    {
        path: links.hotelcatalog + '/:hotelId' + '/:roomId'+'/booking',
        element: <BookingPage/>
    },
    {
        path: links["personal-area"],
        element: <PersonalAreaPage/>
    },
    {
        path: links["personal-area"]+'/history-reservation',
        element: <HistoryReservationPage/>
    },
    {
        path: links["personal-area"]+'/personal-info',
        element: <PersonalInfoPage/>
    },
    {
        path: links.about,
        element: <AboutPage/>
    },
    {
        path: links.register,
        element: <RegPage/>
    },
    {
        path: links.confirmCode,
        element: <ConfirmCode/>
    },
    {
        path: links.auth,
        element: <AuthPage/>
    },
    {
        path: links.businessMainPage,
        element: <BusinessMainPage/>
    },
    {
        path: links.businessAccountData,
        element: <BusinessAccountData/>
    },
    {
        path: links.fillingHotelDetails,
        element: <FillingHotelDetails/>
    },
    {
        path: links.fillingRoomDetails,
        element: <FillingRoomDetails/>
    },
    {
        path: links.businessOwnerNotification,
        element: <BusinessOwnerNotification/>
    },
    {
        path: links.support,
        element: <Support/>
    },
    {
        path: links.test,
        element: <Test/>
    },
    {
        path: links.restorePassEmail,
        element: <RestorePassEmail/>
    },
    {
        path: links.restorePassCode,
        element: <RestorePassCode/>
    },
    {
        path: links.restorePassNewPass,
        element: <RestorePassNewPass/>
    },
    {
        path: links.favorites,
        element: <FavoritesPage/>
    },
    {
        path: links.favorites + '/:id',
        element: <WishListPage/>
    },
    {
        path: '*',
        element: <h1 className="text-center text-red-700 text-[50px] mt-10">
        Страница не найдена</h1>
    },
]