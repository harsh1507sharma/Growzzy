import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import LoginPage from "./pages/login"
import Student from "./pages/student"
import Footer from "./components/footer"
import Educator from "./pages/educator"
import Guardian from "./pages/guardian"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/student" element={<Student />} /> 
      <Route path="/educator" element = {<Educator/>}/>
      <Route path="/guardian" element = {<Guardian/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
