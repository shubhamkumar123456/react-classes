import React, { useRef } from 'react'
import { useState } from 'react'

const ExpenseTracker = () => {

    let creditRef = useRef()
    let debitRef = useRef()
    let placeRef = useRef()
    let dateRef = useRef()
  
    const [showUpdateBtn, setshowUpdateBtn] = useState(false);

    const [arr, setArr] = useState([
        {
            id: 1,
            credited: 35000,
            date: "2025-08-01",
            debited: 0,
            place: 'salary'
        },
        {
            id: 2,
            credited: 1500,
            date: "2025-08-05",
            debited: 0,
            place: 'bua ke ghar'
        },
        {
            id: 3,
            credited: 0,
            date: "2025-08-05",
            debited: 1000,
            place: 'dinner'
        },
        {
            id: 4,
            credited: 0,
            date: "2025-08-06",
            debited: 300,
            place: 'zoo'
        },
    ])

    console.log(arr)

    let totalCredited = 0;
    for(let val of arr){
        // console.log(val.credited)
        totalCredited= totalCredited+Number(val.credited)
    }
    console.log(totalCredited)

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
            id:arr.length+1,
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

        creditRef.current.value = ''
        debitRef.current.value = ''
        placeRef.current.value = ''
        dateRef.current.value = ''
        // arr.push(obj);
        // console.log(arr)
    }


    const [selectedIndex, setselectedIndex] = useState('');
    console.log(selectedIndex);


    const handleUpdate=(obj ,index)=>{
        setshowUpdateBtn(true)
        // console.log(obj)
        // console.log(index)
        setselectedIndex(index);

        creditRef.current.value = obj.credited;
        debitRef.current.value = obj.debited;
        placeRef.current.value = obj.place;
        dateRef.current.value =   obj.date;

    }

    const handleUpdateExpense = (e)=>{
        e.preventDefault()
        console.log(selectedIndex)  //1
        
        let obj = {
            id:selectedIndex+1,
            credited:creditRef.current.value,
            debited:debitRef.current.value,
            place:placeRef.current.value,
            date:dateRef.current.value,
        }
        
        let copyArr = [...arr];  //[{},{},{},{}]
        copyArr[selectedIndex] = obj;
        setArr(copyArr)
        
         creditRef.current.value = ''
        debitRef.current.value = ''
        placeRef.current.value = ''
        dateRef.current.value = ''
        setshowUpdateBtn(false)

        

         
    }


    let arr1 = [10, 4,5, 9];
    arr1[2] = 3;
   
    return (
        <div className='expensePage'>
            <h1 className='title'>This is Expense Tracker Application</h1>

            <form style={{margin:"auto",backgroundColor:"black",padding:"10px",borderRadius:"10px",width:'max-content',display:"flex",alignItems:"center",gap:"20px"}} action="">
                <input style={{padding:"10px",borderRadius:"5px"}} ref={creditRef} id='credit' type="number" placeholder='credit amount' />
                <input style={{padding:"10px",borderRadius:"5px"}} ref={debitRef} id='debit' type="number" placeholder='debit amount' />
                <input style={{padding:"10px",borderRadius:"5px"}} ref={placeRef} id='place' type="text" placeholder='Place' />
                <input style={{padding:"10px",borderRadius:"5px"}} ref={dateRef} id='date' type="date" placeholder='date' />
               {showUpdateBtn===false ? <button onClick={handleSubmit}>Add Expense</button> :
                <button onClick={handleUpdateExpense}>Update Expense</button>}
            </form>

         {
            arr.length >0 ?
           <div className='tableBox'>
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
                        <td>
                            <button onClick={()=>handleDelete(obj,i)}>delete</button>
                            <button onClick={()=>handleUpdate(obj, i)}>Update</button>
                        </td>
                    </tr>
                        })
                    }

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                       
                    </tr>
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
           :
            <h1>No Transaction</h1>
           }

            <h1>Total Credited =  {totalCredited}</h1>
        </div>
    )
}

export default ExpenseTracker
