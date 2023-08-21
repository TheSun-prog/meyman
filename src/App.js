import './assets/css/App.css';
import {Route, Routes} from "react-router-dom";



function App() {
    return (
        <>
            <Routes>
                <Route path="/test" element={<Test/>}/>
            </Routes>
        </>
    );

}

export default App;

