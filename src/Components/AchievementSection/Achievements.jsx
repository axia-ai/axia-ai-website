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
                        Helping a local <br />
                        <span className="text-primary">business reinvent itself</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base">
                        We reached here with our hard work and dedication
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8 lg:gap-16 text-left lg:w-1/2">
                    <AchievementsGroup icon={FaUsers} count="45,341" label="Members" />
                    <AchievementsGroup icon={FaRegHandshake} count="46,328" label="Clubs" />
                    <AchievementsGroup icon={FaCalendarCheck} count="28,867" label="Event Bookings" />
                    <AchievementsGroup icon={FaMoneyCheckAlt} count="26,436" label="Payments" />
                </div>
            </div>
        </div>
    );
};

export default Achievements;
