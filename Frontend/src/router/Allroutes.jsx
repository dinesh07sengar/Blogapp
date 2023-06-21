import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { Login } from '../components/Login/login'
import { Singlepost } from '../components/Singlepost/Singlepost'
import { Createpost } from '../components/Createpost/Createpost'
import { Mypost } from '../components/Mypost/mypost'
import PrivateRoute from './privateroute'

export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/single' element={<Singlepost/>}/>
            <Route path='/create' element={<Createpost/>}/>
            <Route path='/post' element={<PrivateRoute><Mypost/></PrivateRoute>}/>
        </Routes>
    </div>
  )
}
