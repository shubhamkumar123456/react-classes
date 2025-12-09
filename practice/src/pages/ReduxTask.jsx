import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../redux/DataSlice';
import ThemeState from '../../Context/ThemeState';

const ReduxTask = () => {

        let ctx = useSelector((state)=>state.taskApp);
        console.log(ctx)

        let dispatch = useDispatch()


        function handleDelete(ele, i){
            console.log(ele)
            console.log(i)

            dispatch(deleteTask(i))  //  dispatch({type:'' ,payload:value})

        }
  return (
    <ThemeState>
    <div>
      <h1>Redux task page</h1>

      <table>
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
                ctx.arr.map((ele,i)=>{
                    return <tr key={ele.id}>
                        <td>{i+1}</td>
                        <td>{ele.task}</td>
                        <td>{ele.status}</td>
                        <td>
                            <button onClick={()=>handleDelete(ele,i)}>Delete</button>
                        </td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
    </ThemeState>
  )
}

export default ReduxTask
