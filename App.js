import React from "react";
import ReactDOM from "react-dom/client";

//React Element(using core react) => object => render => html element
// const heading=React.createElement("h1",{id:"heading"},"Namaste  React")

//JSX(transpiled before it reaches to javascript engine)- parcel-> Babel
const heading=<h1 id="heading" className="head">Namaste React using jsx</h1>//react element
//JSX -> React.createElement->react element - js object->html element

//React  functional component
//Class based components(old)
//Functional components(new)
const Title=()=>(
    <h1>Title component</h1>
)
const num=1000
//component inside a component is Component Composition
const HeadingComponent=()=>(
    <div id="container">
        <Title/>
        <h2>
            {//here we can inject any js code and can any react element in it as well

                num
            }
        </h2>

        <h1>Namaste React Functional Component</h1>
    </div>
);
//for the above code we can write it without using {} and it will not include any return statement


const root= ReactDOM.createRoot(document.getElementById("root"))
// root.render(HeadingComponent)//cannot render it like this as it is a component
root.render(<HeadingComponent/>)//this syntax is understood by babel