import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
 

  return (
    <>
   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:id/recipe' element={<Recipe/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
