import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { h1 } from 'motion/react-client'

const Faq = () => {
    const [open, setOpen] = useState(false)

    function handleClick(index) {
        setOpen((prev) => (prev === index ? null : index))
    }
    return (
        <section className='min-h-screen flex flex-col items-center'>
            <div className='space-y-4 text-center mb-20'>
                <h1 className='text-4xl font-bold'>FAQ</h1>
                <p className='text-2xl font-semibold'>Questions about how TechJob Finder works and wgat we offer.</p>
            </div>

            <div className='border p-7 max-w-5xl w-full mb-7'>
                <div className='flex items-center justify-between mb-4'>
                    <h1>How often are jobs posted ?</h1>
                    <button onClick={() => handleClick(1)}>
                        {open === 1 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                </div>

                {open === 1 && (
                    <div>
                        <h1>New positions arrive daily from companies actively hiring. Werefresh listings every morning so
                            you never miss an opportunity. The best jobs move fast, and we make sure you see them first.
                        </h1>
                    </div>
                )}

            </div>

            <div className='border p-7 max-w-5xl w-full mb-7'>
                <div className='flex items-center justify-between mb-4'>
                    <h1>Can I filter by location ?</h1>
                    <button onClick={() => handleClick(2)}>
                        {open === 2 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                </div>

                {open === 2 && (
                    <div>
                        <h1>Yes. Filter by remote, on-site or specific cities. You can also combine location with the role type and
                            experince level. Our search undestand what you want and shows only what matches.
                        </h1>
                    </div>
                )}
            </div>

            <div className='border p-7 max-w-5xl w-full mb-7'>
                <div className='flex items-center justify-between mb-4'>
                    <h1>Is there a cost to use this ?</h1>
                    <button onClick={() => handleClick(3)}>
                        {open === 3 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                </div>

                {open === 3 && (
                    <div>
                        <h1>This is free for job seekers. Browse, search and apply without paying anything. We make
                            monet from employers, not from you
                        </h1>
                    </div>
                )}
            </div>

            <div className='border p-7 max-w-5xl w-full mb-7'>
                <div className='flex items-center justify-between mb-4'>
                    <h1>How do you curate jobs?</h1>
                    <button onClick={() => handleClick(4)}>
                        {open === 4 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                </div>

                {open === 4 && (
                    <div>
                        <h1>We review every position to ensure quality. No spam, no dead ends, no companies with bad
                            reputations. We show you positions from places worth your time.
                        </h1>
                    </div>
                )}

            </div>

            <div className='border p-7 max-w-5xl w-full mb-7'>
                <div className='flex items-center justify-between mb-4'>
                    <h1>Can I set job alerts ?</h1>
                    <button onClick={() => handleClick(5)}>
                        {open === 5 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                </div>

                {open === 5 && (
                    <div>
                        <h1>Not yet, but its coming soon. For now, check back daily or use our search to find roles matching your
                            criteria. New listins arrive consistently.
                        </h1>
                    </div>
                )}
            </div>





        </section>
    )
}

export default Faq
