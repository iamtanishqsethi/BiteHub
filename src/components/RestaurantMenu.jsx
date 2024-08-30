import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {MENU_API_URL} from "../utils/constants";

const RestaurantMenu=()=>{
    const [resInfo,setResInfo]=useState(null);

    const {resId}=useParams();//it returns the object with the id, here we are destructuring it
    console.log(resId)
    useEffect(()=>{
        fetchMenu()
    },[])
    //the dependency is an empty array because we only have to fetch one , if no depen it will fetch every time
    const fetchMenu=async ()=>{
        const data=await fetch (MENU_API_URL+resId)
        const json = await data.json();
        setResInfo(json?.data)
    }
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