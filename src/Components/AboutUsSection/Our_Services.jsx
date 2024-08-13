import React from 'react'
import { IoExtensionPuzzle } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { PiChatsFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";


const Our_Services = () => {
  return (
    <>
        <div className='flex justify-center items-center my-5 bg-AboutUs_LightBlue flex-col'>
            <div className='flex flex-col items-start mb-8 justify-center px-10 pt-20'>
                <h1 className='font-poppins text-start text-5xl font-bold text-AboutUs_text max-md:text-4xl'>Our Services</h1>
                <hr className='w-32 mt-3 h-1 bg-orange-600 max-md:mt-1 max-md:w-24' />

            </div>
            <div className='flex justify-between items-center pl-20 pr-20 pb-20 m-5 max-md:flex-col '>
                <div className='flex flex-col justify-center items-start w-52 '>
                    <IoExtensionPuzzle  size="30" />
                    <p className='font-poppins text-xl text-AboutUs_text font-bold my-4'>Solve Problems Real Time</p>
                    <p className='font-poppins text-sm text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                    <div className='my-5 flex'>
                    <button className='font-poppins font-bold text-base text-AboutUs_text'>Read More</button>
                    <FaArrowRight className='mx-1 mt-1 text-orange-600' />
                    </div>
                    
                </div>
                <div className='flex flex-col justify-center items-start w-52 mx-28 max-md:my-14'>
                    <IoIosLock size="35"/>
                    <p className='font-poppins text-xl font-bold text-AboutUs_text my-4'>Solve Problems Real Time</p>
                    <p className='font-poppins text-sm   text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                    <div className='my-5 flex'>
                    <button className='font-poppins font-bold text-base text-AboutUs_text'>Read More</button>
                    <FaArrowRight className='mx-1 mt-1 text-orange-600' />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start w-52'>
                    <PiChatsFill size="35"/>
                    <p className='font-poppins text-xl font-bold text-AboutUs_text my-4'>Solve Problems Real Time</p>
                    <p className='font-poppins text-sm  text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                    <div className='my-5 flex'>
                    <button className='font-poppins font-bold text-base text-AboutUs_text'>Read More</button>
                    <FaArrowRight className='mx-1 mt-1 text-orange-600' />
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Our_Services
