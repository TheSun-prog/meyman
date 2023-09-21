import {Routes, Route} from "react-router-dom"
import React from 'react'
import {publicRoutes} from "./routes"
import Layout from "../components/Base/Layout/Layout";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {publicRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element}/>
                )}
            </Route>
        </Routes>
    )
}

export default AppRouter