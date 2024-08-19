import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './pages/Header/Header'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <ToastContainer/>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App;
