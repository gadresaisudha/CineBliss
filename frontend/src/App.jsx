import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './pages/Header/Header'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
