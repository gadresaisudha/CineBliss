import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
      <Link to = '/register'>Register</Link>
      </div>
      <Outlet/>
    </>
  )
}

export default App;
