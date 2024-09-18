import React, {useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
//useState is used to maintain  the state of your react component/react app

const Body = () => {
    //this is how you create a state variable , here we pass a default value here
    //use state return an array
    //will also work if we use const arr and then assign arr to use state
    const [listOfRestaurants, setListOfRestaurants]=useState([])
    const [filteredRestaurants, setFilteredRestaurants]=useState([])
    //use effect will be called after the whole body is rendered

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data= await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.73826769999999&lng=77.0822151&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        //optional chaining
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        //this code  is not working correctly now

    }

    // const onlineStatus=useOnlineStatus()
    // if(onlineStatus===false){
    //     return (
    //         <h1>Looks like you are offline!!</h1>
    //     )
    // }

    //for loading screen
    //latest practice is to show a shimer ui till the data from the api is loaded
    //shimer ui is like a skeleton of how the webpage will look like after rendering

    const [searchText, setSearchText] = useState('');
    return listOfRestaurants.length===0?(<Shimmer/>):(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                        //wherever there is a change in state variable react triggers a new reconciliation cycle ie it re-renders the whole component every time
                    }}/>

                    <button onClick={

                        ()=>{
                            //filter res cards and update ui
                            //search text
                            const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredRestaurants(filteredRestaurant);
                            console.log(searchText)

                        }
                    }>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter(
                        (item) => item.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredRestaurants);
                }}>Top rated Restaurants</button>
            </div>
            <div className="res-container">
                {/*<RestaurantCard resName="La Pino'z Pizza" cusine="Pizza,Pasta,Italian"/>*/}
                {/*<RestaurantCard resName="KFC" cusine="Chicken,Burger,FastFood"/>*/}
                {filteredRestaurants.map((restaurant) => (
                    <Link className={"resCard-link"} key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id }> <RestaurantCard  resData={restaurant}/></Link>
                ))
                }
            </div>
        </div>
    )
}
export default Body;