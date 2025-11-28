import React, { useReducer, useRef } from 'react'

const Todo = () => {

    let inputRef = useRef()  //  {current:undefined}   //{current:<input ref={inputRef} type="text"  placeholder='enter a task'/>}

    function reducers(state, action){  // this is action {value:obj, name:"add kro"}
        if(action.name==='add kro'){
            return [...state,action.value]  //[{},{},{},{}]
        }
    }

    const [state, dispatch] = useReducer(reducers, [
        {id:1, task:'sbji lana hai'},
        {id:2, task:'html study krna hai'},
        {id:3, task:'javascript code krna hai'},
    ] )

    console.log(state)     //  [{},{},{}]

    function handleSubmit(e){
        e.preventDefault();
        let value = inputRef.current.value;
        console.log(value)
        let obj = {
            task:value,
            id:state.length +1
        }

        dispatch({value:obj, name:"add kro"})   //disptach ke andr jo bhi likhte ho wo action kehlata


    }
  return (
    <div>
      <h1>THis is Todo using useReducer</h1>
      <form action="">
        <input ref={inputRef} type="text"  placeholder='enter a task'/>
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <table>
        <thead>
            <tr>
                <th>Sno</th>
                <th>TaskName</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
                {
                    state.map((ele,i)=>{
                        return <tr key={ele.id}>
                            <td>{i+1}</td>
                            <td>{ele.task}</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    })
                }
        </tbody>
      </table>
    </div>
  )
}

export default Todo
