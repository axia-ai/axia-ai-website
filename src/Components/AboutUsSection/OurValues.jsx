import React from 'react'
import { IoExtensionPuzzle } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { PiChatsFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";


const OurValues = () => {
  return (
    <>
        <div className='flex justify-center items-center my-5 bg-AboutUs_LightBlue flex-col'>
            <div className='flex flex-col items-start mb-8 justify-center px-10 pt-20'>
                <h1 className='font-poppins text-start text-5xl font-bold text-AboutUs_text max-md:text-4xl'>Our Values</h1>
                <hr className='w-32 mt-3 h-1 bg-orange-600 max-md:mt-1 max-md:w-24' />

            </div>
            <div className='flex justify-between items-center pl-20 pr-20 pb-20 m-5 max-md:flex-col '>
                <div className='flex flex-col justify-center items-start w-52 '>
                    <IoExtensionPuzzle  size="30" />
                    <p className='font-poppins text-xl text-AboutUs_text font-bold my-4'>Client Success</p>
                    <p className='font-poppins text-sm text-gray-500 '>Our success is defined by our clients' achievements. We are committed to building lasting partnerships, providing tailored solutions, and supporting our clients every step of the way to ensure their goals are met and surpassed.</p>
                    <div className='my-5 flex'>
                    {/* <button className='font-poppins font-bold text-base text-AboutUs_text'>Read More</button>
                    <FaArrowRight className='mx-1 mt-1 text-orange-600' /> */}
                    </div>
                    
                </div>
                <div className='flex flex-col justify-center items-start w-52 mx-28 max-md:my-14'>
                    <IoIosLock size="35"/>
                    <p className='font-poppins text-xl font-bold text-AboutUs_text my-4'>Cost Savings</p>
                    <p className='font-poppins text-sm   text-gray-500 '>We prioritize efficient, scalable AI solutions that deliver maximum value with minimal expenditure. By optimizing processes and leveraging advanced technologies, we help our clients reduce costs while maintaining high standards of quality and performance.</p>
                    <div className='my-5 flex'>
                    {/* <button className='font-poppins font-bold text-base text-AboutUs_text'>Read More</button>
                    <FaArrowRight className='mx-1 mt-1 text-orange-600' /> */}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start w-52'>
                    <PiChatsFill size="35"/>
                    <p className='font-poppins text-xl font-bold text-AboutUs_text my-4'>Proficiency</p>
                    <p className='font-poppins text-sm  text-gray-500 '>Precision is at the heart of everything we do. We meticulously examine every aspect of our solutions to ensure accuracy, reliability, and excellence, delivering results that consistently meet and exceed our clients' expectations.</p>
                    <div className='my-5 flex'>
                    {/* <button className='font-poppins font-bold text-base text-AboutUs_text'>Read More</button>
                    <FaArrowRight className='mx-1 mt-1 text-orange-600' /> */}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start w-52'>
                    <PiChatsFill size="35"/>
                    <p className='font-poppins text-xl font-bold text-AboutUs_text my-4'>Accountability</p>
                    <p className='font-poppins text-sm  text-gray-500 '>We stand by our work and decisions, taking full responsibility for the outcomes we deliver. Our commitment to transparency and integrity ensures that we consistently meet our clients' expectations and build trust in every partnership.</p>
                    <div className='my-5 flex'>
                    {/* <button className='font-poppins font-bold text-base text-AboutUs_text'>Read More</button>
                    <FaArrowRight className='mx-1 mt-1 text-orange-600' /> */}
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default OurValues