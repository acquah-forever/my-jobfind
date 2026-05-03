import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'

import { Routes, Route } from 'react-router-dom'
import AuthProvider from './AuthContext/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <div className=' bg-slate-900 min-h-screen text-white'>
        <div className='container mx-auto'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />

          </Routes>
        </div>
      </div>
    </AuthProvider>
  )
}

export default App
