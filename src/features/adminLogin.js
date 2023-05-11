import { createSlice } from '@reduxjs/toolkit';
const initialState= localStorage.getItem('accessTokenAdmin')?true:false
const adminLoggedInSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: initialState,
  },
  reducers: {
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setLoggedIn, setLoggedOut } = adminLoggedInSlice.actions;
export default adminLoggedInSlice.reducer;
