import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Search from './pages/Search'
import JobDetails from './pages/JobDetails'

import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './AuthContext/AuthContext'

const queryClient = new QueryClient()

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <div className=' bg-slate-900 min-h-screen text-white flex flex-col'>
        <div className='container mx-auto flex flex-col flex-1'>
          <NavBar />
          <main className='flex-1'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/search' element={<Search />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/jobdetails/:id' element={<JobDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
