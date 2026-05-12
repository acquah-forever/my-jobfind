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

    { isLoading && <p>Loading...</p> }

    { isError && <p>{error.message}</p> }


    return (
        <section className='flex flex-col justify-center items-center'>
            <div className=' max-w-3xl w-full'>
                <div className='mb-10'>
                    <img className='w-full h-50 rounded-2xl' src={"https://cdn.pixabay.com/photo/2022/05/12/03/19/binary-code-7190628_1280.jpg"} alt="image" />
                </div>
                <h1 className='text-3xl font-semibold'>{jobs.title}</h1>
                <p>{jobs.company}</p>
                <p>{jobs.location}</p>
                <p>{jobs.salary}</p>

            </div>
        </section>
    )
}

export default JobDetails
