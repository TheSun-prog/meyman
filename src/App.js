
import { Link, Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import Auth from './pages/Auth/Auth';
import Header from './components/Base/Header&Footer/Header/Header';
import Footer from './components/Base/Header&Footer/Footer/Footer';

function App() {
  return (
    <div className='' >
      <Header/>
      <Routes>
        <Route path="/" element={<div className='text-[40px] text-center'>Main <br /><Link to="/auth/accdata">Go to form</Link></div>} />
        <Route path="/auth/accdata" element={<Auth />} />
      </Routes>
      <Auth />
      <Footer/>
    </div>
  );
}

export default App;
