import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/main.scss'

const Navbar = () => {
    return (
        <nav className="main-nav">
            <Link className="main-nav--logo" to="/">
                <img className="main-nav--logo__image" src="img/argentBankLogo.webp" alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <Link className="main-nav--item" to="/login">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
        </nav>
    )
}

export default Navbar