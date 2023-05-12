import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import restaurantReducer from './restaurants.js'
import filteredRestaurantReducer from './filteredRestaurants'
import adminLoggedInReducer from './adminLogin.js'
import setModalReducer from './expiration'

const store = configureStore({
    reducer: {
      restaurantReducer,
      filteredRestaurantReducer,
      authReducer,
      adminLoggedInReducer,
      setModalReducer
    }
  })

export default store