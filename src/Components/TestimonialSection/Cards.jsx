import React from 'react'



const Cards = ({para,img,name,work}) =>{
    return(
        <>
            <div className="bg-black rounded-lg p-6 flex flex-col " >
                <p className="text-white text-center text-base mb-4 font-poppins">
                    {para}
                </p>
                <div className="flex flex-col m-1 items-center">
                    <img
                        src={img}
                        alt={name}
                        className="w-12 h-12 rounded-full mr-4 bg-white mb-3"
                    />
                    <div>
                        <h3 className="text-white text-center  font-bold font-poppins">{name}</h3>
                        <p className="text-gray-400 text-center font-poppins">{work}</p>
                    </div>
                </div>
          </div>
        </>
    );

};

export default Cards;