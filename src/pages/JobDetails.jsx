import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

async function findJob(id) {
    const res = await fetch(`http://localhost:3000/jobs/${id}`)
    if (!res.ok) {
        throw new Error("Network Issues")
    }
    return res.json()
}

const JobDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data: jobs, isLoading, isError, error } = useQuery({
        queryKey: ["jobs", id],
        queryFn: () => findJob(id),
        staleTime: 1000 * 6,
    })

    useEffect(() => {
        if (!isLoading && !jobs) {
            navigate('/')
        }
    }, [jobs, isLoading, navigate])

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error: {error.message}</p>
    if (!jobs) return <p>Job not found</p>

    return (
        <section className='flex flex-col justify-center items-center px-7'>
            <div className=' max-w-3xl w-full space-y-2'>
                <div className='mb-10'>
                    <img className='w-full h-93 rounded-2xl object-cover object-center' src={"https://cdn.pixabay.com/photo/2024/09/18/16/40/business-9056542_1280.jpg"} alt="image" />
                </div>
                <h1 className='text-3xl font-semibold'>{jobs.title}</h1>
                <h1>{jobs.skills.map((item) => 
                <span className='text-sm font-semibold'>{item}</span>
                )}</h1>
                <p className='text-md font-semibold'>{jobs.company}</p>
                <div className='border px-4 py-1 text-start inline-block rounded-full'>
                <p className='text-md font-semibold'>{jobs.location}</p>
                </div>
                <h1 className='text-lg font-semibold'>About the Job</h1>
                <p>{jobs.description}</p>
                <p className='text-2xl text-cyan-400'>{jobs.salary}</p>
            </div>
        </section>
    )
}

export default JobDetails