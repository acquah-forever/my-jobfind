import React, { Children, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion } from 'motion/react'

const Faq = () => {

    let parent = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.8 } }
    }

    let children = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0 }
    }


    const [open, setOpen] = useState(false)

    function handleClick(index) {
        setOpen((prev) => (prev === index ? null : index))
    }
    return (
        <motion.section variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} className='min-h-screen flex flex-col items-center'>
            <div className='space-y-4 text-center mb-20'>
                <motion.h1 variants={children} className='text-4xl font-bold'>FAQ</motion.h1>
                <motion.p variants={children} className='text-2xl font-semibold'>Questions about how TechJob Finder works and wgat we offer.</motion.p>
            </div>

            <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} whileHover={{scale:1.06}} className='border p-7 max-w-5xl w-full mb-7'>
                <motion.div variants={children} className='flex items-center justify-between mb-4'>
                    <h1>How often are jobs posted ?</h1>
                    <button onClick={() => handleClick(1)}>
                        {open === 1 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                </motion.div>

                {open === 1 && (
                    <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }}>
                        <motion.h1 variants={children}>New positions arrive daily from companies actively hiring. Werefresh listings every morning so
                            you never miss an opportunity. The best jobs move fast, and we make sure you see them first.
                        </motion.h1>
                    </motion.div>
                )}

            </motion.div>

            <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} whileHover={{scale:1.06}} className='border p-7 max-w-5xl w-full mb-7'>
                <motion.div variants={children} className='flex items-center justify-between mb-4'>
                    <h1>Can I filter by location ?</h1>
                    <button onClick={() => handleClick(2)}>
                        {open === 2 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                </motion.div>

                {open === 2 && (
                    <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }}>
                        <motion.h1 variants={children}>Yes. Filter by remote, on-site or specific cities. You can also combine location with the role type and
                            experince level. Our search undestand what you want and shows only what matches.
                        </motion.h1>
                    </motion.div>
                )}
            </motion.div>

            <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} whileHover={{scale:1.06}} className='border p-7 max-w-5xl w-full mb-7'>
                <motion.div variants={children} className='flex items-center justify-between mb-4'>
                    <h1>Is there a cost to use this ?</h1>
                    <button onClick={() => handleClick(3)}>
                        {open === 3 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                </motion.div>

                {open === 3 && (
                    <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }}>
                        <motion.h1 variants={children} >This is free for job seekers. Browse, search and apply without paying anything. We make
                            monet from employers, not from you
                        </motion.h1>
                    </motion.div>
                )}
            </motion.div>

            <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} whileHover={{scale:1.06}} className='border p-7 max-w-5xl w-full mb-7'>
                <motion.div variants={children} className='flex items-center justify-between mb-4'>
                    <h1>How do you curate jobs?</h1>
                    <button onClick={() => handleClick(4)}>
                        {open === 4 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                </motion.div>

                {open === 4 && (
                    <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }}>
                        <motion.h1 variants={children}>We review every position to ensure quality. No spam, no dead ends, no companies with bad
                            reputations. We show you positions from places worth your time.
                        </motion.h1>
                    </motion.div>
                )}

            </motion.div>

            <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} whileHover={{scale:1.06}} className='border p-7 max-w-5xl w-full mb-7'>
                <motion.div variants={Children} className='flex items-center justify-between mb-4'>
                    <h1>Can I set job alerts ?</h1>
                    <button onClick={() => handleClick(5)}>
                        {open === 5 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                </motion.div>

                {open === 5 && (
                    <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }}>
                        <motion.h1 variants={children}>Not yet, but its coming soon. For now, check back daily or use our search to find roles matching your
                            criteria. New listins arrive consistently.
                        </motion.h1>
                    </motion.div>
                )}
            </motion.div>
        </motion.section>
    )
}

export default Faq
