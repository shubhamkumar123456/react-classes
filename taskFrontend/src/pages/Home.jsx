import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

const Home = () => {
  let userData = JSON.parse(localStorage.getItem('tasksAuth'))
  console.log(userData)
  console.log(userData._id)


  let taskRef = useRef()
  let dateRef = useRef()


 async function handleSubmit(e){
      e.preventDefault();
      let obj ={
        taskName:taskRef.current.value,
        status:"incompleted",
        date:dateRef.current.value
      }
      let res = await fetch(`http://localhost:8080/api/tasks/create/${userData._id}`,{
        method:"POST",
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify(obj)
      })

      let data = await res.json();
      console.log(data)
      toast.success(data.msg, {position:"top-center"})
      getData()
  }

  const [arr, setarr] = useState([]);

  async function getData(){
      let res = await fetch(`http://localhost:8080/api/tasks/task/${userData._id}`);
      let data = await res.json();
      console.log(data)
      console.log(data.data)
      setarr(data.data)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <h1>This is Home Page</h1>
      <form action="">
          <input ref={taskRef} className='border px-4 py-2 rounded  mx-2' type="text" placeholder='enter task name' />
          <input ref={dateRef} className='border px-4 py-2 rounded  mx-2' type="date" />
          <button onClick={handleSubmit} className='border px-4 py-2 rounded  mx-2'>Submit</button>
      </form>

      <table>
          <thead>
              <tr>
                <th>Sno</th>
                <th>TaskName</th>
                <th>Status</th>
                <th></th>
              </tr>
          </thead>

          <tbody>
            {
              arr.map((ele, i)=>{
                return <tr key={ele._id}>
                    <td className='px-4'>{i+1}</td>
                    <td>{ele.taskName}</td>
                    <td>{ele.date}</td>
                    <td>
                      <button className='bg-green-500 px-4 py-2 rounded'>Delete Task</button>
                    </td>
                </tr>
              })
            }
          </tbody>
      </table>
    </div>
  )
}

export default Home
