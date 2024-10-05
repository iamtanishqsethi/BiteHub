import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import {CDN_URL} from "../utils/constants";

const RestaurantMenu=()=>{

    const {resId}=useParams();//it returns the object with the id, here we are destructuring it
    const [showIndex,setShowIndex]=useState(null);

    // console.log(resId)
    const resInfo=useRestaurantMenu(resId);//custom react hook
    // console.log(resInfo)
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
    const categorys = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") )
    // console.log(categorys)
    if(resInfo===null) return <Shimmer/>
    console.log(resInfo.cards[2].card.card.info)
    const{name,costForTwoMessage,cuisines,cloudinaryImageId}=resInfo.cards[2].card.card.info
    return(
        <div className=" relative flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center justify-center bg-gray-700 p-8 my-8 w-6/12 rounded-lg">

                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 rounded-lg"
                    style={{backgroundImage: `url(${CDN_URL + cloudinaryImageId})`}}
                ></div>

                {/* Content Div */}
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl text-white my-4 font-medium">{name}</h1>
                    <p className="text-lg text-white">
                        {costForTwoMessage}. {cuisines.join(", ")}.
                    </p>
                </div>
            </div>


            {categorys.map((category, index) => (
                <ResCategory key={category?.card?.card?.name} data={category?.card?.card}
                             showItems={index === showIndex && true}
                             setShowIndex={() => setShowIndex(index)}/>
            ))}
        </div>
    )
}
export default RestaurantMenu;