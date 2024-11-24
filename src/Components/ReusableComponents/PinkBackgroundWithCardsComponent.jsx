import React from 'react'
import PinkBackgroundComponent from './PinkBackgroundComponent'
import Card from './Card'

function PinkBackgroundWithCardsComponent({title, description, cards}) {
  return (
    <PinkBackgroundComponent>
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mt-2">{title}</h1>
        <p className="text-gray-600 mt-4 max-w-4xl mx-auto text-sm sm:text-lg">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto px-14 py-12">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={<card.icon color='#fff' size="22px" />}
            linkAddress={card.linkAddress}
          />
        ))}
      </div>
    </PinkBackgroundComponent>
  )
}

export default PinkBackgroundWithCardsComponent