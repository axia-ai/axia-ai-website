import React from 'react';
import Blog from './Blog';

const Community = () => {
  return (
    <div className="max-w-7xl my-14 mx-auto p-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Crafting Tailored AI, Data, & Software Solutions</h2>
      <p className="text-center mb-12 text-sm sm:text-base md:text-lg">
      <strong>We help organizations to be AI ready and consistently ahead of the curve!</strong> <br></br>At Axia, we specialize in advanced machine learning, predictive analytics, and data science, offering state-of-the-art AI consultancy services engineered to optimize and future-proof your business operations. Our experienced team delivers bespoke, algorithm-driven solutions, integrating deep learning, neural networks, and natural language processing (NLP) to address complex challenges. By leveraging our domain expertise and deploying scalable AI architectures, you can transform your data strategy, unlock actionable insights, and capitalize on the latest advancements in artificial intelligence, driving both innovation and sustained competitive advantage.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-16">
        <Blog/>
      </div>
    </div>
  );
};

export default Community;