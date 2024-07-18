import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import {Route,RouterProvider,createRoutesFromElements} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';
import Register from './pages/Register/Register.jsx';
import App from './App.jsx'
import store from './redux/store.js';
import Login from './pages/Login/Login.jsx';
import Home from './pages/Home/Home.jsx';
import UserHome from './pages/UserHome/UserHome.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element = {<App/>}>
      <Route path= '/register' element = {<Register/>}></Route>
      <Route path= '/login' element = {<Login/>}></Route>
      <Route index = {true} path= '/' element = {<Home/>}></Route>
      <Route path= '/home' element = {<UserHome/>}></Route>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  
)
