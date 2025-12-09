import React from 'react'
import { motion, transform } from "motion/react"

const AnimationPage = () => {
  return (
    <div>
      <h1>This is animation page</h1>
      <motion.div animate={{ rotate: 360,transition:{duration:2} }} style={{backgroundColor:"red",height:"100px",width:"100px"}}></motion.div>

      <motion.div animate={{x:[0,400,400,0,0], y:[0,0,200,200,0], transition:{duration:5,repeat:Infinity } , scale:[1,0,1,0,1]} } style={{backgroundColor:"green",height:"100px",width:"100px"}} ></motion.div>

      
    </div>
  )
}

export default AnimationPage
