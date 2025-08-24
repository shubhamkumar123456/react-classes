
// for first time -->  a) install node js
// b) npm i -g create-react-app


// step - create a react project
// a) npm create vite@latest


// React Js --> It is frontend javascript library used to building user Interface specially for single page application. it uses component based approach


// component --> it a small piece of code that can be reusable; a component can be declared using two way function or class based and can include html css and javascript code init;

// functional component  --> are similar like functions in javascript. but here functional component return a react element. and can include html css and javascript code

// JSX  --> it is extension(java script XML). with the help of xml you can write html inside react or javascript

// virtual DOM --> it is memory representation of actual DOM( copy of actual DOM). whenever your components state or prop changes it creates a new virtual DOM tree and then comapres it to the previous tree and then apply minimum set of changes necessary to actual DOM. this will increase the performance of react application

// State --> state are used to store the data that can be changed over a period of time

// HOOKS--> hooks are functions that are used to define state in your react application.hooks can be used in functional component only. because functional component are stateless component example --> useState, useRef(), useEffect(), useReducer,..etc

// useState()-->  it is a hook used to store the value and can also be used to re-render of component. it takes a array of two argument a variable and a function. variable is used to store the value. and function is used to update the value of variable. 
// NOTE--> whenever you call the update function it will rerender the component 

// useRef Hook  --> it is used to copy the memory address of any react element . it can directly manipulate the (DOM) Document object model without re-rendering of component

// How Browser understand JSX???
// browser can not understand JSX it can understand only javascript object so to need browser to understand jsx we need to convert jsx into regular javascript object with the help of transformer like babel and then pass it to the browser


// useEffect hook --> useEffect hook is used to run side effect such as updating the Dom element , fetching api, etc . it takes two argument, a  callback function and a array of dependency . if array of dependency is blank useEffect will run only one time


// useNavigate hook --> similar like window.location.href or <Link> tag



// whenever you open your webpage on browser it creates a DOM of the webpage
