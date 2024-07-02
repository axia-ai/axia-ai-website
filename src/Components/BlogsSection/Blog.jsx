import React from 'react';
import community1 from '../../assets/community-1.png';
import community2 from '../../assets/community-2.png';
import community3 from '../../assets/community-3.png';

const updates = [
    {
        title: 'Creating Streamlined Safeguarding Processes with OneRen',
        image: community1,
        link: '#',
    },
    {
        title: 'What are your safeguarding responsibilities and how can you manage them?',
        image: community2,
        link: '#',
    },
    {
        title: 'Revamping the Membership Model with Triathlon Australia',
        image: community3,
        link: '#',
    },
];

const Community = () => {
    return (
        <>
            {updates.map((update, index) => (
                <div className='flex flex-col'>
                    <div key={index} className="shadow-md rounded-lg overflow-hidden">
                        <img src={update.image} alt={update.title} className="w-full bject-cover" />
                    </div>
                    <div className="relative bottom-20 bg-gray-100 m-auto max-w-xs mt-0 py-5 p-4 shadow-lg text-center rounded-lg">
                        <h3 className="text-lg font-semibold mb-4 text-gray-500 text-sm sm:text-base md:text-lg">{update.title}</h3>
                        <a href={update.link} className="text-lg font-bold text-primary hover:text-green-600">
                            Readmore &rarr;
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Community;