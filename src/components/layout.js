import React from "react";
import {Navlink} from 'react-router-dom';

function Layout(props) { 

    let activeStyle = {
        textDecoration: "underline",
    };
    
    let activeClassName = "underline";

    return (
        <div className="layout">
            <Navlink to="/" style={({isActive}) => isActive ? activeStyle : undefined} >Home</Navlink>
            <Navlink to="/errorPage" style={({isActive}) => isActive ? activeClassName : undefined}>ErrorPage</Navlink>
        </div>
    );
}

export default Layout;