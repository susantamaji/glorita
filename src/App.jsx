import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import BookAppointment from './component/BookAppointment'
import Contact from './component/Contact'
import Face from './component/Face'
import BodyCountry from './component/BodyCountry'
import Breast from './component/Breast'
import Hire from './component/Hire'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/bookanappoitment' element={<BookAppointment/>} />
          <Route path='/contact' element={<Contact/>} />

          <Route path='/face' element={<Face/>} />
          <Route path='/bodycountry' element={<BodyCountry/>} />
          <Route path='/breast' element={<Breast/>} />
          <Route path='/hire' element={<Hire/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App