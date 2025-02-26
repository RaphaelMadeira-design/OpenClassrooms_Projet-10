import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_LOGIN_URL = 'http://localhost:3001/api/v1/user/login'
const API_PROFILE_URL = 'http://localhost:3001/api/v1/user/profile'

// Thunk pour gérer la connexion utilisateur
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
        const response = await axios.post(API_LOGIN_URL, { email, password })
        return response.data.body.token // Retourne le token
        } catch (error) {
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data.message)
        }
        return rejectWithValue(error.message)
        }
    }
)

// Thunk pour récupérer le profil utilisateur
export const getUserProfile = createAsyncThunk(
    'user/getUserProfile',
    async (_, { getState, rejectWithValue }) => {
        const token = getState().user.token;
        try {
        const response = await axios.get(API_PROFILE_URL, {
            headers: { Authorization: `Bearer ${token}` },
        })
        return response.data.body // On suppose que le body contient { id, email, firstName, ... }
        } catch (error) {
        if (error.response && error.response.data) {
            return rejectWithValue(error.response.data.message)
        }
        return rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        profile: {}, // Contiendra les infos du profil, notamment firstName
    },
    reducers: {
        logoutUser: (state) => {
        state.token = null
        state.isAuthenticated = false
        state.error = null
        state.profile = {}
        },
    },
    extraReducers: (builder) => {
        builder
        // Login
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.token = action.payload;
            state.isAuthenticated = true;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        // Get User Profile
        .addCase(getUserProfile.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUserProfile.fulfilled, (state, action) => {
            state.isLoading = false;
            state.profile = action.payload; // Par exemple, { id, email, firstName, ... }
        })
        .addCase(getUserProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    },
})

export const { logoutUser } = userSlice.actions
export default userSlice.reducer