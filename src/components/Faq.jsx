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
            <h1>FAQ</h1>
            <p>Questions about how TechJob Finder works and wgat we offer.</p>

            <div className='flex items-center space-x-10'>
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

            <div className='flex items-center space-x-10'>
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



        </section>
    )
}

export default Faq
