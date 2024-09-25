import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Teams_card = ({Name,Post,Img,Link}) => {
  return (
    <>
        <div className="bg-white rounded-lg shadow-md p-4 w-auto mx-10 max-md:my-3">
            <img
              className=" w-56 h-48 mx-auto mb-4 rounded-lg"
              src={Img}
              alt="Profile Picture"
            />
            <h2 className="text-lg font-semibold text-center mb-2">{Name}</h2>
            <p className="text-center text-gray-600">{Post}</p>
            <div className="flex justify-center mt-4">
              <a href={Link} target="_blank" className="bg-gray-300 rounded-lg  mx-2">
                <FaTwitter className='m-1' />
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
