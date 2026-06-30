import React from 'react'
import Blog1 from "../../assets/blogs/blog1.jpg";
import Blog2 from "../../assets/blogs/blog2.jpg";
import Blog3 from "../../assets/blogs/blog3.jpg";
import Blog4 from "../../assets/blogs/blog4.jpg";
import { div, title } from 'framer-motion/client';
const Blog = () => {


    const BlogData=[
        {
            id:1,
            title:"Experience crystal-clear audio with deep bass and immersive sound, perfect for music, gaming, and everyday entertainment.",
            desc:"Experience crystal-clear audio with deep bass and immersive sound, perfect for music, gaming, and everyday entertainment.",
            link:"#",
            img:Blog1,

        },
        {
            id:2,
            title:"Wireless Connectivity",
            desc:"Enjoy seamless Bluetooth pairing, stable connections, and unrestricted movement with our advanced wireless technology",
            link:"#",
            img:Blog2,

        },
        {
            id:3,
            title:"Active Noise Cancellation!",
            desc:"Block unwanted background noise and stay focused with intelligent noise cancellation for an uninterrupted listening experience.",
            link:"#",
            img:Blog3,
        },
        {
            id:4,
            title:"40-Hour Battery!",
            desc:"Listen longer with an extended battery life, fast charging, and all-day comfort designed for work, travel, and relaxation.",
            link:"#",
            img:Blog4,

        },
    ]
  return (
   <>
<section className='bg-gray-50'>
    <div className="container flex-col py-14 text-center" >
        <h1 className='text-3xl font-bold text-center pb-8'>Blogs</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {
                BlogData.map((data)=>(
                    <div className='flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300'>
                        <img src={data.img} alt="" />
                        <div className='space-y-2' >
                            <h1 className='text-xl font-bold line-clamp-1 '>{data.title}</h1>

                            <p className='line-clamp-3'>{data.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
</section>

   
   </>
  )
}

export default Blog