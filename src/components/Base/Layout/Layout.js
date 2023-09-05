import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"
import FillingRoomDetails from "../../../pages/FillingRoomDetails/FillingRoomDetails";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between">
      <Header/>
        <div className="min-h-[calc(100vh-100px)]">
            <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}

export default Layout
