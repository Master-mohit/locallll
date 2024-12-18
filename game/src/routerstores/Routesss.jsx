import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'

const Routesss = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/Contact' Component={Contact}/>
      </Routes>
    </div>
  )
}

export default Routesss
