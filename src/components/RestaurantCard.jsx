import React from "react";
import {CDN_URL} from "../utils/constants";//method to import named export

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    }=resData?.info;
    // console.log(CDN_URL+cloudinaryImageId)
    return (
        <div data-testid="rescard" className=" transition ease-in-out res-card  m-4  p-4 w-[280px] h-[480px] rounded-lg items-center bg-gray-100 hover:bg-gray-300 hover:scale-105">
            <img className="res-logo  rounded-lg w-[250px] h-[60%] object-cover object-center object-fit"
                // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hgvtyqrxzvpwmbs361er"
                 src={CDN_URL+cloudinaryImageId}
                 alt="res-logo"
            />
            <h3 className="font-bold py-2 text-xl">{name}</h3>
            <h4 className="text-sm font-bold text-gray-500">{cuisines.join(', ')}</h4>
            <h4 className="text-sm font-bold text-gray-500">{avgRating} ⭐</h4>
            <h4 className="text-sm font-bold text-gray-500">{costForTwo}</h4>
            <h4 className="text-sm font-bold text-gray-500"> 🕐{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}
//higher order component 
export const withIsVeg=(RestaurantCard)=>{
    return (props)=>{//this is a new component it is returning
        return (
            <div>
                <label className="absolute bg-green-500 text-white m-2 p-2 rounded-lg z-10">Pure Veg</label>
                <RestaurantCard  {...props}/>
            </div>

        )
    }
}

export default RestaurantCard;