// src/components/AchievementSection/AchievementsGroup.jsx

import React from 'react';

const AchievementsGroup = ({ icon: Icon, count, label }) => {
  return (
    <div className="flex items-center space-x-4 p-0.5">
      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
      <div>
        <h3 className="text-xl sm:text-2xl font-bold">{count}</h3>
        <p className="text-sm sm:text-base text-gray-600">{label}</p>
      </div>
    </div>
  );
};

export default AchievementsGroup;