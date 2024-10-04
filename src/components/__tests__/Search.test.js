import Body from "../Body";
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import {act} from "react-dom/test-utils"
import MOCK_DATA from "../mocks/mockResList.json"
import {BrowserRouter} from "react-router-dom";


//creating a dummy fetch function exactly similar to as the fetch function
global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("should  render the body component with search", async ()=>{
    await act(async ()=>render(<BrowserRouter><Body/></BrowserRouter>))
    // const cards=screen.getAllByTestId("rescard")
    // expect(cards.length).toBe(8);
    const searchButton= screen.getByRole("button", { name: "Search" })

    const searchInput=screen.getByTestId("searchInput")
    fireEvent.change(searchInput,{target:{value:"burger"}})
    fireEvent.click(searchButton)
    // expect(searchButton).toBeInTheDocument();
    const cards=screen.getAllByTestId("rescard")
    expect(cards.length).toBe(1)
})
