import React from 'react'

const CHildComponent = (props) => {
    console.log(props)
  return (
    <div style={{color:props.x}}>
        this is child component this data is coming from {props.data} and {props.title}
    </div>
  )
}

export default CHildComponent
