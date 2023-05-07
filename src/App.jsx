import React, { useState, useEffect, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import About from './components/Offers';
import Contact from './components/Help';
import Cart from './components/Cart';
import Login from './components/SignIn';
import SignUp from './components/SignUp';
import ViewRestaurant from './components/ViewRestaurant';

export const MyContext = createContext()

const AppLayout = () => {
  useEffect(() => {
    getRestaurants()
  }, [])
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const getRestaurants = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.927532&lng=76.2638427&page_type=DESKTOP_WEB_LISTING")
      const parsedJson = await data.json()
      setFilteredRestaurant(parsedJson?.data?.cards[2]?.data?.data?.cards)
      setAllRestaurants(parsedJson?.data?.cards[2]?.data?.data?.cards)
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      // console.log(error)
      // alert('something went wrong..')
    }
  }

  return (
    <>
      <Header searchText={searchText}
        setSearchText={setSearchText}
        restaurant={filteredRestaurant}
        setRestaurant={setFilteredRestaurant}
        allRestaurant={allRestaurants} />
      <MyContext.Provider value={{ restaurant: filteredRestaurant, allRestaurants, isLoading }}>
        <Outlet />
      </MyContext.Provider>
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
      path:'/help',
      element:<Contact/>
    },
    {
      path:'/login',
      element:<Login/>,
      children:[
        {
          path:'sign-up',
          element:<SignUp/>
        }
      ]
    },
    {
      path:'/Cart',
      element:<Cart/>
    },
    {
      path:'/view-restaurant/:resId',
      element:<ViewRestaurant/>
    }
  ]
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);
