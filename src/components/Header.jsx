import React, {useContext, useEffect} from "react";
import {LOGO_URL} from "../utils/constants";
import {Link} from "react-router-dom";
import {useState} from "react";
import userContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";

const Header=()=>{
     // let buttonName="login"
    const [buttonName, setButtonName] = React.useState("login");
    //if no dependency array , use effect is called on every component render
    //if dependency array is empty , then use effect is called on only initial render
    //if dependency array has some value, then it will only be called when the dependency changes
    const {loggedInUser}=useContext(UserContext);
    console.log(loggedInUser)
    useEffect(()=>{
        console.log("useEffect called")
    },[buttonName])
    return(
        <div className="flex justify-between bg-green-200 shadow-lg m-3 rounded-xl">
            <div className="logo-container">
                <img className="w-24 m-4 rounded-[50%] object-center " src={LOGO_URL} alt=""/>
            </div>
            <div className="flex items-center justify-between">
                <ul className="flex p-4 m-4">
                    <li className="px-4 text-xl font-medium"><Link className={"navItem"} to="/">Home</Link></li>
                    {/*using anchor tag we are reloading the whole page , with react we can do this without reloading the whole page */}
                    {/*
                    we can use link component
                    react applications are known as single page application
                    every time we shift using link we are avoiding reloading everytime

                    html sees link component as anchor tag only,it's a wrapper over anchor tag
                    */}
                    <li className="px-4 text-xl font-medium"><Link className={"navItem"} to="/about">About</Link></li>
                    <li className="px-4 text-xl font-medium"><Link className={"navItem"}
                                                                   to="/contact">Contact us</Link></li>
                    <li className="px-4 text-xl font-medium">Cart</li>
                    <button className="login" onClick={() => {
                        buttonName === "login" ? setButtonName("logout") : setButtonName("login")//this will rerender not just  the button but the whole header component
                    }}>{buttonName}</button>
                    <li className="px-4 text-xl font-medium">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;