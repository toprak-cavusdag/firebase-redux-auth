import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload;
      localStorage.setItem('email', action.payload);
    },

    checkUser: (state, action) => {
      const userState = localStorage.getItem('email');
      state.email = userState;
    },

    logOut: (state) => {
      state.email = null;
      localStorage.removeItem('email');
    },
  },
});

export const { setUser, checkUser, logOut } = userSlice.actions;

export default userSlice.reducer;
