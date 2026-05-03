import React from 'react'
import { Link } from 'lucide-react'
import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'

const features = ({ feature }) => {

  let parent = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
  }

  let children = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0 }
  }
  return (
    <motion.section variants={parent} initial="hidden" whileInView="visible" viewport={{once: false, amount:0.7}} className='border rounded-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 w-full max-w-sm sm:max-w-md lg:max-w-lg'>
      <motion.p variants={children} className='mb-4 text-sm sm:text-base font-semibold'>{feature.title}</motion.p>
      <motion.h1 variants={children} className='text-3xl font-bold mb-10'>{feature.details}</motion.h1>
      <motion.p variants={children} className='text-md mb-10'>{feature.moreinfo}</motion.p>
      <motion.div  className='flex items-center space-x-2'>
      <motion.button variants={children} whileHover={{scale:1.1}} whileTap={{scale:0.5}} className='cursor-pointer text-lg'>{feature.cta}</motion.button>
      <ChevronRight className='cursor-pointer' size={22} />
      </motion.div>
    </motion.section>
  )
}

export default features
