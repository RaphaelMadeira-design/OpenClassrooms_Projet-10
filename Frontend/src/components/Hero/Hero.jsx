import React from 'react'
import '../Styles/main.scss'

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h2 className="sr-only">
                    Promoted Content
                </h2>
                <p className="subtitle">
                    No fees.
                </p>
                <p className="subtitle">
                    No minimum deposit.
                </p>
                <p className="subtitle">
                    High interest rates.
                </p>
                <p className="text">
                    Open a savings account with Argent Bank today!
                </p>
            </div>
        </div>
    )
}

export default Hero