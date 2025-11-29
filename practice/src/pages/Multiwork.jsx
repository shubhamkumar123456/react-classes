import React from 'react'
import { useRef } from 'react'
import { useReducer } from 'react'


function reducers(state, action){
    if(action.type==='increment'){
            return  {...state, count:state.count+1}  // {count:1, arr:[{},{},{}]}
    }
    if(action.type==='decrement'){
       return {...state, count:state.count-1} 
    }

    if(action.type==='add'){
        return {...state, arr:[...state.arr,action.payload]}  //{count:0, arr:[{},{},{},{}]}
    }
}

const Multiwork = () => {

    let inputRef = useRef()  //{current:undefined}  //{current:<input/>}

    const[state, dispatch] =  useReducer( reducers , {
        count:0,
        arr:[
            {id:1, task:"html study", status:"incompleted"},
            {id:2, task:"CSS study", status:"completed"},
            {id:3, task:"JS study", status:"incompleted"},
        ]
    })

    console.log(state)  // {count:0 , arr:[{},{},{}]}


    function handleAdd(e){
        e.preventDefault();
        // console.log(inputRef.current.value)
        let obj = {
            id:state.arr.length+1,
            status:'incompleted',
            task:inputRef.current.value
        }
        console.log(obj)
        dispatch({type:'add', payload:obj})
    }
  return (
    <div>
      <h1>I am multiwork page</h1>
      <h1>count : {state.count}</h1>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>

      <form action="" style={{background:"black" , padding:"10px", margin:"10px", width:"max-content"}}>
        <input ref={inputRef} type="text" placeholder='enter a task' />
        <button onClick={handleAdd}>Add Task</button>
      </form>

      <table border={1} cellPadding={'10px'}>
        <thead>
            <tr>
            <th>Sno</th>
            <th>Task</th>
            <th>Status</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {
                state.arr.map((ele, i)=>{
                    return <tr key={ele.id}>
                        <td>{i+1}</td>
                        <td>{ele.task}</td>
                        <td>{ele.status}</td>
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

export default Multiwork
