import React from 'react'
import { GoDatabase } from "react-icons/go";
import Card from '../ReusableComponents/Card';
import PinkBackgroundComponent from '../ReusableComponents/PinkBackgroundComponent';

function IndustriesPage() {
  return (
    <PinkBackgroundComponent>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mt-2">
        Future-Ready AI Solutions That Feel Ahead of Their Time</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-lg">
        We believe bold actions shape the future by giving a competitive edge. Leading with ambition demands the courage to embrace change. And while doing the right thing is often challenging, it is always worthwhile.
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