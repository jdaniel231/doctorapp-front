import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './features/alertSlice'; 

const store = configureStore({
  reducer: {
    alert: alertReducer 
  },
});

export default store;
