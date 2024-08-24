import React from "react";
import {LOGO_URL} from "../utils/constants";
import {useState} from "react";

const Header=()=>{
     // let buttonName="login"
    const [buttonName, setButtonName] = React.useState("login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt=""/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        buttonName==="login"?setButtonName("logout"):setButtonName("login")//this will rerender not just  the button but the whole header component
                    }}>{buttonName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;