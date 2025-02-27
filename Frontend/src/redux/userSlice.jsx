import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const UrlApiLogin = 'http://localhost:3001/api/v1/user/login'
const UrlApiProfile = 'http://localhost:3001/api/v1/user/profile'

// Thunk pour la connexion utilisateur
const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(UrlApiLogin, { email, password })
            return response.data.body.token // Retourne le token si OK
        } catch (error) {
            return rejectWithValue(error.response.data.message ?? error.message)
        }
    }
)

// Thunk pour le profil utilisateur
const getUserProfile = createAsyncThunk(
    'user/getUserProfile',
    async (_, { getState, rejectWithValue }) => {
        const token = getState().user.token; // Je récupère le token stocké dans le state
        try {
            const response = await axios.get(UrlApiProfile, {
                headers: { Authorization: `Bearer ${token}` },
            })
            return response.data.body // Retourne les données du profil
        } catch (error) {
            return rejectWithValue(error.response.data.message ?? error.message)
        }
    }
)

// Thunk pour changer le username
const updateUserProfile = createAsyncThunk(
    'user/updateUserProfile',
    async ({ userName}, { getState, rejectWithValue}) => {
        const token = getState().user.token
        try {
            const response = await axios.put(UrlApiProfile, { userName }, {
                headers: { Authorization: `Bearer ${token}`},
            })
            return response.data.body
        } catch (error) {
            return rejectWithValue(error.response.data.message ?? error.message)
        }
    }
)

// Slice utilisateur
const userSlice = createSlice({
    name: 'user', // Nom du slice
    initialState: {
        token: localStorage.getItem('token') || null, // On vérifie si le token est dans localStorage
        isAuthenticated: !!localStorage.getItem('token'), // Si token est trouvé l'utilisateur est connecté
        isLoading: false, // Chargement
        error: null, // Je stocke les messages d'erreur
        profile: {}, // Les infos de l'utilisateur
    },
    reducers: { // Action pour déconnecter
        logoutUser: (state) => {
        state.token = null // Je supprime le token
        state.isAuthenticated = false // J'indique que l'utilisateur n'est plus co
        state.error = null // Supprime les erreurs
        state.profile = {} // Je réinitialise le state du profil
        localStorage.removeItem('token') // Je supprime le token du localSTorage
        },
    },
    extraReducers: (builder) => {
        builder
        // Login de l'utilisateur
        .addCase(loginUser.pending, (state) => { // Chargement de la connexion
            state.isLoading = true
            state.error = null
        })
        .addCase(loginUser.fulfilled, (state, action) => { // Connexion réussie
            state.isLoading = false
            state.token = action.payload
            state.isAuthenticated = true
            localStorage.setItem('token', action.payload) // J'enregeistre le token dans localStorage
        })
        .addCase(loginUser.rejected, (state, action) => { // Connexion échouée
            state.isLoading = false
            state.error = action.payload
        })
        // Récupération du profil de l'utilisateur
        .addCase(getUserProfile.pending, (state) => { // Récupération du profil
            state.isLoading = true
        })
        .addCase(getUserProfile.fulfilled, (state, action) => { // Récupération réussie
            state.isLoading = false
            state.profile = action.payload
        })
        .addCase(getUserProfile.rejected, (state, action) => { // Récupération échouée
            state.isLoading = false
            state.error = action.payload
        })
        // Changement username de l'utilisateur
        .addCase(updateUserProfile.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(updateUserProfile.fulfilled, (state, action) => {
            state.isLoading = false
            state.profile = action.payload
        })
        .addCase(updateUserProfile.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

const { logoutUser } = userSlice.actions

export { loginUser, getUserProfile, logoutUser, updateUserProfile }
export default userSlice.reducer