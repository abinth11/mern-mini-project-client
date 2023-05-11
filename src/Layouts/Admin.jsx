
import AdminHeader from '../components/admin/partials/Header';
import AdminFooter from '../components/admin/partials/Footer';
import AdminLogin from '../components/admin/Login';
import { Provider } from 'react-redux';
import store from '../features/store';
import { Outlet } from 'react-router-dom';
const AdminLayout = () => {
    // const isLoggedIn = useSelector((state) => state);
    return (
      <Provider store={store}>
        {/* {console.log(store)}
        {
          isLoggedIn ?
            <>
              <AdminHeader />
              <Outlet />
              <AdminFooter />
            </>
            : <Outlet />
        } */}
        <Outlet/>
      </Provider>
    )
  }
  export default AdminLayout