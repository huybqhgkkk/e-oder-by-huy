import { createSlice } from '@reduxjs/toolkit';
import {getAuth} from "@/helpers/auth.js";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: JSON.parse(getAuth())?.isAuthenticated || false,
        role: JSON.parse(getAuth())?.role || null,
    },
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
    },
});

export const { setIsAuthenticated, setRole } = authSlice.actions;

export default authSlice.reducer;
