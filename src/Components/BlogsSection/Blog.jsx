import React from 'react';
import community1 from '../../assets/community-1.png';
import community2 from '../../assets/community-2.png';
import community3 from '../../assets/community-3.png';

const updates = [
    {
        title: 'The AI Development landscape is rapidly evolving with increased focus on automation, scalability, and ethical AI, and organizations can stay ahead by investing in cutting-edge technologies, upskilling teams, and fostering innovation through responsible and data-driven AI solutions.',
        image: community1,
        link: '/services',
    },
    {
        title: 'ChatGPT Integrations are expanding with advancements in API capabilities, customizability, and cross-platform applications, and organizations can improve by adopting flexible integration strategies, enhancing user experience with tailored conversational AI, and staying agile in leveraging new features and updates.',
        image: community2,
        link: '/services',
    },
    {
        title: 'Data Engineering practices are shifting towards real-time processing, cloud-native architectures, and AI-driven automation, and organizations can improve by modernizing their data infrastructure, adopting scalable data pipelines, and empowering teams with advanced tools for faster, more efficient data handling.',
        image: community3,
        link: '/services',
    },
    {
        title: 'The Software Engineering paradigms are increasingly focused on cloud-native development, microservices, and DevOps automation, and organizations can improve by embracing continuous integration/continuous deployment (CI/CD), enhancing collaboration through agile methodologies, and leveraging scalable, resilient architectures for faster innovation.',
        image: community3,
        link: '/services',
    },  
    {
        title: 'Cloud Computing world is evolving with the rise of hybrid and multi-cloud environments, serverless architectures, and edge computing, and organizations can improve by adopting flexible cloud strategies, optimizing resource management, and integrating advanced cloud-native services for enhanced agility and scalability.',
        image: community3,
        link: '/services',
    },
    {
        title: 'DevOps landscape is increasingly driven by automation, infrastructure as code (IaC), and AI-enhanced operations, and organizations can improve by investing in end-to-end automation, fostering a culture of continuous collaboration, and leveraging AI and machine learning for predictive maintenance and optimization.',
        image: community3,
        link: '/services',
    },
    {
        title: 'Cybersecurity landscape is becoming more complex with the rise of sophisticated threats, zero-trust architectures, and AI-driven defenses, and organizations can improve by adopting proactive threat detection, strengthening access controls, and continuously updating their security strategies to mitigate evolving risks.',
        image: community3,
        link: '/services',
    },
    {
        title: 'The rapid advancement of AI and cloud technologies is reshaping the App Development landscape, enabling organizations to create more innovative and efficient applications faster than ever before. To stay competitive, organizations should embrace these technologies, invest in skilled talent, and focus on delivering exceptional user experiences.',
        image: community3,
        link: '/services',
    },
    {
        title: 'The Internet of Things (IoT) landscape is rapidly evolving, with an increasing number of connected devices and growing complexity. To thrive in this environment, organizations must focus on data security, scalability, and interoperability, while adopting advanced analytics and AI to extract valuable insights from IoT data.',
        image: community3,
        link: '/services',
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
                            Explore More &rarr;
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Community;