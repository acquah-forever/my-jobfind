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

    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const { data: jobs, isLoading, isError } = useQuery({

        queryKey: ["jobs"],
        queryFn: getJobs
    })

    function handleChange(e) {
        setQuery(e.target.value)
    }

    useEffect(() => {

        const debounce = setTimeout(() => {

            if (query.trim() === "") {
                setResults([])
                return
            }

            const filteredJobs = jobs.filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.company.toLowerCase().includes(query.toLocaleLowerCase()) ||
                item.location.toLowerCase().includes(query.toLocaleLowerCase()) || 
                item.employmentType.toLocaleLowerCase().includes(query.toLowerCase()) ||
                item.salary.toLowerCase().includes(query.toLowerCase()))

            setResults(filteredJobs)
        })

        return () => clearTimeout(debounce)
    }, [query, jobs])

    return (
        <section className=' grid grid-cols-1 justify-items-center px-7'>
            <div className='mb-7'>
                <button className='flex justify-center items-center space-x-1 border px-5 py-2 rounded-full bg-emerald-300/25'>
                    <div className='rounded-full border-5 border-emerald-300'></div>
                    <p className='text-emerald-300 text-sm font-semibold'>2000+ jobs available</p></button>
            </div>

            <input className='max-w-4xl w-full p-2 border rounded focus:border-0 focus:ring focus:outline-0 focus:ring-green-500' type="search" placeholder='Search for Job...'
                value={query} onChange={handleChange} />

            {isLoading && <p>Loading</p>}

            {isError && <p>Something Went Wrong</p>}

            {results?.length === 0 && !isLoading && query.trim() !== "" ?

                (<p className='mt-7'>No Job Listing Available</p>) :

                (results.map((result) =>
                    <div key={result.id} className='mt-7 p-3 max-w-3xl w-full flex flex-col justify-start border'>
                        <div className='flex space-x-4 items-center'>
                            <h1 className='text-xl font-semibold text-emerald-300'>{result.title}</h1>
                            <p className='text-sm font-semibold'>{result.employmentType}</p>
                        </div>
                        <h2>{result.company}</h2>
                        <h2>{result.location}</h2>
                        <p>{result.salary}</p>
                    </div>
                ))}

        </section>
    )
}

export default Search
