import {createSlice} from '@reduxjs/toolkit';

const authData = JSON.parse(localStorage.getItem('auth'));
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: authData?.isAuthenticated || false,
        role: authData?.role || null,
        info: null,
        loading: false,
        language: 'vn'
    },

    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setInfo: (state, action) => {
            state.info = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const {
    setIsAuthenticated,
    setRole,
    setInfo,
    setLoading,
    setLanguage
} = authSlice.actions;

export default authSlice.reducer;
