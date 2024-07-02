import React from 'react';
import vrglass from '../../assets/vr-glass.png';

const Calender = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center text-black p-5 lg:p-10 my-14 md:my-20">
            <div className="mb-5 sm:mb-0 sm:flex-1">
                <img
                    src={vrglass}
                    alt="VR Headset"
                    className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
                />
            </div>
            <div className="flex-1 space-y-4 text-left">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-left">
                    How to design your site footer like we did
                </h1>
                <p className="text-sm sm:text-base md:text-lg">
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <div className='text-center sm:text-left'>
                <button className="bg-primary hover:bg-green-700 text-white py-2 px-4 rounded text-sm sm:text-lg">
                    Learn More
                </button>
                </div>
            </div>
        </div>
    );
};

export default Calender;
