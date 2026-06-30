import { section } from 'framer-motion/client'
import React from 'react'
import {motion} from "framer-motion"

import Headphone4 from "../../assets/headphone4.png";


const Banner = () => {
  return (
    <>
    
    <section className='m-2'>
        
        <div className="container py-14 grid grid-cols-1 md:place-content-center grid-cols-2 space-x-6 md:space-y-0 gap-12">

            {/* banner image  */}

            <div>
                <motion.img
                 initial={{opacity:0,scale:0,y:100}}
                                whileInView={{opacity:1,scale:1,y:0}}
                                transition={{duration:0.6,delay:0.3,ease:"easeInOut" }}   
                                exit={{
                                    opacity:0,
                                    scale:0.9,
                                    y:100,

                                    transition:{
                                        duration:0.6,
                                    }
                                }} 
                className='w-[300px] md:w-[400px] '
                src={Headphone4} alt="" />
            </div>
            {/* banner text  */}

            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left  space-y-4 lg:max-w-[450px] '>
                    <motion.h1
                     initial={{opacity:0,x:100}}
                                whileInView={{opacity:1,x:0}}
                                transition={{duration:0.9,delay:0.4,ease:"easeInOut" }}   
                                exit={{
                                    opacity:0,
                                    y:100,

                                    transition:{
                                        duration:0.2,
                                    }
                                }}
                                className='text-3xl lg:text-4xl font-semibold'>The Latest Headphone With Latest  Techonology </motion.h1>
                    <motion.p
                    initial={{opacity:0,x:100}}
                                whileInView={{opacity:1,x:0}}
                                transition={{duration:0.9,delay:0.6,ease:"easeInOut" }}   
                                exit={{
                                    opacity:0,
                                    y:100,

                                    transition:{
                                        duration:0.2,
                                    }
                                }}
                     
                    className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laborum optio porro consequuntur maiores ipsam odio pariatur voluptatum odit assumenda.</motion.p>
                <motion.button
                initial={{opacity:0,y:100}}
                                whileInView={{opacity:1,y:0}}
                                transition={{duration:0.9,delay:0.8,ease:"easeInOut" }}   
                                exit={{
                                    opacity:0,
                                    y:100,

                                    transition:{
                                        duration:0.2,
                                    }
                                }} 
                
                
                className=' border-2 border-[#e33343] text-[#e33343] px-6 py-2  rounded-md hover:bg-[#e33343] hover:text-white'>Shop Now</motion.button>
                </div>
            </div>

        </div>
        </section></>
  )
}

export default Banner