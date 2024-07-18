import { useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <>
      <div className='header'>
        <div className='title'>
        <h1>CineBliss</h1>
        </div>
        <div>
        <ul className='list'>
        <li className='list-item'><Link to = '/login'>Login</Link></li>
        <li className='list-item'> <Link to = '/register'>Register</Link></li>
       </ul>
        </div>
      </div>
    </>
  )
}

export default Header;