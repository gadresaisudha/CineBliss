import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Header.css';
import {logout} from '../../redux/features/auth/authSlice';
import { useLogoutMutation } from '../../redux/api/userApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const {userInfo} = useSelector((state)=>state.auth);


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



  return (
    <>
      
        {
          userInfo?(  
           
            <Navbar className="custom-navbar">
            <Container>
            <Navbar.Brand>CineBliss</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/movies">Movies</Nav.Link>
                <Nav.Link href="/tvshows">TV Shows</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link href="/cart">Cart</Nav.Link>
                <NavDropdown title= {userInfo.username} id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Container>
           </Navbar>
          )
          :
          (
          <Navbar className="custom-navbar">
          <Container>
          <Navbar.Brand>CineBliss</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>        
            </Nav>
          </Container>
         </Navbar>)


        }
      
    
    </>
  )
}

export default Header;