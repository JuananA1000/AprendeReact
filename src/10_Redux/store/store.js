import { configureStore } from '@reduxjs/toolkit';

import userSlice from './userSlice';
import counterSlice from './counterSlice';
import tasksSlice from './tasksSlice';
import themeSlice from './themeSlice';

// El store es un objeto que actúa como un almacén centralizado para todos los slices de una app.

export const store = configureStore({
  /*
    Cada reducer que construyamos, lo guardaremos en el store.
    Los reducers toman la acción y el estado actual del "store" y calculan un nuevo estado
  */
  reducer: {
    user: userSlice,
    counter: counterSlice,
    tasks: tasksSlice,
    theme: themeSlice,
  },
});
