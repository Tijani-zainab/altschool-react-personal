import React from "react";
import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, ErrorPage, SignIn } from '../Pages';
import { UserProfile } from '../Components';
import { auth } from '../Config/Config';

function Routing(props) {

    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => { 
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsSignedIn(true);
            } else {
                setIsSignedIn(false);
            }
        });

        return () => unsubscribe();

    }, []);


    return (
        <div className="routes">
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-in" element={<UserProfile />} />
                <Route path="/user-profile" render={() => (!isSignedIn ? <Home /> : <SignIn />)} />
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