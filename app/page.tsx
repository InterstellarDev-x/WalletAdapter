"use client";

import { Logo } from "@/component/ui/Logo";
import {  motion } from "framer-motion";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className=" w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image (Main2.png) */}

      <motion.div className="absolute -inset-0 z-50 bg-transparent"><Image src={"/WEB 3 WALLET.png"} alt="Light"  height={100} width={100} /></motion.div>
      <motion.div className="absolute -inset-50 -z-10"><Image src={"/Light.png"} alt="Light"  height={100} width={1000} /></motion.div>
       <Logo LogoUrl="/Etherium.png" className="absolute top-52 left-80 z-20"/>
       <Logo LogoUrl="/solana.png" className="absolute bottom-52 left-80 z-20"/>
       <Logo LogoUrl="/Bin.png" className="absolute bottom-52 right-80 z-20"/>
       <Logo LogoUrl="/Bnb.png" className="absolute top-52 right-80 z-20 "/>

       <motion.div  initial={{
        opacity : 0,
         y : -20
       }} 

       animate={{
        opacity : 1,
        y:0

       }}


       transition={{
        delay : 1,
        duration : 1
       }}
       
       
       className="text-white absolute z-50 font-bold text-7xl text-center">We seed the Web 3.0 <br /> revolution</motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 2 }}
        transition={{ duration: 1, ease: "easeInOut" , delay: 1 }}
        className="absolute inset-0 z-0"
      >
        <Image src="/Main2.png" alt="Main2" fill className="object-cover" />
      </motion.div>

      {/* Foreground Image (Main.png) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}

        transition={{ duration: 2, ease: "easeInOut"  }}
        className="z-10"
      >
        <Image src="/Main.png" alt="Main" height={750} width={750} />
      </motion.div>



     
    </div>
   
    </>
  );
}