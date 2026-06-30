import React, { useState } from 'react'
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from 'react-icons/fa';

import { motion, AnimatePresence, easeInOut } from 'framer-motion';


const fadeUp = (delay) => {
    return {
        hidden: { opacity: 0, y: 100, scale: 0.5 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            }



        }
    }
}
const headphoneData = [
    {
        id: 1,
        image: Headphone1,
        title: "Headphone Wireless",
        subtitle: "  Elevate your listening experience with premium wireless headphones featuring rich sound, active noise cancellation, and up to 40 hours of battery life.",
        price: "4500",
        modal: "Modal Brown",
        bgColor: "#8b5958",

    },
    {
        id: 2,
        image: Headphone2,
        title: "Headphone Wireless 2",
        subtitle: " Elevate your listening experience with premium wireless headphones featuring rich sound, active noise cancellation, and up to 40 hours of battery life.",
        price: "4500",
        modal: "Lime Green",
        bgColor: "#638153",

    },
    {
        id: 3,
        image: Headphone3,
        title: "Headphone Wireless 3",
        subtitle: " Elevate your listening experience with premium wireless headphones featuring rich sound, active noise cancellation, and up to 40 hours of battery life.",
        price: "4500",
        modal: "Ocean Blue",
        bgColor: "#5d818c",

    },
]
const Hero = () => {

    const sendWhatsAppMessage = () => {
  const phoneNumber = "918449816393";
  const message = "Hi! I'm interested in your headphones.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

    const [activeData, setActiveData] = useState(headphoneData[0])

    const handleActiveData = (data) => {
        setActiveData(data)
    }
    return (
        <div>
            <section className='bg-black text-white  '>
                <div className="container  ml-20 grid grid-cols-1
md:grid-cols-2 min-h-[700px] gap-10
">

                    {/* headphone info */}

                    <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>

                        <div className='space-y-5 text-center md:text-left'>


                            <AnimatePresence mode="wait">

                                <motion.h1
                                    key={activeData.id}
                                    variants={fadeUp(0.2)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className='text-3xl lg:text-6xl font-bold '>{activeData.title}</motion.h1>

                            </AnimatePresence>
                            <AnimatePresence>

                                <motion.p
                                    key={activeData.id}
                                    variants={fadeUp(0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"

                                    className='text-sm leading-loose text-white/80'>{activeData.subtitle}</motion.p>
                            </AnimatePresence>


                            <AnimatePresence>
                            <motion.button
                                key={activeData.id}
                                
                                variants={fadeUp(0.4)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                style={{
                                    backgroundColor: activeData.bgColor
                                }}
                                
                                className='px-4 py-2 inline-block font-normal rounded-sm '>Buy and Listen</motion.button>

                                </AnimatePresence>
                            {/* head phone list separator */}
                            <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                                <div className='w-20 h-[1px] bg-white'></div>
                                <p className='uppercase text-sm'>Top Headphones for you</p>
                                <div className='w-20 h-[1px] bg-white'></div>
                            </div>

                            {/* headphone list switcher */}
                            <div className='grid grid-cols-3 gap-10'>
                                {
                                    headphoneData.map((item) => (
                                        <div key={item.id} onClick={() => handleActiveData(item)} className='grid grid-cols-2 place-items-center cursor-pointer '>
                                            <div>
                                                <img className='w-[200px]' src={item.image} alt="" />
                                            </div>
                                            <div className='space-y-2'>
                                                <p className='text-base font-bold'>{item.price}</p>
                                                <p className='text-sm font-normal text-nowrap'>{item.modal}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                    {/* hero img */}

                    <div className='flex flex-col justify-end  items-center '>

                        <AnimatePresence>

                        <motion.img
                        key={activeData.id}
                        
                                initial={{opacity:0,scale:0.9,y:100}}
                                animate={{opacity:1,scale:1,y:0}}
                                transition={{duration:0.4,delay:0.2,ease:"easeInOut" }}   
                                exit={{
                                    opacity:0,
                                    scale:0.9,
                                    y:100,

                                    transition:{
                                        duration:0.2,
                                    }
                                }}                     
                        src={activeData.image} alt=""
                            className='w-[300px] md:w-[400px] xl:w-[550px]' />
                            </AnimatePresence>
                    </div>
                    {/* whatsapp icon */}

                    <div>
                        <button onClick={()=>sendWhatsAppMessage()}>

                            
                            <FaWhatsapp className=
                                'text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[9999] mix-blend-difference' />
                                </button>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Hero