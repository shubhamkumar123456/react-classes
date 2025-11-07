// create component rafce, rfc ,rfce
import React, { useRef, useState } from 'react'
import './Expense1.css'

const ExpenseTracker1 = () => {

    // let h1Ref = useRef(10); // give you an object with a current key
    // console.log(h1Ref)
    // console.log(h1Ref.current)

    // let h1Ref = useRef();
    // console.log(h1Ref)  // {current : undefined}  , {current:h1}

    let creditRef = useRef()  // {current: undefine}   // {curent:input }
    let debitRef = useRef()  // {current: undefine}
    let placeRef = useRef()  // {current: undefine}
    let dateRef = useRef()  // {current: undefine}

    const [show, setShow] = useState(true);   //ush

   const [arr, setArr] = useState([
        {
            id:1,
            creditedAmount:15000,
            debitedAmount:0,
            place:'salary',
            date:"2025-10-01"
        },
        {
            id:2,
            creditedAmount:0,
            debitedAmount:300,
            place:'dinner',
            date:"2025-10-02"
        },
        {
            id:3,
            creditedAmount:0,
            debitedAmount:200,
            place:'zoo',
            date:"2025-10-03"
        },
        {
            id:4,
            creditedAmount:0,
            debitedAmount:500,
            place:'Movie',
            date:"2025-10-05"
        },
        {
            id:5,
            creditedAmount:250,
            debitedAmount:0,
            place:'bua ke ghar',
            date:"2025-10-15"
        },
         // {current: undefine}
    ])

    console.log(arr)

    let creditSum = 0;
    let debitedSum=0;
    for(let i=0; i<arr.length; i++){
        creditSum = creditSum +Number(arr[i].creditedAmount)
        debitedSum = debitedSum +parseInt(arr[i].debitedAmount)
    }
    // console.log(creditSum)
    // console.log(debitedSum)
    // let credit = document.getElementById('creditInput');

    // function handleAdd(e){
    //     e.preventDefault()
    //     console.log("running")
    //     console.log(h1Ref)  //{current: h1}
    //     console.log(h1Ref.current)  //  h1 tag
    //     console.log(h1Ref.current.innerHTML)  //  inner text  --> expense tracker App

    // }

    function handleAdd(e){
        e.preventDefault();
        console.log("hello");
        let obj = {
            id:arr.length+1,
            creditedAmount:creditRef.current.value,
            debitedAmount:debitRef.current.value,
            place:placeRef.current.value,
            date:dateRef.current.value,
        }

        console.log(obj)

        let copyArr = [...arr]
        copyArr.push(obj)
        console.log(copyArr)

        setArr(copyArr)
        creditRef.current.value = '';
        debitRef.current.value = '';
        placeRef.current.value = '';
        dateRef.current.value = '';
    }

    function handleUpdate(obj , i){
        console.log(obj)
        // console.log(i)

        creditRef.current.value = obj.creditedAmount
        debitRef.current.value = obj.debitedAmount
        placeRef.current.value = obj.place
        dateRef.current.value = obj.date

        setShow(false)
    }
    function handleDelete(obj,i){
        // console.log("hello delete")
        // console.log(obj)
        // console.log(i)
        // arr.splice(i , 1)
        let copyArr = [...arr]  // [{}, {}, {} ,{ }, {}]
        copyArr.splice(i, 1)  // [{}, {}, {} ,{}]
        setArr(copyArr)
    }


    function updateExpense(e){
        e.preventDefault()
        console.log("hello")
    }
  return (
    <div className='expenseTracker1'>
        {/* <h1 ref={h1Ref} className='title'>expense tracker App</h1> */}
        <h1 className='title'>expense tracker App</h1>
        <form action="">
            <input ref={creditRef} id='creditInput' type="number" placeholder='enter credited amount' />
            <input ref={debitRef} type="number" placeholder='enter debited amount' />
            <input ref={placeRef} type="text" placeholder='enter Place' />
            <input ref={dateRef} type="date" placeholder='enter date' />
            {show ? <button onClick={handleAdd} id='btnSubmit'>Add Expense</button>
             : <button onClick={updateExpense} id='btnUpdateExpense'>Update Expense</button>}
        </form>
        <table>
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Credited Amount</th>
                    <th>Debited Amount</th>
                    <th>Place</th>
                    <th>Date</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                    {
                        arr.map((obj , i )=>{
                            return <tr key={obj.id}>
                                <td><b>{obj.id}</b></td>
                                <td>{obj.creditedAmount}</td>
                                <td>{obj.debitedAmount}</td>
                                <td>{obj.place}</td>
                                <td>{obj.date}</td>
                                <td>
                                    <button onClick={()=>handleUpdate(obj,i)}>Update</button>
                                    <button onClick={()=>handleDelete(obj,i)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
            </tbody>
        </table>

        <h3 style={{textAlign:"center",margin:"10px 0"}}>Total credited Amount =  {creditSum}</h3>
        <h3 style={{textAlign:"center"}}>Total Debited Amount =  {debitedSum}</h3>
        <h3 style={{textAlign:"center",margin:"10px 0"}}>Balance =  {creditSum -  debitedSum}</h3>
    </div>
  )
}

export default ExpenseTracker1
