import React from 'react'
import '../Styles/main.scss'

const Accounts = ({ title, amount, description }) => {
    return (
        <section className="account">
            <div className="account--content__wrapper">
                <h3 className="account--title">{title}</h3>
                <p className="account--amount">{amount}</p>
                <p className="account--amount__description">{description}</p>
            </div>
            <div className="account--content__wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

export default Accounts