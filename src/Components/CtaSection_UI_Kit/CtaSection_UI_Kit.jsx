import React from 'react'
import CtaImg from '../../assets/CtaImg.png'
import Button from '../ReusableComponents/Button';

const CtaSection_UI_Kit = () => {
  return (
    <>
        
            <div className= 'bg-custom_bg flex justify-between max-md:flex-col' >
                <div className='w-1/2 max-md:w-auto'>
                    <img src={CtaImg} alt=""/>
                </div>
                <div className='w-1/2 flex flex-col justify-center items-start mr-20 ml-10 max-md:w-auto' >
                    <h1 className='font-poppins font-bold text-6xl max-md:text-3xl'>Get Landing page UI Kit Today!</h1>
                    <p className='font-poppins text-xl my-6 max-md:text-base'>Break the Figma limits and explore the endless possibilities with Anima</p>
                    <Button
                      color={"purple"}
                      children={"Get Started"}
                    />
                </div>
            </div>
        
    </>
  );
};

export default CtaSection_UI_Kit;
