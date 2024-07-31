import React from 'react'
import vacationImg from '../../assets/vacation.png'
import Button from '../ReusableComponents/Button';

const Vacation = () => {
  return (
    <>
        <div className="flex justify-between items-center bg-custom_purple text-white max-md:flex-col-reverse  my-10">
            <div className=" flex flex-col w-1/2 p-10 justify-center items-center max-sm:px-0 ">
                <h1 className=" text-4xl font-poppins mb-4 max-sm:text-xl ">FOR YOUR VACATION</h1>
                <p className="mb-6 text-center max-md:text-xs">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.
                </p>
                <Button
                      color={"white"}
                      children={"Call Now"}
                />
            </div>
            <div className="w-1/2 max-md:w-full">
                <img src={vacationImg} alt="Vacation" className="w-full h-full  " />
            </div>
        </div>
    </>
  );
};

export default Vacation;
