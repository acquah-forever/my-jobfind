import React, { useState, useMemo, useEffect } from 'react'
import { ClipLoader } from "react-spinners";;
import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

async function getJobs() {
    const res = await fetch('http://localhost:3000/jobs')
    if (!res.ok) {
        throw new Error("Network Issues")
    }
    return res.json()
}

const Search = () => {

    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const navigate = useNavigate()  

    const jobsPerPage = 5

    const { data: jobs, isLoading, isError, error } = useQuery({

        queryKey: ["jobs"],
        queryFn: getJobs,
        staleTime: 1000 * 6
    })

    function handleChange(e) {
        setQuery(e.target.value)
    }

    function handlePrevious() {
        setPage((prev) => Math.max(prev - 1, 1))
    }

    function handleNext() {
        setPage((prev) => Math.min(prev + 1, totalPages))
    }

    function handleClick() {
        navigate('/')
    }

    // for searching job in other pages. query typed will
    // search from page 1
    useEffect(() => {
        setPage(1)
    }, [query])


    // filter jobs
    const filteredJobs = useMemo(() => {

        const lowerCase = query.toLowerCase()

        if (!jobs) return []

        if (query.trim() === "") return jobs

        return jobs?.filter((item) =>
            item.title.toLowerCase().includes(lowerCase) ||
            item.company.toLowerCase().includes(lowerCase) ||
            item.location.toLowerCase().includes(lowerCase) ||
            item.employmentType.toLowerCase().includes(lowerCase) ||
            item.salary.toLowerCase().includes(lowerCase)

        ) || []
    }, [jobs, query])

    // Pagination calculations
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)

    const startIndex = (page - 1) * jobsPerPage
    const endIndex = startIndex + jobsPerPage

    const paginatedJobs = filteredJobs.slice(startIndex, endIndex)

    // keeps the current page valid when the number of pages changes.
    useEffect(() => {
        setPage((p) => Math.min(p, totalPages || 1))
    }, [totalPages])

    if (isLoading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <ClipLoader color="#36d7b7" size={100} />
            </div>
        )
    }

    if (isError) {
        return (
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <p className='text-red-500 font-semibold'>
                    {error.message}
                </p>
                <button className='cursor-pointer mt-4 bg-blue-500 text-white py-2 px-4 rounded' onClick={handleClick}>Back Home</button>
            </div>
        )
    }

    return (
        <main id='seerch' className='flex flex-row justify-center items-center'>
            <section className='max-w-6xl w-full grid grid-cols-1 justify-items-center px-7'>
                <div className='max-w-4xl w-full'>
                    <div className='mb-7 flex justify-center'>
                        <button className='flex justify-center items-center space-x-1 border px-5 py-2 rounded-full bg-emerald-300/25'>
                            <div className='rounded-full border-5 border-emerald-300'></div>
                            <p className='text-emerald-300 text-sm font-semibold'>2000+ jobs available</p></button>
                    </div>

                    <input className='max-w-5xl w-full p-2 border rounded focus:border-0 focus:ring focus:outline-0 focus:ring-green-500' type="search" placeholder='Search for Job...'
                        value={query} onChange={handleChange} />
                </div>
                {paginatedJobs?.length === 0 && !isLoading && query.trim() !== "" ?

                    (<p className='mt-7'>No Job Listing Available</p>) :

                    (paginatedJobs.map((result) =>
                        <NavLink to={`/jobdetails/${result.id}`} key={result.id}
                            className='mt-7 bg-slate-800 p-4 max-w-5xl w-full flex flex-col justify-start  rounded-xl transition-all duration-200 hover:scale-105 hover:bg-slate-700/80'>

                            <div className='flex justify-between items-center'>
                                <h1 className='text-xl font-semibold text-emerald-300'>{result.title}</h1>
                                <p className='text-sm font-semibold mt-1'>{result.employmentType}</p>
                            </div>

                            <h2 className='text-sm'>{result.company}</h2>
                            <h2 className='text-sm'>{result.location}</h2>
                            <p className='text-sm font-bold'>{result.salary}</p>
                        </NavLink>
                    ))}

                <div className='flex flex-row space-x-3 mt-4'>
                    <button type='button' className={`px-5 py-2 rounded-lg cursor-pointer ${page === 1 ? "bg-gray-400" : "bg-slate-700"}  transition-all duration-200 hover:scale-105`} onClick={handlePrevious} disabled={page === 1}>Previous Page</button>
                    <button type='button' className={`px-5 py-2 rounded-lg cursor-pointer ${page >= totalPages ? "bg-gray-400" : "bg-slate-700"} transition-all duration-200 hover:scale-105`} onClick={handleNext} disabled={page >= totalPages}>Next Page</button>
                </div>

            </section>




        </main>

    )
}

export default Search
