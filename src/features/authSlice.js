import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState:localStorage.getItem('accessToken'),
  reducers: {
    setToken: (state, action) => {
      return action.payload;
    },
    clearToken: () => {
      return localStorage.removeItem('accessToken');
    }
  }
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
