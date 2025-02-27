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
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data.message)
        }
        return rejectWithValue(error.message)
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
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data.message)
            }
            return rejectWithValue(error.message)
        }
    }
)

// Slice utilisateur
const userSlice = createSlice({
    name: 'user', // Nom du slice
    initialState: {
        token: null, // Je stocke le token après connexion
        isAuthenticated: false, // Savoir si l'utilisateur est connecté
        isLoading: false, // Chargement
        error: null, // Je stocke les messages d'erreur
        profile: {}, // Les infos de l'utilisateur
    },
    reducers: { // Action pour déconnecter
        logoutUser: (state) => {
        state.token = null // Je supprime le token
        state.isAuthenticated = false // J'indique de l'utilisateur n'est plus co
        state.error = null // Supprime les erreurs
        state.profile = {} // Je réinitialise le state du profile
        },
    },
    extraReducers: (builder) => {
        builder
        // Login de l'utilisateur
        .addCase(loginUser.pending, (state) => { // Chargemùent de la connexion
            state.isLoading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => { // Connexion réussie
            state.isLoading = false;
            state.token = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(loginUser.rejected, (state, action) => { // Connexion échouée
            state.isLoading = false;
            state.error = action.payload;
        })
        // Récupération du profile de l'utilisateur
        .addCase(getUserProfile.pending, (state) => { // Récupération du profil
            state.isLoading = true;
        })
        .addCase(getUserProfile.fulfilled, (state, action) => { // Récu^ération réussie
            state.isLoading = false;
            state.profile = action.payload;
        })
        .addCase(getUserProfile.rejected, (state, action) => { // Récupération échouée
            state.isLoading = false;
            state.error = action.payload;
        })
    },
})

const { logoutUser } = userSlice.actions

export { loginUser, getUserProfile, logoutUser }
export default userSlice.reducer