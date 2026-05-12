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

    // jobs is undefined during loading and user would be redirected
    // to home page without isLoading
    useEffect(() => {
        if (!isLoading && !jobs) {
            navigate('/')
        }

        // id is nt part of dependency because id is not used in useEffect
    },[jobs, isLoading, navigate])

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{error.message}</p>
    }



    return (
        <div>
            <h1>{jobs.title}</h1>
            <p>{jobs.company}</p>
            <p>{jobs.location}</p>
            <p>{jobs.salary}</p>
           
        </div>
    )
}

export default JobDetails
