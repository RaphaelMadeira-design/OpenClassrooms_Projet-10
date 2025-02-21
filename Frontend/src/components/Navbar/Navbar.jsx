import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.scss"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        ARGENT BANK
      </Link>
      <div className="navbar-links">
        <Link to="/login" className="navbar-link">
          <i className="fas fa-user-circle"></i> Sign In
        </Link>
      </div>
    </nav>
  )
}

export default Navbar