import React from "react";
import ReactDOM from "react-dom/client";
//creating nested elements
const parent=React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
        {id:"child1"},
        [React.createElement("h1",
            {},"This is Namaste React 💀"
        ),React.createElement("h2",{},"I am an h2 tag")]
    ),React.createElement("div",
        {id:"child2"},
        [React.createElement("h1",
            {},"I am an h1 tag"
        ),React.createElement("h2",{},"I am an h2 tag")]
    )]
);
console.log(parent);
//creating a h1 using react

// const heading=React.createElement("h1",{id:"heading"},"Hello World from react");//it takes 3 arguments the html element,an object and the content inside the element
//first of all react needs a root , where we can work
//its the job of react dom
//root is the place where all the react code will work/render
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);