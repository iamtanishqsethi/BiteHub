import ItemList from "./ItemList";
import {useState} from "react";

const ResCategory=({data,showItems,setShowIndex})=>{
    // const [showItems,setShowItems]=useState(false);
    const handleClick=()=>{
        // setShowItems(!showItems)//toggle feature
        setShowIndex();
    }
    return(
        <div className="w-6/12 bg-gray-100  shadow-lg p-4 mx-auto my-4 rounded-lg ">
            <div className="flex justify-between cursor-pointer" onClick={
                handleClick
            }>
                <span className="text-lg font-medium">{data.title} ({data?.itemCards?.length})</span>
                <span>🔻</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}

        </div>


    )
}
export default ResCategory;