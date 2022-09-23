import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import Avater from "../../components/avater";
import ErrorPage from './pages/errorPage';


function Routes() {
    return (
        <div className="routes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/avater" element={<Avater />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}

export default Routes;