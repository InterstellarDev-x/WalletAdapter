import Image from "next/image"
import {motion} from "framer-motion"


interface LogoInterface  {
    LogoUrl : string,
    className : string
}

export const Logo = ( props : LogoInterface)=> {
    return (
        <motion.div  
       
       initial={{
        opacity: 0,
        y : -20
       }}

       animate={{
        opacity : 1,
        y : 0

       }}

       


       whileHover={{
        y : -15
       }}


       transition={{
        delay:1,
        duration : 1,
        ease : 'easeInOut',

       }}

       className={props.className}> <Image src={props.LogoUrl} alt="Etherium" height={60} width={60} className="rounded-full"/> </motion.div>
    )
}