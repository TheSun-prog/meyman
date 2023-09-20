// React modules
import {Route, Routes} from "react-router-dom";
// Pages
import Test from "./pages/Test/Test";
import Mainpage from "./pages/Mainpage/Mainpage";
import HotelCatalog from "./pages/HotelCatalog/HotelCatalog";
import HotelPage from "./pages/HotelPage/HotelPage";
import RoomPage from "./pages/RoomPage/RoomPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import Layout from "./components/Base/Layout/Layout";
import BusinessOwnerNotification from "./pages/BusinessOwnerNotification/BusinessOwnerNotification";
import FillingRoomDetails from "./pages/FillingRoomDetails/FillingRoomDetails";
import AuthPage from "./pages/AuthPage/AuthPage";
import ConfirmCode from "./pages/ConfirmCodePage/ConfirmCode";
import RegPage from "./pages/RegPage/RegPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ScrollToTop from "./components/Base/ScrollToTop/ScrollToTop";
import BusinessMainPage from "./pages/BusinessMainPage/BusinessMainPage";
import BusinessAccountData from "./pages/BusinessAccountData/BusinessAccountData";
import FillingHotelDetails from "./pages/FillingHotelDetails/FillingHotelDetails";
import PersonalAreaPage from "./pages/PersonalAreaPage/PersonalAreaPage";
import PersonalInfoPage from "./pages/PersonalAreaPage/PersonalInfoPage";
import HistoryReservationPage from "./pages/PersonalAreaPage/HistoryReservationPage";
import RestorePassEmail from "./pages/RestorePassEmail/RestorePassEmail";
import RestorePassCode from "./pages/RestorePassCode/RestorePassCode";
import RestorePassNewPass from "./pages/RestorePassNewPass/RestorePassNewPass";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import WishListPage from "./pages/WishListPage/WishListPage";
import Support from "./pages/Support/Support";
import {useSelector} from "react-redux";


function App() {

    const owner = useSelector(state => state.owner)
    console.log(owner)

    return (<>
        {<ScrollToTop/>}
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Mainpage/>}/>
                <Route path="/hotelcatalog" element={<HotelCatalog/>}/>
                <Route path="/hotelcatalog/:hotelId" element={<HotelPage/>}/>
                <Route path="/hotelcatalog/:hotelId/:roomId" element={<RoomPage/>}/>
                <Route
                    path="/hotelcatalog/:hotelId/:roomId/booking"
                    element={<BookingPage/>}
                />
                <Route path="/personal-area" element={<PersonalAreaPage/>}/>
                <Route path="/personal-area/history-reservation" element={<HistoryReservationPage/>}/>
                <Route path="/personal-area/personal-info" element={<PersonalInfoPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/register'} element={<RegPage/>}/>
                <Route path={'/confirmCode'} element={<ConfirmCode/>}/>
                <Route path={'/auth'} element={<AuthPage/>}/>
                <Route
                    path="/businessMainPage"
                    element={<BusinessMainPage/>}
                />
                <Route
                    path="/businessAccountData"
                    element={<BusinessAccountData/>}
                />
                <Route
                    path="/fillingHotelDetails"
                    element={<FillingHotelDetails/>}
                />
                <Route
                    path="/fillingRoomDetails"
                    element={<FillingRoomDetails/>}
                />
                <Route
                    path="/businessOwnerNotification"
                    element={<BusinessOwnerNotification/>}
                />

                <Route path="/support" element={<Support/>}/>

                <Route path="/test" element={<Test/>}/>

                <Route path="/restorePassEmail" element={<RestorePassEmail/>}/>
                <Route path="/restorePassCode" element={<RestorePassCode/>}/>
                <Route path="/restorePassNewPass" element={<RestorePassNewPass/>}/>
                <Route path="/favorites" element={<FavoritesPage/>}/>
                <Route path="/favorites/:id" element={<WishListPage/>}/>

                <Route
                    path="/*"
                    element={<h1 className="text-center text-red-700 text-[50px] mt-10">
                        Страница не найдена
                    </h1>}
                />
            </Route>
        </Routes>
    </>);
}

export default App;
