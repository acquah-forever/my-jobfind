import React from 'react'
import { motion } from 'motion/react'

const Reviews = ({ review }) => {

    let parent = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
    }

    let children = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.section variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} className='border rounded-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 w-full max-w-sm sm:max-w-md lg:max-w-lg'>

            <motion.p variants={children} className='mb-4 text-sm sm:text-base font-semibold'>{review.review}</motion.p>

            <div className='flex  items-center space-x-3'>
                <img className='rounded-full w-15 h-15 object-center object-cover' src={review.image} alt="headshot" />
                <div className='mt-7'>
                    <motion.p variants={children} className=' text-sm sm:text-base font-semibold'>{review.name}</motion.p>
                    <motion.h1 variants={children} className='text-sm  mb-10'>{review.position}</motion.h1>
                </div>
            </div>
        </motion.section>
    )
}

export default Reviews
