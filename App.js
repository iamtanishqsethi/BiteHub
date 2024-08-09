import React from "react";
import ReactDOM from "react-dom/client";
/*
* Header
*   -logo
*   -Nav items
* body
*   -search
*   -Restaurant container
*       -restaurantCards
*           -img
*           -name
*           -menu
*           -cuisine
*           -star rating
*           -ETA
* footer
*   -copyright\
*   -address
*   -contact*/

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018" alt=""/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const styleCard={
    backgroundColor:"#f0f0f0",
}
const RestaurantCard=(props)=>{
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hgvtyqrxzvpwmbs361er"
                alt="res-logo"/>
            <h3>{props.resName}</h3>
            <h4>{props.cusine}</h4>
            <h4>4.4 stars</h4>
            <h4>28mins</h4>
        </div>
    )
}
const Body = () => {
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resName="La Pino'z Pizza" cusine="Pizza,Pasta,Italian"/>
                <RestaurantCard resName="KFC" cusine="Chicken,Burger,FastFood"/>
            </div>
        </div>
    )
}
const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"))
// root.render(HeadingComponent)//cannot render it like this as it is a component
root.render(<AppLayout/>)//this syntax is understood by babel