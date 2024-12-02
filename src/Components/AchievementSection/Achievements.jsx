// src/components/AchievementSection/Achievements.jsx

import React from 'react';
import { FaUsers, FaRegHandshake, FaCalendarCheck, FaMoneyCheckAlt } from 'react-icons/fa';
import AchievementsGroup from './AchievementsGroup';


const Achievements = () => {
    return (
        <div className="bg-secondaryBackround p-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8 px-4">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Helping your <br />
                        <span className="text-primary">business re-invent itself</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base">
                        We reached here with our hard work and dedication
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8 lg:gap-16 text-left lg:w-1/2">
                    <AchievementsGroup icon={FaUsers} count="25+" label="Projects Delivered" />
                    <AchievementsGroup icon={FaRegHandshake} count="12+" label="Clients Served" />
                    <AchievementsGroup icon={FaCalendarCheck} count="85%" label="Manual Time Saved" />
                    <AchievementsGroup icon={FaMoneyCheckAlt} count="5+" label="Industries Served" />
                </div>
            </div>
        </div>
    );
};

export default Achievements;
