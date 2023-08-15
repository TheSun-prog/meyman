import MainPage from "./pages/MainPage/MainPage";
import Signup from "./components/Base/Auth/SingUp/Signup";
import Signin from "./components/Base/Auth/SingIn/Signin";
import {Route, Routes} from "react-router-dom";
import HotelCatalog from "./pages/HotelCatalog/HotelCatalog";
import ScrollToTop from "./components/Base/ScrollToTop/ScrollToTop";
import HotelCard from "./components/Base/HotelCard/HotelCard";


function App() {

    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/hotelcatalog" element={<HotelCatalog/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Signin/>}/>
                <Route path="/test" element={<HotelCard/>}/>
            </Routes>
        </>
    );
}

export default App;

