import {CDN_URL} from "../utils/constants";

const ItemList= ({items})=>{
    console.log(items)
    return(
        <div>
            {items.map(item=> <div key={item.card.info.id} className="p-2 m-2 border-b-2">
                <div className="flex flex-wrap justify-between align-items-center ">
                    <div className="w-[50%]">
                        <div className="py-2">
                            <span className="font-medium">{item.card.info.name}</span>
                            <br/>
                            <span> Rs {item.card.info.price / 100}</span>
                        </div>
                        <p className="text-sm font-medium text-gray-400">{item.card.info.description}</p>
                    </div>
                    <div className="w-[30%]">
                        <div className="absolute">
                            <button
                                className="p-2 mx-16 bg-white shadow-lg rounded-lg  text-blue-400 font-bold">
                                Add +
                            </button>
                        </div>
                        <img src={CDN_URL + item?.card?.info?.imageId} alt="" className="w-40 h-40 rounded-lg"/>


                    </div>
                </div>


            </div>)}
        </div>
    )
}
export default ItemList