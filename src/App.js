import MainPage from "./pages/MainPage/MainPage";
import Signup from "./components/Auth/SingUp/Signup";
import Signin from "./components/Auth/SingIn/Signin";
import {Route, Routes} from "react-router-dom";
import HotelCatalog from "./pages/HotelCatalog/HotelCatalog";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HotelCard from "./components/HotelCard/HotelCard";


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

