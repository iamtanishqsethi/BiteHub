import React, {useEffect} from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";
import {useState} from "react";

const Header=()=>{
     // let buttonName="login"
    const [buttonName, setButtonName] = React.useState("login");
    //if no dependency array , use effect is called on every component render
    //if dependency array is empty , then use effect is called on only initial render
    //if dependency array has some value, then it will only be called when the dependency changes
    useEffect(()=>{
        console.log("useEffect called")
    },[buttonName])
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt=""/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link className={"navItem"} to="/">Home</Link></li>{/*using anchor tag we are reloading the whole page , with react we can do this without reloading the whole page */}
                    {/*
                    we can use link component
                    react applications are known as single page application
                    every time we shift using link we are avoiding reloading everytime

                    html sees link component as anchor tag only,it's a wrapper over anchor tag
                    */}
                    <li><Link className={"navItem"} to="/about">About</Link></li>
                    <li><Link className={"navItem"}
                        to="/contact">Contact us</Link></li>
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