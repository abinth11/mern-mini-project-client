import { createSlice } from '@reduxjs/toolkit';

const setModalSlice = createSlice({
  name: 'auth',
  initialState: {
    isModalOpen: false,
  },
  reducers: {
    setModalOpen: (state) => {
      state.isModalOpen = true; 
    },
    setModalClose: (state) => {
      state.isModalOpen = false; 
    },
  },
});

export const { setModalOpen, setModalClose } = setModalSlice.actions;
export default setModalSlice.reducer;
