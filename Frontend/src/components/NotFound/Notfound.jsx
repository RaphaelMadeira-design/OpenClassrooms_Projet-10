import React from "react"
import { Link } from "react-router-dom"
import "../Styles/main.scss"

const Notfound = () => {
    return (
        <div className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__message">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="not-found__link">
                Get me out of here
            </Link>
        </div>
    )
}

export default Notfound