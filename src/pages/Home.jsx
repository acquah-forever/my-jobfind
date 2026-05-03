import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'

import { getFeatures } from '../data/features'

const Home = () => {
  const features = getFeatures()

  return (
    <div>
      <Hero />
      <h1 className='font-bold text-4xl text-center mb-7'>What makes us different</h1>
      <h1 className='font-semibold text-center text-2xl'>We built the platform to cut through the noise and get you hired</h1>
      <div className='mt-10 px-5 py-20 grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto'>
        {features.map((feature) => (<Features
          feature={feature} key={feature.id}
        />))}
      </div>

    </div>
  )
}

export default Home
