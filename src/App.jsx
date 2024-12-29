import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Food from './pages/Food'

const App = () => {
  return (
    <div className='font-poppins min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/food' element={<Food />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App