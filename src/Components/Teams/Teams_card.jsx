import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

const Teams_card = ({Name,Post,Img,Link}) => {
  return (
    <>
        <div className="bg-white rounded-lg shadow-lg p-4 w-80 mx-10 max-md:my-3">
            <img
              className=" w-56 h-56 mx-auto mb-4 rounded-lg"
              src={Img}
              alt="Profile Picture"
            />
            <h2 className="text-lg font-semibold text-center mb-2">{Name}</h2>
            <p className="text-center text-gray-600">{Post}</p>
            <div className="flex justify-center mt-4">
              <a href={Link} target="_blank" className="bg-primary rounded-lg  mx-2">
              <FaLinkedinIn className='m-2' color='#fff'/>
              </a>
              {/* <a href="#" className="bg-gray-300 rounded-full  mx-2">
              <FaInstagram className='m-1'/>
              </a>
              <a href="#" className="bg-gray-300 rounded-full mx-2">
              <CiYoutube className='m-1' />
              </a> */}
            </div>
        </div>
    </>
  )
}

export default Teams_card
