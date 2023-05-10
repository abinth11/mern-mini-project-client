import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import ErrorElement from './components/ErrorElement';
import About from './components/User/Offers';
import Contact from './components/User/Help';
import Cart from './components/User/Cart';
import Login from './components/User/SignIn';
import SignUp from './components/User/SignUp';
import ViewRestaurant from './components/Restaurants/ViewRestaurant';
import restaurantReducer from './features/restaurants.js'
import filteredRestaurantReducer from './features/filteredRestaurants'
import ViewProfile from './components/Profile/viewProfile';
import { Provider } from 'react-redux';
import authReducer from './features/authSlice';

const store = configureStore({
  reducer: {
    restaurantReducer,
    filteredRestaurantReducer,
    authReducer
  }
})
const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
      <Footer />
    </>
  )
}
const AppRouter = createBrowserRouter([{
  path: '/',
  element: <AppLayout />,
  errorElement: <ErrorElement />,
  children: [
    {
      path: '/',
      element: <Body />
    },
    {
      path: '/offers',
      element: <About />
    },
    {
      path: '/help',
      element: <Contact />
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: 'sign-up',
      element: <SignUp />
    },
    {
      path:'view-profile',
      element:<ViewProfile/>
    },
    {
      path: '/Cart',
      element: <Cart />
    },
    {
      path: '/view-restaurant/:resId',
      element: <ViewRestaurant />
    }
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />)
