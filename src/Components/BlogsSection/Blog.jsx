import React from 'react';
import aiDevelopment from "../../assets/Blogs/aiDevelopment.png";
import dataEngineering from "../../assets/Blogs/dataEngineering.png";
import devops from "../../assets/Blogs/devops.png";
import iot from "../../assets/Blogs/iot.png";
import cloud from "../../assets/Blogs/cloud.png";
import chatgptIntegration from "../../assets/Blogs/chatgptIntegration.png";
import software from "../../assets/Blogs/software.png";
import cybersecurity from "../../assets/Blogs/cybersecurity.png";
import aiCloud from "../../assets/Blogs/aiCloud.png";


const updates = [
    {
        title: 'The AI development landscape is rapidly evolving, with an increased focus on automation, scalability, ethical AI, and transparent decision-making. Organizations can stay ahead by investing in cutting-edge technologies, upskilling teams, fostering innovation through responsible, data-driven and secure AI solutions.',
        image: aiDevelopment,
        link: '/services',
    },
    {
        title: 'ChatGPT Integrations are expanding with advancements in API capabilities, customizability, and cross-platform applications, and organizations can improve by adopting flexible integration strategies, enhancing user experience with tailored conversational AI, and staying agile in leveraging new features and updates.',
        image: chatgptIntegration,
        link: '/services',
    },
    {
        title: 'Data Engineering practices are shifting towards real-time processing, cloud-native architectures, and AI-driven automation, and organizations can improve by modernizing their data infrastructure, adopting scalable data pipelines, and empowering teams with advanced tools for faster, more efficient data handling.',
        image: dataEngineering,
        link: '/services',
    },
    {
        title: 'The Software Engineering paradigms are increasingly focused on cloud-native development, microservices, and DevOps automation, and organizations can improve by embracing CI/CD, incorporating agile methodologies, and leveraging scalable, resilient architectures for faster innovation.',
        image: software,
        link: '/services',
    },  
    {
        title: 'Cloud Computing world is evolving with the rise of hybrid and multi-cloud environments, serverless architectures, and edge computing, and organizations can improve by adopting flexible cloud strategies, optimizing resource management, and integrating advanced cloud-native services for enhanced agility and scalability.',
        image: cloud,
        link: '/services',
    },
    {
        title: 'DevOps landscape is increasingly driven by automation, infrastructure as code (IaC), and AI-enhanced operations, and organizations can improve by investing in end-to-end automation, fostering a culture of continuous collaboration, and leveraging AI and machine learning for predictive maintenance and optimization.',
        image: devops,
        link: '/services',
    },
    {
        title: 'Cybersecurity landscape is becoming more complex with the rise of sophisticated threats, zero-trust architectures, and AI-driven defenses, and organizations can improve by adopting proactive threat detection, strengthening access controls, and continuously updating their security strategies to mitigate evolving risks.',
        image: cybersecurity,
        link: '/services',
    },
    {
        title: 'The rapid advancement of AI and cloud technologies is reshaping the App Development landscape, enabling organizations to create more innovative and efficient applications faster than ever before. To stay competitive, organizations should embrace these technologies, invest in skilled talent, and deliver exceptional user experiences.',
        image: aiCloud,
        link: '/services',
    },
    {
        title: 'The Internet of Things (IoT) landscape is rapidly evolving, with an increasing number of connected devices and growing complexity. To thrive in this environment, organizations must focus on data security, scalability, and interoperability, while adopting advanced analytics and AI to extract valuable insights from IoT data.',
        image: iot,
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
                        <a href={update.link} className="text-lg font-bold text-primary hover:text-bg_dark_primary">
                            Explore More &rarr;
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Community;