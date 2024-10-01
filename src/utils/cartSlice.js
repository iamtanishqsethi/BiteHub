import {createSlice} from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    //when creating a slice there are multiple small reducer  functions
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state )=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            //state =[] is modifying the local state variable
            //not the original state
            //so to modify it , we need to mutate the original state
            state.items.length=0;//will make it empty array

            //we can also mutate the original state bby returning an empty object
            //return {items:[]}
        }
    }
})
export const {addItem,removeItem,clearCart}= cartSlice.actions
//when we are exporting we are exporting one reducer from it
//and a reducer is nothing but  a combination of multiple small reducers
export default cartSlice.reducer