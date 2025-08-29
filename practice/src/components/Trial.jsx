import React from 'react'

const Trial = (props) => {
  return (
    <div>
      <h1>I am child component</h1>
      <h1 style={{backgroundColor:props.color}}>This data is coming from {props.text}</h1>
    </div>
  )
}

export default Trial
