import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Search from './pages/Search'

import { Routes, Route } from 'react-router-dom'
import AuthProvider from './AuthContext/AuthContext'

const App = () => {
  return (
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
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </AuthProvider>
  )
}

export default App
