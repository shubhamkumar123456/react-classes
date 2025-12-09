import React from 'react'
import { motion } from "motion/react"

const AnimationOne = () => {
    //[0,0,0,0,0,0,0,0,00,,0,0]
    console.log(window.innerWidth)  //600px
    console.log(window.innerHeight)
    console.log(Math.random())  //random value 0-1  0.5
  return (
    <div style={{height:"95vh",width:"99vw",overflow:"hidden"}}>
      {Array(50).fill('0').map((ele, i)=>{
        return <motion.div initial={{left:Math.random()*window.innerWidth,top:Math.random()*window.innerHeight}}  animate={{x:[0,60,0,60,0],y:[0,60,0,60,0], transition:{repeat:Infinity,duration:Math.random()*5+1}}} style={{position:"absolute",width:'40px',height:"40px",backgroundColor:"yellow", borderRadius:"100%"}}></motion.div>
      })}
    </div>
  )
}

export default AnimationOne
