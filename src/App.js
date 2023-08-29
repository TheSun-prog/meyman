// React modules
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
// Pages
import Test from './pages/Test/Test'
import Mainpage from './pages/Mainpage/Mainpage'
import HotelCatalog from './pages/HotelCatalog/HotelCatalog'
import HotelPage from './pages/HotelPage/HotelPage'
import Room from './pages/Room/Room'
import Booking from './pages/Booking/Booking'
import ModalServices from './components/hotelComponents/modals/ModalServices'

function App() {
  const [activeModalServices, setActiveModalServices] = useState(false)

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/hotelcatalog" element={<HotelCatalog />} />
        <Route
          path="/hotelcatalog/:hotelId"
          element={<HotelPage activeModalServices={setActiveModalServices} />}
        />
        <Route path="/hotelcatalog/:hotelId/:roomId" element={<Room />} />
        <Route path="/hotelcatalog/:hotelId/:roomId/booking" element={<Booking />} />
        <Route path="/test" element={<Test />} />
        <Route path='/*' element={<h1 className='text-center text-red-700 text-[50px] mt-10'>Страница не найдена</h1>} />
      </Routes>
      {activeModalServices && (
        <ModalServices
          handleCLickCloseModal={() => {
            setActiveModalServices(false)
          }}
        />
      )}
    </div>
  )
}

export default App
