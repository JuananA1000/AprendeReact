// tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [], // Array de tareas vacío

  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    removeTask: (state, action) => {
      return state.filter((task) => task !== action.payload);
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
