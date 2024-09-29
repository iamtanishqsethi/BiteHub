import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu=()=>{

    const {resId}=useParams();//it returns the object with the id, here we are destructuring it
    const [showIndex,setShowIndex]=useState(null);

    console.log(resId)
    const resInfo=useRestaurantMenu(resId);//custom react hook
    // console.log(resInfo)
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
    const categorys = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") )
    // console.log(categorys)
    if(resInfo===null) return <Shimmer/>
    const{name,costForTwoMessage,cuisines}=resInfo.cards[2].card.card.info
    return(
        <div className=" flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-gray-100 p-8 my-8 w-6/12 rounded-lg">
                <h1 className="text-4xl my-4 font-medium">{name}</h1>
                <p>.{costForTwoMessage}.
                    {cuisines.join(", ")}.
                </p>
            </div>


            {categorys.map((category,index) => (
                <ResCategory key={category?.card?.card?.name} data={category?.card?.card}
                             showItems={index===showIndex && true}
                setShowIndex={()=>setShowIndex(index)}/>
            ))}
        </div>
    )
}
export default RestaurantMenu;