import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import Student from "./pages/student"
import Footer from "./components/footer"
import Educator from "./pages/educator"
import Guardian from "./pages/guardian"

import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/student" element={<ProtectedRoute><Student /></ProtectedRoute>} /> 
      <Route path="/educator" element={<ProtectedRoute><Educator /></ProtectedRoute>} />
      <Route path="/guardian" element={<ProtectedRoute><Guardian /></ProtectedRoute>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
