import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import restaurantReducer from './restaurants.js'
import filteredRestaurantReducer from './filteredRestaurants'
import adminLoggedInReducer from './adminLogin.js'

const store = configureStore({
    reducer: {
      restaurantReducer,
      filteredRestaurantReducer,
      authReducer,
      adminLoggedInReducer
    }
  })

export default store