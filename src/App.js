// React modules
import { Route, Routes } from "react-router-dom";
// Pages
import Test from "./pages/Test/Test";
import Mainpage from "./pages/Mainpage/Mainpage";
import HotelCatalog from "./pages/HotelCatalog/HotelCatalog";
import HotelPage from "./pages/HotelPage/HotelPage";
import Room from "./pages/Room/Room";
import Booking from "./pages/Booking/Booking";
import Layout from "./components/Base/Layout/Layout";

function App() {
  return (
    <>
         <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/hotelcatalog" element={<HotelCatalog />} />
          <Route path="/hotelcatalog/:hotelId" element={<HotelPage />} />
          <Route path="/hotelcatalog/:hotelId/:roomId" element={<Room />} />
          <Route
            path="/hotelcatalog/:hotelId/:roomId/booking"
            element={<Booking />}
          />
            <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/register'} element={<RegPage/>}/>
                <Route path={'/confirmCode'} element={<ConfirmCode/>}/>
                <Route path={'/auth'} element={<AuthPage/>}/>
            <Route
                path="/FillingRoomDetails"
                element={<FillingRoomDetails/>}
          />
          <Route
            path="/BusinessOwnerNotification"
            element={<BusinessOwnerNotification/>}
          />

          <Route path="/test" element={<Test />} />
          <Route
            path="/*"
            element={
              <h1 className="text-center text-red-700 text-[50px] mt-10">
                Страница не найдена
              </h1>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
