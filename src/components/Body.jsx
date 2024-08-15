import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";
//useState is used to maintain  the state of your react component/react app

const Body = () => {
    //this is how you create a state variable , here we pass a default value here
    //use state return an array
    //will also work if we use const arr and then assign arr to use state
    const [listOfRestaurants, setListOfRestaurants]=useState(resList)
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter(
                        (item) => item.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredRestaurants);
                }}>Top rated Restaurants</button>
            </div>
            <div className="res-container">
                {/*<RestaurantCard resName="La Pino'z Pizza" cusine="Pizza,Pasta,Italian"/>*/}
                {/*<RestaurantCard resName="KFC" cusine="Chicken,Burger,FastFood"/>*/}
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))
                }
            </div>
        </div>
    )
}
export default Body;