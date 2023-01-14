import counterReducer from '../redux/slices/counterSlice';
import { configureStore } from '@reduxjs/toolkit';


export default configureStore({
    reducer : {
        counter: counterReducer,
    },
});