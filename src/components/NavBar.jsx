import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ChevronDown, House, TableOfContents, Handshake,  Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { AuthContext } from '../AuthContext/AuthContext'

import useClick from '../hooks/useClick'

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)

  const [isOpen, toggle, close, close2] = useClick()


  let parent = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.25, duration: 0.7 } }
  }

  let children = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <header className='py-5 mx-5'>
      <nav className='flex justify-between items-center'>
        <div>
          <Link to='./' className='text-xl md:text-2xl'>Logo</Link>
        </div>

        <div className='text-md md:text-lg hidden md:flex space-x-3'>
          <Link to='./'>Home</Link>
          <Link smooth to='/search'>Jobs</Link>

          <button className='cursor-pointer flex justify-center items-center'
            onClick={toggle}>
            More <ChevronDown className='mt-1' size={18} /></button>

        </div>

        {user ? (<button className='bg-slate-800 border px-4 py-2 text-lg md:text-xl' onClick={logOut}>LogOut</button>) : (

          <div className='hidden md:flex justify-center items-center space-x-3'>
            <div className=' text-md md:text-lg'>
              <NavLink to='./signup'>Sign Up</NavLink>
            </div>

            <div className='bg-linear-to-br text-black from-emerald-400 font-semibold to-green-400 rounded-xl border px-4 py-2 text-md md:text-lg'>
              <NavLink to='./login'>Log In</NavLink>
            </div>
          </div>

        )}


        <button className='flex md:hidden cursor-pointer'
          onClick={toggle}>{isOpen ? <X /> : <Menu />}</button>
      </nav>


      <AnimatePresence>
        {isOpen && (
          <motion.nav variants={parent} initial="hidden" animate="visible" exit={{ opacity: 0, y: 50 }} className='px-5'>
            <section className='px-5 hidden md:grid md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-3'>
              <motion.div variants={children} className='space-y-4'>
                <label className='text-md font-bold tracking-tighter' htmlFor="resources">Resources</label>
                <div className='mt-3 flex space-x-4'>
                  <House size={20} />
                  <motion.div variants={children} whileHover={{ scale: 1.05 }}>
                    <NavLink className='text-sm font-semibold underline' onClick={close}>Blog</NavLink>
                    <h2 className='text-sm'>Read Industry Insights.</h2>
                  </motion.div>
                </div>

                <div className='mt-2 flex space-x-4'>
                  <TableOfContents size={20} />
                  <motion.div variants={children} whileHover={{ scale: 1.05 }}>
                    <Link to='/#faq' className='text-sm font-semibold underline' onClick={close}>FAQ</Link>
                    <h2 className='text-sm'>Common Questions Asked.</h2>
                  </motion.div>
                </div>

                <div className='mt-2 flex space-x-4'>
                  <Handshake />
                  <motion.div variants={children} whileHover={{ scale: 1.05 }}>
                    <NavLink className='text-sm font-semibold underline' onClick={close}>Support</NavLink>
                    <h2 className='text-sm'>We are here to help.</h2>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={children} className='space-y-4'>
                <label className='text-md font-bold tracking-tighter' htmlFor="insights">Latest Insights</label>
                <div className='mt-3 flex space-x-3'>
                  <motion.div variants={children} whileHover={{ scale: 1.05 }} className='p-10 w-50 rounded-xl bg-[url("https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg")] bg-cover bg-center bg-no-repeat'>
                  </motion.div>
                  <div>
                    <h1 className='text-sm font-semibold'>Finding Your Next Role</h1>
                    <h2 className='text-sm'>Tips for landing positions.</h2>
                    <motion.div variants={children} whileHover={{ scale: 1.05 }}>
                      <NavLink className='text-sm underline' onClick={close}>Read More</NavLink>
                    </motion.div>
                  </div>
                </div>

                <div className='mt-3 flex space-x-3'>
                  <motion.div variants={children} whileHover={{ scale: 1.05 }} className='w-50 p-10 bg-gray-400 rounded-xl'>
                    
                  </motion.div>
                  <div>
                    <h1 className='text-sm font-semibold'>Remote Work Trends</h1>
                    <h2 className='text-sm'>What companies are hiring.</h2>
                    <motion.div variants={children} whileHover={{ scale: 1.05 }}>
                      <NavLink className='text-sm underline' onClick={close}>Read More</NavLink>
                    </motion.div>
                  </div>
                </div>

              </motion.div>

              <motion.div variants={children} className='space-y-4'>
                <label className='text-md font-bold tracking-tighter' htmlFor="contact">Contact</label>
                <div>
                  <h2 className='text-sm'>Get In touch with us.</h2>
                </div>

                <div className=' text-sm flex flex-col'>
                  <label htmlFor="email">Email</label>
                  <motion.span variants={children} whileHover={{ scale: 1.05 }} className='font-semibold'>nothtekayjay@icloud.com</motion.span>
                </div>


                <div className=' text-sm flex flex-col'>
                  <label htmlFor="mobile">Telephone</label>
                  <motion.span variants={children} whileHover={{ scale: 1.05 }} className='font-semibold'>+44 (0)7931 55 8921</motion.span>
                </div>
              </motion.div>
            </section>
          </motion.nav>

        )}
      </AnimatePresence>

      <AnimatePresence>
        {
          isOpen && (
            <motion.div variants={parent} initial="hidden" animate="visible" exit={{ opacity: 0, y: -50 }} className='fixed w-full top-10 pr-8 backdrop-blur-lg mt-4' >
              <motion.div variants={children} className='mt-7 mb-4 flex flex-col md:hidden text-lg md:text-xl space-y-2'>
                <Link onClick={close2}>Home</Link>
                <Link onClick={close2}>Jobs</Link>
                <Link onClick={close2}>Contact</Link>
              </motion.div>
              <motion.div variants={children} className='text-center flex flex-col md:hidden space-y-2 w-full'>
                
                <NavLink className='bg-sky-600 border px-4 py-2 text-lg md:text-xl' to='/signup' onClick={close2}>Sign Up</NavLink>

                <NavLink className='bg-slate-800 border px-4 py-2 text-lg md:text-xl' to='/login' onClick={close2}>Log In</NavLink>

              </motion.div>
            </motion.div>
          )
        }
      </AnimatePresence>


    </header >
  )
}

export default NavBar
