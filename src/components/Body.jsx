import React, {useEffect} from "react";
import RestaurantCard ,{withIsVeg}from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

// import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants]=useState([])
    const [filteredRestaurants, setFilteredRestaurants]=useState([])
    const RestaurantCardVeg=withIsVeg(RestaurantCard)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data= await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.73826769999999&lng=77.0822151&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const json = await data.json();
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
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


    console.log(listOfRestaurants)
    const [searchText, setSearchText] = useState('');
    return listOfRestaurants.length===0?(<Shimmer/>):(
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input type="text"  data-testid="searchInput" className="border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                        //wherever there is a change in state variable react triggers a new reconciliation cycle ie it re-renders the whole component every time
                    }}/>

                    <button  className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={

                        ()=>{
                            //filter res cards and update ui
                            //search text
                            const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredRestaurants(filteredRestaurant);
                            console.log(searchText)

                        }
                    }>Search</button>
                </div>
                <div className="m-4 p-4 rounded-lg">
                    <button className="px-4 py-2 bg-green-100 m-4" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            (item) => item.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredRestaurants);
                    }}>Top rated Restaurants
                    </button>
                </div>

            </div>
            <div className="res-container flex flex-wrap items-center justify-center py-4 px-2">
                {filteredRestaurants.map((restaurant) => (
                    <Link className={"resCard-link"} key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id }>
                        {restaurant?.info?.veg?<RestaurantCardVeg resData={restaurant}/>:<RestaurantCard  resData={restaurant}/>}

                    </Link>
                ))
                }
            </div>
        </div>
    )
}
export default Body;