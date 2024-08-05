import React from 'react'
import TestimonialsServicesCards from './TestimonialsServicesCards';
import Service_test from '../../assets/Service_test.png'

const TestimonialsServices = () => {
  return (
    <>
        <div className=' flex flex-col justify-center items-center m-5'>
            <p className=' m-10 text-center text-blue-500 font-poppins text-sm max-md:text-xs max-md:my-5'>3940+ Happy LandingFolio Users</p>
            <h1 className='text-center font-bold font-poppins text-5xl max-md:text-2xl'>Don't Just take our words</h1>
            <div className='flex justify-between items-center my-16 mx-24 max-md:flex-col max-md:my-5 max-md:mx-6'>
                <TestimonialsServicesCards
                    Img={Service_test}
                    About={"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."}
                    Name={"Rahul j."}
                    Job={"Grower.Io"}
                />
                <TestimonialsServicesCards
                    Img={Service_test}
                    About={"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."}
                    Name={"Rahul j."}
                    Job={"Grower.Io"}
                />
            </div>

        </div>
    </>
  );
};

export default TestimonialsServices;
