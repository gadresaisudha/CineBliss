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
import UserHome from './pages/User/UserHome/UserHome.jsx';
import Profile from './pages/User/Profile/Profile.jsx';
import AdminMovies from './pages/Admin/AdminMovies/AdminMovies.jsx';
import Movies from './pages/User/Movies/Movies.jsx';
import MovieDetail from './pages/User/Movies/MovieDetail.jsx';
import Cart from './pages/User/Cart/cart.jsx';
import Order from './pages/User/Order/order.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element = {<App/>}>
      <Route path= '/register' element = {<Register/>}></Route>
      <Route path= '/login' element = {<Login/>}></Route>
      <Route index = {true} path= '/' element = {<Home/>}></Route>
      <Route path= '/home' element = {<UserHome/>}></Route>
      <Route path= '/profile' element = {<Profile/>}></Route>
      <Route path= '/movies' element = {<Movies/>}></Route>
      <Route path = '/movies/:id' element = {<MovieDetail/>}></Route>
      <Route path= '/cart' element = {<Cart/>}></Route>
      <Route path= '/order' element = {<Order/>}></Route>

    </Route>
  
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  
)
