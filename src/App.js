import ScrollToTop from "./components/Base/ScrollToTop/ScrollToTop";
import {useSelector} from "react-redux";
import AppRouter from "./links/AppRouter";


function App() {

    const owner = useSelector(state => state.owner)
    console.log(owner)

    return (<>
        {<ScrollToTop/>}
        <AppRouter/>
    </>);
}

export default App;
