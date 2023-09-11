import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
// El store es un objeto que actúa como un almacén centralizado para todos los estados de una aplicación.

export const store = configureStore({
  // Los reducers toman la acción y el estado actual del "store" y calculan un nuevo estado
  reducer: {
    user: userReducer
  },
});
