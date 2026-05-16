import React from 'react'

const Form = () => {
  return (
    <div className='max-w-3xl w-full border-2 rounded-2xl px-7 mt-10 py-10'>
        <h1 className='text-2xl font-semibold text-center mt-10'>Application Form</h1>
        <form className='max-w-2xl mx-auto mt-8'>
            <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2' htmlFor='name'>Name</label>
                <input className='w-full p-2 border border-gray-300 rounded' type='text' id='name' placeholder='Enter your name' />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2' htmlFor='email'>Email</label>
                <input className='w-full p-2 border border-gray-300 rounded' type='email' id='email' placeholder='Enter your email'  />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2' htmlFor='resume'>Resume</label>
                <input className='w-full p-2 border border-gray-300 rounded' type='file' id='resume' placeholder='Upload your resume' />
            </div>
            <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form
