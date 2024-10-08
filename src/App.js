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
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";



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
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userInfo}}>
                <div className="app">
                    <Header/>

                    <Outlet/>
                    <Footer/>
                </div>
            </UserContext.Provider>
        </Provider>


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

            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    }

    //if we have something which is not mentioned in our path , it will give  404 not found
])
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)//this syntax is understood by babel
//router provider is a component that take the app router
