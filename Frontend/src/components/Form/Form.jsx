import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import '../Styles/main.scss'

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoading, isAuthenticated, error } = useSelector((state) => state.user)

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile') // Redirige vers la page "Profile" après connexion
        }
    }, [isAuthenticated, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }))
    }

    return (
        <section className="sign-in--content">
            <i className="fa fa-user-circle sign-in--icon"></i>
            <h1>
                Sign In
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">
                        Remember me
                    </label>
                </div>
                <button type="submit" className="sign-in--button" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Sign In'}
                </button>
                {error && 
                    <p className="error-message">
                        {error}
                    </p>
                }
            </form>
        </section>
    )
}

export default Form