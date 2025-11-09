import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

function Navbar(){
    let selectRef = useRef()  //{current : undefined}

    let navigate = useNavigate()  //  hook is used to navigate from one page to other similar like anchor tag

    function handleSelect(e){
        // console.log("hello")
        console.log(e.target.value)
        if(e.target.value === 'Form using useRef' ){
            navigate('/form')
        }

    }
    return(
        <div className="navbar">
           <h3>React Webpage</h3>

            <select onChange={handleSelect} ref={selectRef} name="" id="">
                <option value="">Select page</option>
                <option value="Form using useRef">Form using useRef</option>
                <option value="option 2">option 2</option>
                <option value="ption 3">option 3</option>
            </select>

           <ul>
            <li> <Link to={'/'}> Home</Link> </li>
            <li> <Link to={'/home'}>Home 1</Link> </li>
            <li> <Link to={'/counter'}> CounterApp</Link> </li>
            <li> <Link to={'/conditional'}> Conditional Rendering</Link> </li>
            <li> <Link to={'/effect'}>Use Effect Page</Link> </li>
           </ul>
        </div>
    ) 
}

export default Navbar