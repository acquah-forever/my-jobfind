import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='flex flex-col justify-center items-center mt-10 max-w-8xl w-full  mb-7'>
            <div className='space-y-5 text-center mb-10'>
                <h1 className='text-3xl mt-10'>Logo</h1>
                <div className='text-sm flex justify-between items-center space-x-3 font-semibold'>
                    <Link className='transition-all border-b border-transparent duration-300 ease-in-out hover:border-white'>Home</Link>
                    <Link className='transition-all border-b border-transparent duration-300 ease-in-out hover:border-white'>Jobs</Link>
                    <Link className='transition-all border-b border-transparent duration-300 ease-in-out hover:border-white'>About</Link>
                    <Link className='transition-all border-b border-transparent duration-300 ease-in-out hover:border-white'>Contact</Link>
                    <Link className='transition-all border-b border-transparent duration-300 ease-in-out hover:border-white'>Job Post</Link>

                </div>
            </div>
            <div className="w-full h-px bg-gray-400 px-7"></div>
            <div className='text-sm grid grid-cols-1 justify-items-center space-y-2 sm:flex justify-between items-center mt-10 max-w-7xl w-full'>
                <p>2026 TechJob finder. All Rights Reserved.</p>
                <div className='flex space-x-3'>
                    <Link className='transition-all border-b border-transparent duration-300 ease-in-out hover:border-white'>Privacy Policy</Link>
                    <Link className='transition-all border-b border-transparent duration-300 ease-in-out hover:border-white'>Terms of Service</Link>
                    <Link className='transition-all border-b border-transparent duration-300 ease-in-out hover:border-white'>Cookie settings</Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer
