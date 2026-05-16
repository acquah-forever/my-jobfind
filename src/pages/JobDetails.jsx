import React from 'react'
import { useNavigate, useParams,NavLink } from 'react-router-dom'
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

    if (isLoading) return <p>Loading...</p>

    if (isError) return <p>Error: {error.message}</p>

    if (!jobs) return (<div className='min-h-screen flex flex-col justify-center items-center'>
        <p>Job Not Found</p>
        <button className='mt-4 px-4 py-2 bg-emerald-500 rounded' onClick={() => navigate('/')}>Return to Home</button>
    </div>)

    return (
        <section className='min-h-screen flex flex-col justify-center items-center px-7'>
            <div className=' max-w-3xl w-full space-y-2'>
                <div className='mb-10'>
                    <img className='w-full h-93 rounded-2xl object-cover object-center' src={"https://cdn.pixabay.com/photo/2024/09/18/16/40/business-9056542_1280.jpg"} alt="image" />
                </div>
                <main className='border-2 p-5 rounded-2xl space-y-2'>

                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                        <h1 className=' text-2xl text-center sm:text-start font-semibold bg-linear-to-tr from-emerald-400  to-sky-600 text-transparent bg-clip-text'>{jobs.title}</h1>
                        <h1 className='flex flex-row justify-center sm:justify-start space-x-1 sm:space-x-1.5 mt-1'>{jobs.skills.map((item, index) =>
                            <span key={index} className='text-sm font-semibold'>{item}</span>
                        )}</h1>
                    </div>
                    <p className='text-md font-semibold text-center sm:text-start'>{jobs.company}</p>

                    <div className='border px-2.5 py-1  justify-center inline-block rounded-full'>
                        <p className='text-md font-semibold'>{jobs.location}</p>
                    </div>

                    <p className='text-md'>Date Posted: {jobs.postedDate}</p>

                    <h1 className='text-lg font-semibold underline'>About the Job</h1>
                    <p>{jobs.description}</p>

                    <h1 className='text-lg font-semibold underline'>Requirements</h1>
                    <p className='flex flex-col'>{jobs.requirements.map((item, index) =>
                        <span key={index}>. {item}</span>
                    )}</p>

                    <h1 className='underline font-semibold text-lg'>Responsibilities</h1>
                    <p className='flex flex-col'>{jobs.responsibilities.map((item, index) =>
                        <span key={index}>. {item}</span>
                    )}</p>

                    <h1 className='underline font-semibold text-lg'>What we Offer</h1>
                    <p className='flex flex-col'>{jobs.benefits.map((item, index) =>
                        <span key={index}>. {item}</span>
                    )}</p>

                    <h1 className='underline font-semibold text-lg'>Salary</h1>
                    <p className='text-2xl text-cyan-400'>{jobs.salary} <span className='text-white text-sm sm:text-lg'>per negotiations</span></p>

                    <div className='flex flex-col sm:flex-row sm:justify-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3'>
                    <NavLink className='mt-7 bg-linear-to-br from-green-400 to-green-700 p-3 w-full text-center rounded' to='/form'>Apply</NavLink>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default JobDetails