import React from 'react'
import { Link } from 'lucide-react'

const features = ({feature}) => {
  return (
    <section className='border rounded-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 w-full max-w-sm sm:max-w-md lg:max-w-lg'>
        <p className='mb-4 text-sm sm:text-base font-semibold'>{feature.title}</p>
        <h1 className='text-3xl font-bold mb-10'>{feature.details}</h1>
        <p className='text-md mb-10'>{feature.moreinfo}</p>
        <button>{feature.cta}</button>
    </section>
  )
}

export default features
