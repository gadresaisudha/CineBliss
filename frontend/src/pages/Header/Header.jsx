import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Header.css';
import {logout} from '../../redux/features/auth/authSlice';
import { useLogoutMutation } from '../../redux/api/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import FormModal from '../Admin/AdminMovies/upsertMovie';


function Header() {
  const {userInfo} = useSelector((state)=>state.auth);
  const [dropdownOpen,setDropdownOpen] = useState(false);
  const [showModal,setShowModal] = useState(false);


  const toggleDropDown = ()=>{
    setDropdownOpen(!dropdownOpen);
  }
  const toggleModal= ()=>{
    setShowModal(!showModal);
  }



  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  const cartPageRedirect = async()=>{
    navigate("/cart");
  }

  const moviePageRedirect = async()=>{
    navigate("/movies");
  }

  return (
    <>
      <div className='header'>
        <div className='title'>
        <h1>CineBliss</h1>
        </div>        
        {
          userInfo?(  
          <div>   
            <button onClick={moviePageRedirect}>
             Movies
            </button> 
            <button onClick={cartPageRedirect}>
             Cart
            </button>    
          <div className='dropdown'>
            <button onClick={toggleDropDown} className='dropdown-toggle'>
            {userInfo.username}
            </button>
            {dropdownOpen && (
              <div className='dropdowm-menu'> 
                <Link to = '/profile' className='dropdown-item'>Profile</Link>
                <Link to = '#' onClick={toggleModal} className='dropdown-item'>Create Movie</Link>
                <Link to = '/logout' onClick={logoutHandler} className='dropdowm-item'>Logout</Link>
              </div>
            )}
          </div>
          </div>)
          :
          (<div>
           <ul className='list'>
           <li className='list-item'><Link to = '/login'>Login</Link></li>
           <li className='list-item'> <Link to = '/register'>Register</Link></li>
           </ul>
          </div>)


        }
      </div>
      <FormModal show={showModal} onClose={toggleModal}/>
    </>
  )
}

export default Header;