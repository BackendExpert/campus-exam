import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import SignUp from './pages/Auth/SignUp'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignUp /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default App
