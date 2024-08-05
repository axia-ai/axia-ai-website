import React from 'react'
import { IoExtensionPuzzle } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { PiChatsFill } from "react-icons/pi";

const FeaturesServices = () => {
  return (
    <>
        <div className='flex justify-center items-center m-20 p-15'>
            <div className='flex justify-between items-center m-5 max-md:flex-col '>
                <div className='flex flex-col justify-center items-start w-60 '>
                    <IoExtensionPuzzle  size="30"/>
                    <p className='font-poppins text-base my-6'>Solve Problems Real Time</p>
                    <p className='font-poppins text-sm '>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
                <div className='flex flex-col justify-center items-start w-60 mx-28 max-md:my-14'>
                    <IoIosLock size="35"/>
                    <p className='font-poppins text-base my-6'>Solve Problems Real Time</p>
                    <p className='font-poppins text-sm  '>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
                <div className='flex flex-col justify-center items-start w-60'>
                    <PiChatsFill size="35"/>
                    <p className='font-poppins text-base my-6'>Solve Problems Real Time</p>
                    <p className='font-poppins text-sm  '>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
                </div>
            </div>

        </div>
    </>
  );
};

export default FeaturesServices;
