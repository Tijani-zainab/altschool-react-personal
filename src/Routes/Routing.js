import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Home, ErrorPage } from '../Pages';
import { Avater } from '../Components';

function Routing(props) {
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