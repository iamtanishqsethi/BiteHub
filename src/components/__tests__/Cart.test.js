import {act} from "react-dom/test-utils"
import {fireEvent, render, screen} from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom"
import {BrowserRouter} from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json"
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA)
    })
})

it("should res menu component",async ()=>{
    await act(async ()=>render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter>
        ))
    const accordianHeader= screen.getByText("Signature Collection (6)")

    fireEvent.click(accordianHeader)
    const items = screen.getAllByTestId("item-list")
    expect(items.length).toBe(6)
    const addBtns= screen.getAllByRole("button", { name: "Add +" })
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument()


})