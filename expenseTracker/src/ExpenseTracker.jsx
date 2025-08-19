import React, { useRef } from 'react'
import { useState } from 'react'

const ExpenseTracker = () => {

    let creditRef = useRef()
    let debitRef = useRef()
    let placeRef = useRef()
    let dateRef = useRef()
  
    

    const [arr, setArr] = useState([
        {
            id: 1,
            credited: 35000,
            date: "01-08-2025",
            debited: 0,
            place: 'salary'
        },
        {
            id: 2,
            credited: 1500,
            date: "05-08-2025",
            debited: 0,
            place: 'bua ke ghar'
        },
        {
            id: 3,
            credited: 0,
            date: "05-08-2025",
            debited: 1000,
            place: 'dinner'
        },
        {
            id: 4,
            credited: 0,
            date: "06-08-2025",
            debited: 300,
            place: 'zoo'
        },
    ])

    function handleDelete(obj, i){
        console.log(obj)
        console.log(i)

        // method 1- splice method
        let copyArr = [...arr]
        copyArr.splice(i, 1)
        console.log(copyArr)

        setArr(copyArr)

        // method 2- using filter method

        // let filteredArr = arr.filter((val)=> val.id  !== obj.id   )  //[]
        // console.log(filteredArr)

        // setArr(filteredArr)


        // method -3
            // findIndex
            // splice()
            
        // arr.splice(i, 1)


    }


    function handleSubmit(e){
        e.preventDefault()
        // console.log("hello")
       
        let obj = {
            credited:creditRef.current.value,
            debited:debitRef.current.value,
            place:placeRef.current.value,
            date:dateRef.current.value,
        }
        console.log(obj)
        if(!obj.place && !obj.date){
            alert("please fill required fields")
            return
        }
        let copyArr = [...arr];
        copyArr.push(obj)


    
        setArr(copyArr)
        // arr.push(obj);
        // console.log(arr)
    }

    return (
        <div className='expensePage'>
            <h1 className='title'>This is Expense Tracker Application</h1>

            <form action="">
                <input ref={creditRef} id='credit' type="number" placeholder='credit amount' />
                <input ref={debitRef} id='debit' type="number" placeholder='debit amount' />
                <input ref={placeRef} id='place' type="text" placeholder='Place' />
                <input ref={dateRef} id='date' type="date" placeholder='date' />
                <button onClick={handleSubmit}>Add Expense</button>
            </form>

            <table border={1} cellPadding={'10px'}>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Credited Amount</th>
                        <th>Debited Amount</th>
                        <th>Place</th>
                        <th>Date</th>
                        {/* <th></th> */}
                    </tr>
                </thead>

                <tbody>
                    {
                        arr.map((obj, i)=>{
                            return <tr key={obj.id} >
                        <td>{i+1}</td>
                        <td>{obj.credited ==='' ? 0 : obj.credited}</td>
                        <td>{obj.debited ===''?0 :obj.debited}</td>
                        <td>{obj.place}</td>
                        <td>{obj.date}</td>
                        <td><button onClick={()=>handleDelete(obj,i)}>delete</button></td>
                    </tr>
                        })
                    }

                    {/* <tr>
                        <td>1</td>
                        <td>{arr[0].credited}</td>
                        <td>{arr[0].debited}</td>
                        <td>{arr[0].place}</td>
                        <td>{arr[0].date}</td>
                        <td><button>delete</button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{arr[1].credited}</td>
                        <td>{arr[1].debited}</td>
                        <td>{arr[1].place}</td>
                        <td>{arr[1].date}</td>
                        <td><button>delete</button></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseTracker
