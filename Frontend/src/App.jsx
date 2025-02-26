import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App