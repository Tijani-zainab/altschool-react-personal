import React, { useEffect } from "react";
import { signInWithRedirect, auth, provider, getRedirectResult } from "../Config/Config";
import "../App.css";

const SignIn = () => { 

    const handleSignIn = () => {
        signInWithRedirect(auth, provider);
    }


    useEffect(() => {
       getRedirectResult(auth).then((result) => {
              console.log(result);
        }).catch((error) => {
            console.log(error);
        });

    }, []);


    return (
        <div className="sign-in">
            <h1>Sign In</h1>
            <button onClick={handleSignIn} className="sign--btn">Sign In</button>
        </div>
    );
}

export default SignIn;