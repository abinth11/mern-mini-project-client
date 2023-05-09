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
import About from './components/Offers';
import Contact from './components/Help';
import Cart from './components/Cart';
import Login from './components/SignIn';
import SignUp from './components/SignUp';
import ViewRestaurant from './components/ViewRestaurant';
import restaurantReducer from './features/restaurants.js'
import filteredRestaurantReducer from './features/filteredRestaurants'
import { Provider } from 'react-redux';
const store = configureStore({
  reducer: {
    restaurantReducer,
    filteredRestaurantReducer
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
root.render(<RouterProvider router={AppRouter} />);
