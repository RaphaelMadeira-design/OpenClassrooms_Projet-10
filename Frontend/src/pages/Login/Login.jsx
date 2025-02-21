import React from "react"
import "./Login.scss"

function Login() {
  return (
    <div className="login-page">
      <div className="login-form">
        <i className="fas fa-user-circle login-icon"></i>
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="form-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="btn-sign-in">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login