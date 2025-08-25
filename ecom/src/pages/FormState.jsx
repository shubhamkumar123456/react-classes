import React, { useState } from 'react'

const FormState = () => {
    // Two way Data binding
    // Controlled component --> 

const [details, setdetails] = useState({
    name:"",
    email:"",
    password:"",
    gender:""
});

// console.log(details)

function handleChanger(e){
    // console.log(e.target) //tag  // name tag
    // console.log(e.target.value)// tag value  //h
    // console.log(e.target.name)// tag name  // name

    setdetails({...details, [e.target.name] : e.target.value})  //{name:"h", email:"",password:""}

}


function handleSubmit(e){
    e.preventDefault();
    console.log(details)
}

const [selectedImage, setselectedImage] = useState('');
console.log(selectedImage)

function handleFileChanger(e){
    // console.log(e.target.files[0])   // file object
    setselectedImage(e.target.files[0])
}
  return (
    <div>
      <form action="" className='bg-yellow-200 p-7 max-w-[300px] m-auto flex flex-col'>
        <label htmlFor="">Name</label>
        <input onChange={handleChanger} value={details.name} name='name' className='border' type="text" />
        <label htmlFor="">Email</label>
        <input onChange={handleChanger} value={details.email} name='email' className='border' type="email" />
        <label htmlFor="">Password</label>
        <input onChange={handleChanger} value={details.password} name='password' className='border' type="password" />
        <div>
            <label htmlFor="">Gender</label>
            <label  htmlFor="m">Male</label>
            <input onChange={handleChanger} id='m' value={'male'} name='gender' type="radio" />
            <label htmlFor="f">Female</label>
            <input onChange={handleChanger} id='f' value={'female'} name='gender' type="radio" />
        </div>

        <label htmlFor="file" className='w-150px bg-green-400 px-3 py-2 rounded text-center'>
            Upload
        </label>
        <input  onChange={handleFileChanger} type="file" id='file' hidden  />

    {selectedImage && <img style={{width:"200px"}} src={URL.createObjectURL(selectedImage)} alt="" />}

        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default FormState
