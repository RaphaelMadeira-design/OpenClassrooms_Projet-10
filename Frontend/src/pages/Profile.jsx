import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import Accounts from '../components/Accounts/Accounts'
import accountsData from '../data/accountsData.json'

const Profile = () => {
    const { isAuthenticated } = useSelector((state) => state.user) // Je Récupère l'état de connexion
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/') // On redirige ver sla page d'accueil si l'utilisateur n'est pas connecté
        }
    }, [isAuthenticated, navigate])

    if (!isAuthenticated) {
        return null // Empêche le rendu jusqu'à la redirection
    }

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
  
export default Profile