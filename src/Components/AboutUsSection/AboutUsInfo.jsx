import React from 'react'
import intro from "../../assets/intro.png"
import { BsSpeedometer2 } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";

function AboutUsInfo() {
    return (
        <div className="flex flex-col items-center p-8 text-white">
            <div className="max-w-5xl w-full text-center mb-10">
                <h2 className="text-3xl font-bold text-black mt-2 font-semibold">Who We Are</h2>
                <p className="text-gray-600 mt-4">
                    Problems trying to resolve the conflict between the two major realms
                    of Classical physics: Newtonian mechanics
                </p>
            </div>
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
                <div className="relative w-3/4 m-auto">
                    <img src={intro} alt="Team Meeting" className="w-full rounded-lg shadow-md" />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-black">Most trusted in our field</h3>
                    <p className="text-gray-600 mt-4">
                        Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
                    </p>
                    <ul className="mt-4 space-y-4">
                        <li className="flex items-center">
                            <div className="bg-orange-500 p-2 rounded-full mr-3">
                                <IoMdPeople />
                            </div>
                            <p className="text-gray-600">The quick fox jumps over the lazy dog. Things on a very small scale ...</p>
                        </li>
                        <li className="flex items-center">
                            <div className="bg-orange-500 p-2 rounded-full mr-3">
                                <BsSpeedometer2 />
                            </div>
                            <p className="text-gray-600">The quick fox jumps over the lazy dog. Things on a very small scale ...</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutUsInfo