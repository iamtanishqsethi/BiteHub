import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";//this will create a routing configuration
//router provider will provide this routing configuration to our app
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";


const AppLayout=()=>{
    //some authentication code
    const [userInfo,setUserInfo]=useState(null);
    useEffect(()=>{
        //api call here
        //send user data
        const data={
            name:"Tanishq Sethi"
        }
        setUserInfo(data.name)
    },[])

    return(
        <UserContext.Provider value={{loggedInUser: userInfo}}>
            <div className="app">
                <Header/>
                {
                    /*
                    if path ='/'
                    if path =/about = about component in child
                    if path =/contact = contact component in child
                    */
                }
                <Outlet/>{/*whenever there is change in the path the outlet is changed in the app from the children routes
            the outlet is replaced according to the path in the html*/}
            </div>
        </UserContext.Provider>

    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,//load this element
        children: [
            //children routes
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>

            }
        ],
        errorElement:<Error/>
    }

    //if we have something which is not mentioned in our path , it will give  404 not found
])
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)//this syntax is understood by babel
//router provider is a component that take the app router
