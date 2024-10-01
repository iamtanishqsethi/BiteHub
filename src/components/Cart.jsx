import {useDispatch, useSelector} from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";
import {Link} from "react-router-dom";

const Cart=()=>{

    //if we are not subscribing to the correct part of the store it will result in a huge performance loss
    //we can also subscribe to  the whole store and the  extract the part needed
    //it will work in both the cases
    //but the second one is very inefficient
    //in the second case when anything changes in the store the cart will get to know
    //when scaling the app this will become very inefficient
    //we only want the cart to know only about the changes in the cart items

    const cartItems=useSelector((store)=>store.cart.items);

    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return(
        <div className="text-center m-10 p-10">
            <h1 className="text-4xl font-bold">Cart</h1>
            <div className={"w-6/12 m-auto"}>
                <button className={"p-2 m-2 bg-gray-600 text-white rounded-lg"}
                    onClick={()=> handleClearCart()}
                >Clear cart</button>
                {cartItems.length===0&&
                    <div>
                        <h1 className={"text-2xl text-gray-400"}> Looks like your Cart is Empty !!</h1>
                        <h2 className={"text-xl text-gray-400"}>To order Go to <Link  className={" text-gray-600 font-medium"} to={"/"}>Home</Link></h2>
                    </div>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;