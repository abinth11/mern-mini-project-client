import { createSlice } from '@reduxjs/toolkit';

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: { restaurants: '' },
  reducers: {
    setRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
  },
});

export const { setRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
