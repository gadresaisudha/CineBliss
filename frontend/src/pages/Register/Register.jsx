import { useState } from 'react';
import { useNavigate } from 'react-router';
import {useRegisterMutation} from '../../redux/api/userApiSlice';
import { useDispatch ,useSelector} from 'react-redux';
import {toast} from 'react-toastify';

function Register() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmpassword,setConfirmPassword] = useState('')
  const [username,setUsername]= useState('')

  const navigate = useNavigate();
  const [register,{isLoading,isSuccess, isError, error}] = useRegisterMutation();
  
  
  const handlesubmit = async (e) => {
      e.preventDefault();
  
     
        try {
          const res = await register({ username, email, password }).unwrap();
          toast.success("Registeration Successful");
          navigate('/login');
        } catch (err) {
          console.log(err);
          toast.error(err.data.message);
        }
      
    };

  return (
    <>
    
      <div className='info'>
      <form onSubmit={handlesubmit}>
         <div>
          <label>UserName</label>
          <input
                  type="text"
                  id="username"
                 
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
          </div>
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
          <div>
          <label>Confirm Password</label>
          <input
                  type="password"
                  id="confirm password"
              
                  placeholder="Confirm Password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
          </div>

          <button             
              type="submit"
            >
            {isLoading ? 'Registering...' : 'Register'}
            </button>
            {isError && <p>Error: {error.message}</p>}
            {isSuccess && <p>Register successful!</p>}

      </form>
      </div>
      
    </>
  )
}

export default Register;