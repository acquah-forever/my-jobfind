import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'

import { getFeatures } from '../data/features'

const Home = () => {
  const features = getFeatures()

  return (
    <div>
      <Hero />
      <div>
        <h1 className='font-bold text-4xl text-center'>What makes us different</h1>
        <h1 className='font-semibold text-center text-2xl'>We built the platform to cut through the noise and get you hired</h1>
        {features.map((feature) => (<Features
          feature={feature} key={feature.id}
        />))}
      </div>

    </div>
  )
}

export default Home
