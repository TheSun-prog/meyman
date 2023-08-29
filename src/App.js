// React modules
import {Route, Routes} from "react-router-dom";

// Pages
import Test from "./pages/Test/Test";
import Mainpage from "./pages/Mainpage/Mainpage";
import HotelCatalog from "./pages/HotelCatalog/HotelCatalog";
import HotelPage from "./pages/HotelPage/HotelPage";
import Room from "./pages/Room/Room";
import Booking from "./pages/Booking/Booking";
import Layout from "./components/Base/Layout/Layout";
import AuthPage from "./pages/AuthPage/AuthPage";
import RegPage from "./pages/RegPage/RegPage";
import ConfirmCode from "./pages/ConfirmCodePage/ConfirmCode";


function App() {
    return (
        <>
            <RegPage/>
            {/*<Routes>*/}
            {/*    <Route path='/' element={<Layout/>}>*/}
            {/*        <Route path="/" element={<Mainpage/>}/>*/}
            {/*        <Route path="/hotelcatalog" element={<HotelCatalog/>}/>*/}
            {/*        <Route path="/hotelcatalog/hotel" element={<HotelPage/>}/>*/}
            {/*        <Route path="/hotelcatalog/hotel/room" element={<Room/>}/>*/}
            {/*        <Route path="/hotelcatalog/hotel/room/booking" element={<Booking/>}/>*/}
            {/*        <Route path="/test" element={<Test/>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
        </>
    );

}

export default App;

