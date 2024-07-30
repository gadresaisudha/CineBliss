import { useState,useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import { setCredentials } from "../../../redux/features/auth/authSlice";
import { useProfileMutation } from "../../../redux/api/userApiSlice";

const Profile = ()=>{
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    
    const {userInfo} = useSelector((state)=>state.auth);
    const [updateProfile,{isLoading:loadingUpdateprofile}]=useProfileMutation();

    useEffect(()=>{
        setUserName(userInfo.username);
        setEmail(userInfo.email);
    },[userInfo.email,userInfo.username]);

    const dispatch =useDispatch();

    const submitHandler = async(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            toast.error("Passwords do not match");
        }else{
           
           try{
            const res = await updateProfile({
                _id:userInfo._id,
                username,
                email,
                password,
            }).unwrap();
            dispatch(setCredentials({...res}));
            toast.success("Profile updated successfully");
           }
           catch(err){
            toast.error(err?.data?.message || err.error)
           }
        }
    }

    return(
        <>
        <div>
         <form onSubmit = {submitHandler}>
         <div>
          <label>UserName</label>
          <input
                  type="text"
                  placeholder="Enter Name"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
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
                  id="password"
              
                  placeholder="ReEnter Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
          </div>

          <button             
              type="submit"
            >
            Update
            </button>
         </form>
        </div>
        </>
    )
}
export default Profile;