import React, { useState, useEffect, use } from 'react'
import { set, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [successMessage, setSuccessMessage] = useState('')
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const navigate = useNavigate()

    function onSubmit() {
        setSuccessMessage('Application submitted successfully!')
        reset()
    }

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage('')
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [successMessage])

    function handleClick() {
        navigate('/')
    }
    return (
        <section className='flex flex-col justify-center items-center px-7'>
            <div className='max-w-4xl w-full border p-7 rounded-xl' >
                <h1 className='text-2xl font-semibold text-center mt-10'>Application Form</h1>
                <form className='max-w-3xl mx-auto mt-8' onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2' htmlFor='name'>Fullname</label>
                        <input className='w-full p-2 border border-gray-300 rounded' type='text' id='name' placeholder='Enter your name'
                            {...register('name', { required: "Enter your fullname" })} />
                    </div>
                    {errors.name && <p className='text-red-400 text-sm mb-4'>{errors.name.message}</p>}
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2' htmlFor='email'>Email</label>
                        <input className='w-full p-2 border border-gray-300 rounded' type='email' id='email' placeholder='Enter your email'
                            {...register('email', { required: "Enter your email" })} />
                    </div>
                    {errors.email && <p className='text-red-400 text-sm mb-4'>{errors.email.message}</p>}
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2' htmlFor='resume'>Resumes</label>
                        <input className='cursor-pointer w-full p-2 border border-gray-300 rounded' type='file' id='resume'
                            {...register('resume', { required: "Upload your resume" })} />
                    </div>
                    {errors.resume && <p className='text-red-400 text-sm mb-4'>{errors.resume.message}</p>}
                    <button className='cursor-pointer mt-4 bg-blue-500 text-white py-2 px-4 rounded' type='submit'>Submit</button>
                </form>
            </div>
            {successMessage && <p className='text-green-400 text-center mt-4'>{successMessage}</p>}
            <div className='flex justify-center items-center mt-4'>
                <button className='cursor-pointer mt-4 bg-blue-500 text-white py-2 px-4 rounded' onClick={handleClick}>Back Home</button>
            </div>
        </section>
    )
}

export default Form
