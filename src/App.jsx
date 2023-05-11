import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/user/partials/Body';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import ErrorElement from './components/user/others/ErrorElement';
import About from './components/user/Offers';
import Contact from './components/user/Help';
import Cart from './components/user/Cart';
import Login from './components/user/Login/SignIn';
import SignUp from './components/user/Login/SignUp';
import ViewRestaurant from './components/user/Restaurants/ViewRestaurant';
import ViewProfile from './components/user/Profile/viewProfile';
import AdminBody from './components/admin/Body';
import UserList from './components/admin/ViewUsers';
import EditUser from './components/admin/EditUser';
import UserLayout from './Layouts/User';
import AdminLayout from './Layouts/Admin';

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
      element: <UserList />
    },
    {
      path:'edit-user',
      element:<EditUser user={{
        name: 'Nikhil',
        mobile: '9072175118',
        email: 'abin@gmail.com',
        blocked: false,
        createdAt: '2023-05-07T10:44:36.548+0000',
        photo: 'https://res.cloudinary.com/dwucedjmy/image/upload/v1683790677/profile.png',
      }}/>
    }
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />)
