import React from 'react'
import { motion, spring } from 'motion/react'



let parent = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
}

let children = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0 }
}

const Hero = () => {
    return (
        <motion.header variants={parent} initial="hidden" animate="visible" className='px-10 py-40 flex flex-col justify-center items-center'>
            <div className='space-y-7 md:space-y-10'>
                <div className='flex justify-center -tems-center'>
                    <button className='flex justify-center items-center space-x-1 border px-5 py-2 rounded-full bg-emerald-300/25'>
                        <div className='rounded-full border-5 border-emerald-300'></div>
                        <p className='text-emerald-300 font-semibold'>5000+ jobs available</p></button>
                </div>
                <motion.h1 variants={children} className='text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold'>Finding Your Dream <br /> <span className='bg-linear-to-tr from-emerald-400  to-sky-400 text-transparent bg-clip-text'>Software Engineering</span><br /><span>Role Today</span></motion.h1>
                <motion.h3 variants={children} className='text-center text-xl sm:text-2xl md:text-3xl'>Search through the latest opportunities in software engineering. <br /> Get hired fast with positions updated daily</motion.h3>
                <motion.div variants={children} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.8 }} transition={{ type: spring, stiffness: 120, damping: 7 }} className='flex justify-center items-center'>
                    <button className='cursor-pointer bg-linear-to-br from-green-500 to-green-700 px-10 py-4 rounded text-lg sm:text-2xl font-semibold'
                    >Search</button>
                    &nbsp;
                    &nbsp; 
                    <button className='cursor-pointer bg-linear-to-br from-green-500 to-green-700 px-10 py-4 rounded text-lg sm:text-2xl font-semibold'
                    >Browse</button>

                </motion.div>
            </div>
        </motion.header>
    )
}

export default Hero
