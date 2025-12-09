

function abc(){
    console.log("hello")
}

function xyz(a){
    a()
}

xyz(abc)   //abc callback function, xyz is higher order function

// memo (react memo)  --> is a higher order component used avoid unwanted re-rendering of any component
// it will only re-render the component if props value is changing

// useMemo  --> Hook
// useCallback -->

// useState, useRef, useNavigate, useDispatch, useSelector, useEffect, useReducer, useContext,
// Gsap  --> animation libray for html css and react
// motion.dev  --> animation library  --> react