import {configureStore} from "@reduxjs/toolkit";
import  cartReducer from "./cartSlice"
const appStore= configureStore({
    //this is one 'reducer' for the whole app
    // And  it can contain multiple reducers for the whole app
    reducer:{
        cart:cartReducer
    }

});
export default appStore;