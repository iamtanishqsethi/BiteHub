import Header from "../Header";
import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom"

it("should load header with login button ",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>

    )
    // const loginButton = screen.getByRole("button", {name:"login"})
    // const loginButton= screen.getByText("login")
    const cartItem=screen.getByText("Cart (0 items)")
    expect(cartItem).toBeInTheDocument();

})
it("should load header with login to logout button  ",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>

    )

   const loginButton= screen.getByRole("button", { name: "login" })
    //clicking element from test case
    fireEvent.click(loginButton)
    const logoutButton= screen.getByRole("button", { name: "logout" })
    expect(logoutButton).toBeInTheDocument();

})