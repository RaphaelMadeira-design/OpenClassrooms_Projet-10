import React from 'react'
import Header from '../../components/Header/Header'
import Accounts from '../../components/Accounts/Accounts'
import accountsData from '../../data/accountsData.json'

const User = () => {
    return (
        <main className="main bg-dark">
            <Header />
            <h2 className="sr-only">Accounts</h2>
            {accountsData.map((account) => (
                <Accounts 
                    key={account.id}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    )
}
  
  export default User