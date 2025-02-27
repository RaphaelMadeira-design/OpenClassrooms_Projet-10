import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserProfile } from '../../redux/userSlice'
import '../Styles/main.scss'

const Header = () => {
    const dispatch = useDispatch();
    const { userName } = useSelector((state) => state.user.profile)
    const [isEditing, setIsEditing] = useState(false)
    const [newUserName, setNewUserName] = useState(userName || '')
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [showError, setShowError] = useState(false)

    const handleSave = () => {
        if (!newUserName.trim()) {
            // Si le champ est vide, afficher un message d'erreur
            setShowError(true)
            setTimeout(() => setShowError(false), 5000) // Le message disparaît après 5 secondes
            return
        }

        dispatch(updateUserProfile({ userName: newUserName }))
        setIsEditing(false)

        // Popup de confirmation
        setShowConfirmation(true)
        setTimeout(() => setShowConfirmation(false), 5000)
    }

    const handleCancel = () => {
        setNewUserName(userName) // Réinitialiser le champ avec le nom actuel
        setIsEditing(false)
    }

    return (
        <div className="header">
            <h1>
                Welcome back<br />
                {isEditing ? (
                    <input
                        type="text"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSave();
                        }}
                        autoFocus
                    />
                ) : (
                    <span>{userName}!</span>
                )}
            </h1>
            {!isEditing ? (
                <button className="action-buttons--edit" onClick={() => setIsEditing(true)}>
                    Edit Name
                </button>
            ) : (
                <div className="action-buttons">
                    <button className="action-buttons--save" onClick={handleSave}>
                        Save
                    </button>
                    <button className="action-buttons--cancel" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            )}
            {showConfirmation && (
                <div className="confirmation-popup">
                    Username successfully updated!
                </div>
            )}
            {showError && (
                <div className="error-popup">
                    Username cannot be empty!
                </div>
            )}
        </div>
    )
}

export default Header