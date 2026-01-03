import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import CustomerDashboard from './pages/CustomerDashboard'
import PrivateRoute from './components/PrivateRoute'
import UpdateRestaurant from './pages/UpdateRestaurant'
import './App.css'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} setUser={setUser} />
          <Route element={<PrivateRoute
              user={user}
              role="Admin"
          />} >
          <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
          <Route path='/admin/dashboard/update' element={<UpdateRestaurant/>}/>
          </Route>

          <Route element={<PrivateRoute
              user={user}
              role="Customer"
          />} >
          <Route path='/customers/dashboard' element={<CustomerDashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
