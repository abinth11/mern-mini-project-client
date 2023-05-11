import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/user/partials/Header';
import Body from './components/user/partials/Body';
import Footer from './components/user/partials/Footer';
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import ErrorElement from './components/user/others/ErrorElement';
import About from './components/user/Offers';
import Contact from './components/user/Help';
import Cart from './components/user/Cart';
import Login from './components/user/Login/SignIn';
import SignUp from './components/user/Login/SignUp';
import ViewRestaurant from './components/user/Restaurants/ViewRestaurant';
import restaurantReducer from './features/restaurants.js'
import filteredRestaurantReducer from './features/filteredRestaurants'
import ViewProfile from './components/user/Profile/viewProfile';
import { Provider } from 'react-redux';
import authReducer from './features/authSlice';
import AdminBody from './components/admin/Body';
import AdminHeader from './components/admin/Header';
import AdminFooter from './components/admin/Footer';
import AdminLogin from './components/admin/Login';
import ViewUsers from './components/admin/ViewUsers';

const store = configureStore({
  reducer: {
    restaurantReducer,
    filteredRestaurantReducer,
    authReducer
  }
})
const UserLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  )
}
const AdminLayout = () => {
  return (
    <>
      <Provider store={store}>
        <AdminHeader />
        <Outlet />
        <AdminFooter />
      </Provider>
    </>
  )
}
const AppRouter = createBrowserRouter([{
  path: '/',
  element: <UserLayout />,
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
      path: 'view-profile',
      element: <ViewProfile />
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
}, {
  path: '/admin',
  element: <AdminLayout />,
  errorElement: <ErrorElement />,
  children: [
    {
      path: '/admin',
      element: <AdminBody />
    },
    {
      path: 'view-users',
      element: <ViewUsers />
    },
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />)
