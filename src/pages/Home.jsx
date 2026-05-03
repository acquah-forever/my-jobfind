import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Insights from '../components/Insights'
import { motion } from 'motion/react'

import { getFeatures } from '../data/features'

const Home = () => {
  const features = getFeatures()

  let parent = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
  }

  let children = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div>
      <Hero />

      <motion.div className='px-2' variants={parent} initial="hidden" whileInView="visible" viewport={{once: false, amount: 0.7}}>
        <motion.h1 variants={children} className='font-bold  text-3xl sm:text-4xl text-center mb-7'>What makes us different</motion.h1>
        <motion.h1 variants={children} className='font-semibold text-center text-xl sm:text-2xl'>We built the platform to cut through the noise and get you hired</motion.h1>
      </motion.div>

      <div className='mt-10 px-5 py-20 grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto'>
        {features.map((feature) => (<Features
          feature={feature} key={feature.id}
        />))}
      </div>

      <motion.div variants={parent} initial ="hidden" whileInView="visible" viewport={{once: false, amount: 0.7}}>
        <motion.h1 variants={children} className='font-bold  text-3xl sm:text-4xl text-center mb-7'>Stay Ahead in Tech</motion.h1>
        <motion.h1 variants={children} className='font-semibold text-center text-xl sm:text-2xl'>Read what matters most to engineers building their careers.</motion.h1>

      </motion.div>

    </div>
  )
}

export default Home
