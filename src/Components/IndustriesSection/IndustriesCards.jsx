import React from 'react'
import { GoDatabase } from "react-icons/go";
import Card from '../ReusableComponents/Card';
import PinkBackgroundComponent from '../ReusableComponents/PinkBackgroundComponent';

function IndustriesPage() {
  return (
    <PinkBackgroundComponent>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mt-2">Analytics that feels like it’s from the future</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-lg">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl" >
        <Card title="Back-end Development" description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas." icon={<GoDatabase color='#fff' size="22px" />} linkAddress="/industries" />
        <Card title="Back-end Development" description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas." icon={<GoDatabase color='#fff' size="22px" />} linkAddress="/industries" />
        <Card title="Back-end Development" description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas." icon={<GoDatabase color='#fff' size="22px" />} linkAddress="/industries" />
        <Card title="Back-end Development" description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas." icon={<GoDatabase color='#fff' size="22px" />} linkAddress="/industries" />
        <Card title="Back-end Development" description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas." icon={<GoDatabase color='#fff' size="22px" />} linkAddress="/industries" />
        <Card title="Back-end Development" description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas." icon={<GoDatabase color='#fff' size="22px" />} linkAddress="/industries" />
        <Card title="Back-end Development" description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas." icon={<GoDatabase color='#fff' size="22px" />} linkAddress="/industries" />
        <Card title="Back-end Development" description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas." icon={<GoDatabase color='#fff' size="22px" />} linkAddress="/industries" />
        <Card title="Back-end Development" description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor egestas." icon={<GoDatabase color='#fff' size="22px" />} linkAddress="/industries" />
      </div>
    </PinkBackgroundComponent>
  )
}

export default IndustriesPage