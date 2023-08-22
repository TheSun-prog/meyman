// React modules
import {Route, Routes} from "react-router-dom";

// Pages
import Test from "./pages/Test/Test";


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

