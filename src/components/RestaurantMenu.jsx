import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{

    const {resId}=useParams();//it returns the object with the id, here we are destructuring it


    console.log(resId)
    const resInfo=useRestaurantMenu(resId);//custom react hook
    console.log(resInfo)
    if(resInfo===null) return <Shimmer/>
    const{name,costForTwoMessage,cuisines}=resInfo.cards[2].card.card.info
    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{costForTwoMessage}</p>
            <h3>{cuisines.join(", ")}</h3>
            <h2>Menu</h2>
            {/*add the menu items from the api*/}
            <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Coke</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;