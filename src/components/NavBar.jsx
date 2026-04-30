import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ChevronDown, House, TableOfContents, Handshake, Image, Menu, X } from 'lucide-react'

import useClick from '../hooks/useClick'

const NavBar = () => {
  
  const [isOpen, toggle, close, close2] = useClick()

  return (
    <header className='py-5 mx-5'>
      <nav className='flex justify-between items-center'>
        <div>
          <Link to='./' className='text-xl md:text-2xl'>Logo</Link>
        </div>

        <div className='text-lg md:text-xl hidden md:flex space-x-3'>
          <Link to='./'>Home</Link>
          <Link>Jobs</Link>
          <Link>About</Link>
          <button className='cursor-pointer flex justify-center items-center'
            onClick={toggle}>
            More <ChevronDown className='mt-1' size={18} /></button>
        </div>
        <div className='hidden md:flex justify-center items-center space-x-3'>
          <div className='bg-sky-600 border px-4 py-2 text-lg md:text-xl'>
            <NavLink to='./signup'>Sign Up</NavLink>
          </div>

          <div className='bg-slate-800 border px-4 py-2 text-lg md:text-xl'>
            <NavLink to='./login'>Log In</NavLink>
          </div>
        </div>

        <button className='flex md:hidden'
          onClick={toggle}>{isOpen ? <X /> : <Menu />}</button>
      </nav>


      {isOpen && (
        <nav className='px-5'>
          <section className='px-5 hidden md:grid md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-3'>
            <div className='space-y-4'>
              <label className='text-md font-bold tracking-tighter' htmlFor="resources">Resources</label>
              <div className='mt-3 flex space-x-4'>
                <House size={20} />
                <div>
                  <NavLink className='text-sm font-semibold underline'onClick={close}>Blog</NavLink>
                  <h2 className='text-sm'>Read Industry Insights.</h2>
                </div>
              </div>

              <div className='mt-2 flex space-x-4'>
                <TableOfContents size={20} />
                <div>
                  <Link className='text-sm font-semibold underline'onClick={close}>FAQ</Link>
                  <h2 className='text-sm'>Common Questions Asked.</h2>
                </div>
              </div>

              <div className='mt-2 flex space-x-4'>
                <Handshake />
                <div>
                  <NavLink className='text-sm font-semibold underline'onClick={close}>Support</NavLink>
                  <h2 className='text-sm'>We are here to help.</h2>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <label className='text-md font-bold tracking-tighter' htmlFor="insights">Latest Insights</label>
              <div className='mt-3 flex space-x-3'>
                <div className='p-10 w-50 bg-gray-400 rounded-xl'>
                  <Image size={40} />
                </div>
                <div>
                  <h1 className='text-sm font-semibold'>Finding Your Next Role</h1>
                  <h2 className='text-sm'>Tips for landing positions.</h2>
                  <NavLink className='text-sm underline'onClick={close}>Read More</NavLink>
                </div>
              </div>

              <div className='mt-3 flex space-x-3'>
                <div className='w-50 p-10 bg-gray-400 rounded-xl'>
                  <Image size={40} />
                </div>
                <div>
                  <h1 className='text-sm font-semibold'>Remote Work Trends</h1>
                  <h2 className='text-sm'>What companies are hiring.</h2>
                  <NavLink className='text-sm underline'onClick={close}>Read More</NavLink>
                </div>
              </div>

            </div>


            <div className='space-y-4'>
              <label className='text-md font-bold tracking-tighter' htmlFor="contact">Contact</label>
              <div>
                <h2 className='text-sm'>Get In touch with us.</h2>
              </div>

              <div className=' text-sm flex flex-col'>
                <label htmlFor="email">Email</label>
                <span className='font-semibold'>nothtekayjay@icloud.com</span>
              </div>


              <div className=' text-sm flex flex-col'>
                <label htmlFor="mobile">Telephone</label>
                <span className='font-semibold'>+44 (0)7931 55 8921</span>
              </div>
            </div>
          </section>
        </nav>

      )}

      {isOpen && (
        <div>
          <div className='mt-7 mb-4 flex flex-col md:hidden text-lg md:text-xl space-y-2'>
            <Link onClick={close2}>Home</Link>
            <Link onClick={close2}>Jobs</Link>
            <Link onClick={close2}>About</Link>
            <Link onClick={close2}>Contact</Link>
          </div>
          <div className='text-center flex flex-col md:hidden space-y-2 w-30'>
            <div className='bg-sky-600 border px-4 py-2 text-lg md:text-xl'>
              <NavLink onClick={close2}>Sign Up</NavLink>
            </div>

            <div className='bg-slate-800 border px-4 py-2 text-lg md:text-xl'>
              <NavLink onClick={close2}>Log In</NavLink>
            </div>
          </div>
        </div>
      )}


    </header>
  )
}

export default NavBar
