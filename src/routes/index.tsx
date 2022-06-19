import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from 'src/pages/Home'
import { Register } from 'src/pages/Register'
import { Login } from 'src/pages/Login'
import { Profile } from 'src/pages/Profile'

export default function ReactRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}
