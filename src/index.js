import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
// import store from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/*<Provider store={store}>*/}
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        {/*</Provider>*/}
    </BrowserRouter>
);


reportWebVitals();
