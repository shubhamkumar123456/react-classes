import React from 'react'
import ThemeContext from './ThemeContext'

const ThemeState = (props) => {
  return (
    
        <ThemeContext.Provider>
            <div  style={{backgroundColor:"yellow"}}>

                {props.children}
            </div>
         
        </ThemeContext.Provider>
   
  )
}

export default ThemeState
