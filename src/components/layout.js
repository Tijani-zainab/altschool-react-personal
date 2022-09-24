import React from "react";
import { NavLink } from 'react-router-dom';
import "../App.css";

function Layout(props) { 

    let activeStyle = {
        textDecoration: "underline",
    };
    
    let activeClassName = "underline";

    return (
        <div className="layout">
            <NavLink className="layout--item" to="/" style={({isActive}) => isActive ? activeStyle : undefined} >Home</NavLink>
            <NavLink className="layout--item" to="/errorPage" style={({isActive}) => isActive ? activeClassName : undefined}>ErrorPage</NavLink>
        </div>
    );
}

export default Layout;