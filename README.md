# Namaste Food Website

# Routing in web apps

- client side routing(single page app) - the one we are using <Link> , we are not rendering/reloading the page every time page changes , it has all  the pages loaded the very first time page was loaded it does not make any new network call
- server side routing - it fetches the html page from the server side and reloads/renders  the whole page , traditional way

# React Life Cycle diagram
- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- Note: if we have two child class based components under one parent component
- react optimizes it by first rendering both the child components and batching them together 
- then entering the commit phase for both children in sequence (and executing the componentDidMount())

- React does this because when the commit phase start dom manipulation takes place
- and dom manipulation is the most expensive operation when loading a document

# Single Responsibility Principle
Any piece of code like a function , class, should have one single responsibility or purpose 
Or in simple words -> Modular code 

#  Types of Testing  (Developer)
- Unit Testing -> test the individual react components in isolation 
- Integration Testing -> testing the integration of these components 
- End to end testing - e2e testing -> testing the app as soon as user lands on page till the user leaves the app

React testing library uses - Jest 