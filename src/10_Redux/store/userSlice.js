import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  username: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Los reducers toman la acción y el estado actual del "store" y calculan un nuevo estado
    addUser: (state, action) => {
      /*
        El payload es el valor del estado del store, aquí podremos crear los payloads que necesitemos y asignarlos a una
        acción
      */
      console.log('ACTION.PAYLOAD: ', action.payload);
      const { name, username, email } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
    },

    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});
export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;
