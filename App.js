import React from "react";
import ReactDOM from "react-dom/client";

//React Element(using core react) => object => render => html element
const heading=React.createElement("h1",{id:"heading"},"Namaste  React")

//JSX(transpilled beforit reaches to javascript engine)
const jsxHeading=<h1 id="heading">Namaste React using jsx</h1>//react element

const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading)
