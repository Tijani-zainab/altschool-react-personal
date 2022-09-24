import React from "react";
import { NavLink } from 'react-router-dom';

function Layout(props) { 

    let activeStyle = {
        textDecoration: "underline",
    };
    
    let activeClassName = "underline";

    return (
        <div className="layout">
            <NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined} >Home</NavLink>
            <NavLink to="/errorPage" style={({isActive}) => isActive ? activeClassName : undefined}>ErrorPage</NavLink>
        </div>
    );
}

export default Layout;