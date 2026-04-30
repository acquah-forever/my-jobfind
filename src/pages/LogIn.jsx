import React from 'react'
import { useForm } from 'react-hook-form'

const LogIn = () => {
  const {register, handleSubmit, formState:{errors}} = useForm()

  function onSubmit(){
    alert("Yaaaaaaayy!!")
  }

  return (
    <div>
      <header className='px-10'>
        <div className='p-10 border rounded-2xl max-w-md w-full mx-auto'>
          <div className='grid grid-cols-1'>
            <div className='mb-5 space-y-1'>
              <h1 className='text-2xl font-semibold'>Welcome Back</h1>
              <h3 className='text-md'>Sign in to access your saved jobs</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col space-y-2 mb-3'>
                <label htmlFor="mail">Email</label>
                <input className='border p-2 rounded-lg focus:border-0 focus:outline-0 focus:ring-2 focus:ring-green-500'
                  type="email" placeholder='you@example.com'
                  {...register("email",{required: "Enter Your Email"})} />
              </div>
              {errors.email && <p className='text-red-400 text-sm mb-3'>{errors.email.message}</p>}

              <div className='flex flex-col space-y-2 mb-5'>
                <label htmlFor="pass">Password</label>
                <input className='border p-2 rounded-lg focus:border-0 focus:outline-0 focus:ring-2 focus:ring-green-500'
                  type="password" placeholder='Min. 6 characters'
                  {...register("password", {required: "Enter Your Password",
                    minLength:{
                      value:6,
                      message:"Password should be at least 6 characters."
                    },
                    maxLength:{
                      value:125
                    }
                  })} />
                  {errors.password && <p className='text-red-400 text-sm mb-3'>{errors.password.message}</p>}
              </div>
              <button className='p-3 mt-4 rounded-lg bg-linear-to-br from-green-400 to-green-800 cursor-pointer w-full'type='submit'>Sign In</button>

              <div className='text-center mt-7'>
                <h1>Dont have an account? &nbsp;<span className='cursor-pointer text-sky-500 font-semibold underline'>Sign Up</span></h1>
              </div>

            </form>
          </div>
        </div>

      </header>

    </div>
  )
}

export default LogIn
