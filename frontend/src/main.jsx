import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux';
import {Route,RouterProvider,createRoutesFromElements} from 'react-router';
import {createBrowserRouter} from 'react-router-dom';
import Register from './pages/Register/Register.jsx';
import App from './App.jsx'
import store from './redux/store.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element = {<App/>}>
      <Route path= '/register' element = {<Register/>}></Route>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  
)
