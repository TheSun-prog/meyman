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
import AuthPage from "./pages/AuthPage/AuthPage";
import RegPage from "./pages/RegPage/RegPage";
import ConfirmCode from "./pages/ConfirmCodePage/ConfirmCode";
import AboutPage from "./pages/AboutPage/AboutPage";
import ScrollToTop from "./components/Base/ScrollToTop/ScrollToTop";
import PersonalAreaPage from "./pages/PersonalAreaPage/PersonalAreaPage";
import PersonalInfoPage from "./pages/PersonalAreaPage/PersonalInfoPage";


function App() {
    return (<>
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
                <Route path="/personal-area" element={<PersonalAreaPage />}/>
                <Route path="/personal-area/personal-info" element={<PersonalInfoPage />}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/register'} element={<RegPage/>}/>
                <Route path={'/confirmCode'} element={<ConfirmCode/>}/>
                <Route path={'/auth'} element={<AuthPage/>}/>
                <Route path="/test" element={<Test/>}/>
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

