import React from 'react'
import vision from "../../assets/vision.png";

function AboutUsVision() {
    return (
        // <div className="bg-gray-100 p-6">
        <div className="flex flex-col items-center max-w-4xl w-full bg-white rounded-lg md:my-10 my-4 mx-auto p-2 sm:flex-row text-center md:text-left">
            <div className="flex-1 md:mr-10 p-4 m-auto">
                <h1 className="text-4xl font-normal">Unveiling the Vision and Values of ImmiGo</h1>
                <p className="text-gray-700 mt-4 text-xs md:text-sm">
                    At nullam leo consectetur euismod enim. Orci donec sapien et semper fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh. Amet duis orci nibh nullam. Phasellus suspendisse ornare arcu eu orci urna justo.
                </p>
                <div className="mt-6">
                    <h3 className="text-blue-500 text-lg font-bold">↑ Our Vision</h3>
                    <p className="text-gray-700 mt-2 text-xs md:text-sm">
                        At nullam leo consectetur euismod enim. Orci donec sapien et semper fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
                    </p>
                </div>
                <div className="mt-6">
                    <h3 className="text-blue-500 text-lg font-bold">↑ Our Value</h3>
                    <p className="text-gray-700 mt-2 text-xs md:text-sm">
                        At nullam leo consectetur euismod enim. Orci donec sapien et semper fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
                    </p>
                </div>
                
            </div>
            <div className="flex-1 m-auto sm:ml-10 w-1/2 md:w-full">
                <img src={vision} alt="Woman with megaphone" className="rounded-lg shadow-md" />
            </div>
        </div>

        // </div>

    )
}

export default AboutUsVision