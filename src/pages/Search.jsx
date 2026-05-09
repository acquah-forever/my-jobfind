import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

async function getJobs() {
    const res = await fetch("http://localhost:3000/jobs")
    if (!res.ok) {
        throw new Error("NetWork Issues")
    }
    return res.json()
}

const Search = () => {
    return (
        <section className=' grid grid-cols-1 justify-items-center px-7'>
            <div className='mb-7'>
                <button className='flex justify-center items-center space-x-1 border px-5 py-2 rounded-full bg-emerald-300/25'>
                    <div className='rounded-full border-5 border-emerald-300'></div>
                    <p className='text-emerald-300 text-sm font-semibold'>2000+ jobs available</p></button>
            </div>

            <input className='max-w-4xl w-full p-2 border rounded focus:border-0 focus:ring focus:outline-0 focus:ring-green-500' type="search" placeholder='Search for Job...' />

        </section>
    )
}

export default Search
