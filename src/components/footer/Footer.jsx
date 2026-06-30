import React from 'react'
import CreditCards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa"

import { FaMapLocation } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='footer-bg pt-12 pb-8 text-white'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company detail  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              damping: 10,
              stiffness: 100,
              type: "spring"

            }}
            className='space-y-6'>

            <h2 className='text-3xl font-bold uppercase'> Boom_Sound</h2>
            <p className='text-sm max-w-[300px]'>Boom_Sound is the perfect headphones for developers, creators, and innovators, offering premium sound, a productive atmosphere, and inspiration for every idea.</p>
            <div>
              <p className='flex items-center gap-2'>
                <FaPhone />+91  8449816393
              </p>
              <p className='flex items-center gap-2'><FaMapLocation /> Dehradun ,Uttrakhand</p>
            </div>
          </motion.div>
          {/* footer link section  */}

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              damping: 10,
              stiffness: 100,
              type: "spring"

            }}
          >
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold'>Quick Links</h2>

              <div className='grid grid-cols-1  section -1 sm:grid-cols-2 gap-3'>
                {/* first  column section   */}
                <div>
                  <ul className='space-y-2'>
                    <li>Home</li>
                    <li>About </li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>

                {/* second col 
                 */}
                <div>
                  <ul className='space-y-2'>
                    <li>Home</li>
                    <li>About </li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          {/* social links   */}

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              damping: 10,
              stiffness: 100,
              type: "spring"

            }}
            className="space-y-6">
            <h1 className='text-3xl font-bold' > Follow Us</h1>
            <div className='flex items-center gap-3'>
              <FaFacebook className='text-3xl hover:scale-105 duration-300' />
              <FaInstagram className='text-3xl hover:scale-105 duration-300' />
              <FaTelegram className='text-3xl hover:scale-105 duration-300' />
              <FaGoogle className='text-3xl hover:scale-105 duration-300' />
            </div>

            <div>
              <h1 className='text-xl  font-semibold mb-2'>Payment Method</h1>
              <img src={CreditCards} alt="" className='w-[80%]' />
            </div>
          </motion.div>

          {/* copyright section  */}
          <p className='text-white text-center mt-8 pt-8 border-t-2'>Copyright &copy; 2026 Priyank Chaudhary</p>


        </div>
      </div>

    </div>
  )
}

export default Footer