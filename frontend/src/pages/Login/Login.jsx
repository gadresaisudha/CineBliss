import { useState } from 'react';
import { useNavigate } from 'react-router';
import {useLoginMutation} from '../../redux/api/userApiSlice';
import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {setCredentials} from '../../redux/features/auth/authSlice';
import {toast} from 'react-toastify';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const {userInfo} = useSelector(state=>state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login,{isLoading,isSuccess, isError, error}] = useLoginMutation();
  
  
  const handlesubmit = async (e) => {
      e.preventDefault();
  
     
        try {
          const res = await login({ email, password }).unwrap();
          dispatch(setCredentials({ ...res }));
          toast.success("Login Successful");
          navigate('/home');
        } catch (err) {
          console.log(err);
          toast.error(err.data.message);
        }
      
    };
  
  
  return(
    <div className='info'>
      <form onSubmit={handlesubmit}>
       
          <div>
          <label>Email</label>
          <input
                  type="email"
                  id="email"
                 
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
          </div>
          <div>
          <label>Password</label>
          <input
                  type="password"
                  id="password"
              
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
          </div>
          <button             
              type="submit"
            >
            {isLoading ? 'Logging...' : 'Login'}
            </button>
            {isError && <p>Error: {error.message}</p>}
            {isSuccess && <p>Login successful!</p>}
      </form>
      </div>
  )
}

export default Login;