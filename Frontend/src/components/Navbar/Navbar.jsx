import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser, getUserProfile } from '../../redux/userSlice'
import '../Styles/main.scss'

const Navbar = () => {
    const { token, profile } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Récupérer le profil utilisateur s'il y a un token et que le profil n'est pas encore chargé
    useEffect(() => {
        if (token && (!profile || !profile.firstName)) {
            dispatch(getUserProfile())
        }
    }, [token, profile, dispatch])

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/login') // On redirige vers la page de login après déconnexion
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav--logo" to="/">
                <img className="main-nav--logo__image" src="/img/argentBankLogo.webp" alt="Argent Bank Logo"/>
                <h1 className="sr-only">
                    Argent Bank
                </h1>
            </Link>
            {token ? (
                <div className="main-nav--item">
                    {profile.firstName && (
                        <Link className="main-nav--item" to="/profile">
                            <i className="fa fa-user-circle"></i>
                            {profile.firstName}
                        </Link>
                    )}
                    <Link className="main-nav--item" onClick={handleLogout} to="#">
                        <i className="fa fa-sign-out-alt"></i>
                        Sign Out
                    </Link>
                </div>
            ) : (
                <Link className="main-nav--item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            )}
        </nav>
    )
}

export default Navbar