import React from 'react';
import Blog from './Blog';

const Community = () => {
  return (
    <div className="max-w-7xl my-14 mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-6">Caring is the new marketing</h2>
      <p className="text-center mb-12 text-sm sm:text-base md:text-lg">
        The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who’s joining the community, read about how our community are increasing their membership income and lots more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-16">
        <Blog/>
      </div>
    </div>
  );
};

export default Community;