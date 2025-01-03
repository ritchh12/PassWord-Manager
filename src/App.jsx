import './App.css'
import Navbar from './component/Navbar'
import Manager from './component/Manager'
import Footer from './component/Footer'
import { useState } from 'react'
function App() {
  return (
    <>
    <div>
      <Navbar />
      <Manager />
      <Footer/>
    </div>
    </>
  )
}

export default App
