import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../home";
import Avater from "../../components/avater";
import ErrorPage from "../errorPage";


function Routing() {
    return (
        <div className="routes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/avater" element={<Avater />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>

            {/* Nested Routes */}
            {/* <Route path="/users" element={<Users />}> 
                <Route path=":userId" element={<User />} /> 
            </Route> */}
        </div>
    );
}

export default Routing;