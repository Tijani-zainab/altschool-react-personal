import React from "react";
import { signInWithRedirect, auth, provider } from "../Config/Config";
import "../App.css";

const SignIn = () => { 

    const handleSignIn = () => {
        signInWithRedirect(auth, provider);
    }

    return (
        <div className="sign-in">
            <h1>Sign In</h1>
            <button onClick={handleSignIn} className="sign--btn">Sign In</button>
        </div>
    );
}

export default SignIn;