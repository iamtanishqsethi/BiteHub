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
        <div className="res-card  m-4  p-4 w-[220px] h-[450px] rounded-lg items-center bg-gray-100 hover:bg-gray-300">
            <img className="res-logo  rounded-lg w-[200px] h-[50%] object-cover object-center object-fit"
                // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hgvtyqrxzvpwmbs361er"
                 src={CDN_URL+cloudinaryImageId}
                 alt="res-logo"
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="text-sm">{cuisines.join(', ')}</h4>
            <h4 className="text-sm">{avgRating} stars</h4>
            <h4 className="text-sm">{costForTwo}</h4>
            <h4 className="text-sm">{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard;