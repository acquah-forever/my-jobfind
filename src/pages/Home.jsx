import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'

import { getFeatures } from '../data/fetatures'

const Home = () => {
  const features = getFeatures()

  return (
    <div>
      <Hero />
      <div>
        <Features />
      </div>

    </div>
  )
}

export default Home
