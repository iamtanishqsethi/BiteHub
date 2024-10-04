import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"


// describe("contact us test cases",()=>{
//
// })
//with the above syntax we can group some of the test cases
//we can also have describe inside a  describe as well
//in describe we can use beforeAll() to run before all tst cases
// and also a beforeEach() and similarly we have afterAll() and  afterEach()

//test can also be written as it; it is an alias for test

test("should load contact us component ",()=>{
    render(<Contact/>)//this will be rendered to the js dom
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument();
})
test("should load button inside contact ",()=>{
    render(<Contact/>)//this will be rendered to the js dom
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
})
