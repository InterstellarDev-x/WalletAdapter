import React from "react"
import { motion } from "framer-motion"



interface Polygon {
  color : string,
  height? : string,
  width? : string
}



export const Polygon = (props : Polygon) : React.ReactNode=> {
    return (
        <motion.svg  
      initial={{
        opacity : 0
      }}

      animate={{
        opacity : 1
      }}

      transition={{
        delay : 1,
        ease : 'easeInOut'
      }}
      
      className={"absolute  "}
      
      
      width={props.width ? props.width : "95"}  height={props.height ? props.height : "90"} viewBox="0 0 95 103" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.5 3.9282C42.9256 -0.358984 52.0744 -0.358983 59.5 3.9282L82.6984 17.3218C90.124 21.609 94.6984 29.532 94.6984 38.1064V64.8936C94.6984 73.468 90.124 81.391 82.6984 85.6782L59.5 99.0718C52.0744 103.359 42.9256 103.359 35.5 99.0718L12.3016 85.6782C4.87599 81.391 0.301617 73.468 0.301617 64.8936V38.1064C0.301617 29.532 4.87599 21.609 12.3016 17.3218L35.5 3.9282Z" fill="url(#paint0_linear_862_20270)"/>
<defs>
<linearGradient id="paint0_linear_862_20270" x1="90" y1="-3" x2="52.9958" y2="106" gradientUnits="userSpaceOnUse">
<stop stopColor={props.color}/>
<stop offset="1" stopColor={props.color}/>
</linearGradient>
</defs>
</motion.svg>

    )
}