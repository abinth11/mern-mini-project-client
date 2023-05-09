import { createSlice } from '@reduxjs/toolkit';

const filteredRestaurantSlice = createSlice({
  name: 'filteredRestaurants',
  initialState: { restaurants: '' },
  reducers: {
    setFilteredRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
  },
});

export const { setFilteredRestaurants } = filteredRestaurantSlice.actions;
export default filteredRestaurantSlice.reducer;
