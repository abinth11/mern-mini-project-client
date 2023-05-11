import Header from '../components/user/partials/Header';
import Footer from '../components/user/partials/Footer';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import store from '../features/store';
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
  export default UserLayout