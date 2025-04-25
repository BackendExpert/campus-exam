import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
import PrivateRoute from './components/Auth/PrivateRoute'
import DashHome from './components/Dashboard/DashHome'
import HomeDash from './pages/Dashboard/HomeDash'
import Departments from './pages/Department/Departments'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn /> } />
                <Route path='/SignUp' element={<SignUp /> } />      

                <Route path='/Dashboard/' element={<PrivateRoute element={<DashHome /> } /> }>
                    <Route path='Home' element={<PrivateRoute element={<HomeDash /> } /> } />
                    <Route path='Departments' element={<PrivateRoute element={<Departments /> } /> } />
                </Route>          
            </Routes>
        </BrowserRouter>
    )
}

export default App
