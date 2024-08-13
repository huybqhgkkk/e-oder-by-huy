import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reduce/counterSlice';
import authReducer from './reduce/authSlice.js';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});

export default store;
