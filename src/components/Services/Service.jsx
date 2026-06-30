import React from 'react'

import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";
import { motion } from 'framer-motion';


const  ServiceData=[
    {
        id:1,
        title:"Security",
        icon:Icon1,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aspernatur accusantium placeat a ipsam voluptas maxime quaerat sed ea laudantium?",
        delay:0.5
    },
    {
        id:2,
        title:"Gurantee",
        icon:Icon2,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aspernatur accusantium placeat a ipsam voluptas maxime quaerat sed ea laudantium?",
        delay:0.8
    },
    {
        id:3,
        title:"Affordability",
        icon:Icon3,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aspernatur accusantium placeat a ipsam voluptas maxime quaerat sed ea laudantium?",
        delay:1.1
    },

]
const Service = () => {
  return (
   <>
   
   <section className='bg-gray-100 py-8'>
<div className="container justify-center text-center py-14">
    <h1 className='text-3xl  font-bold text-center pb-10'>Services</h1>
</div>


<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>

{
    ServiceData.map((data)=>(
        
        <div
        key={data.id} className='flex  flex-col justify-center items-center p-5 max-w-[300px] mx-auto shadow-lg'>
            <img className='w-[100px] mb-4' src={data.icon} alt="" />
            <div className='text-center space-y-2'>
                <h1 className='text-2xl font-bold'>{data.title}</h1>
                <p className='text-center text-sm text-black'>{data.desc}</p>
            </div>
        </div>
    )
    
)
}
</div>

<div>

</div>
    </section>
    
    </>
  )
}

export default Service