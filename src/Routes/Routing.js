import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Home, ErrorPage, SignIn } from '../Pages';
import { Avater } from '../Components';

function Routing(props) {

    // const [isSignedIn, setIsSignedIn] = React.useState(false);

    // React.useEffect(() => { 
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             setIsSignedIn(true);
    //         } else {
    //             setIsSignedIn(false);
    //         }
    // }, []);


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