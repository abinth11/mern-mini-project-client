
import AdminHeader from '../components/admin/Header';
import AdminFooter from '../components/admin/Footer';
import AdminLogin from '../components/admin/Login';
import store from '../features/store';
const AdminLayout = () => {
    const isLoggedIn=false
    // const isLoggedIn = useSelector((state) => state);
    return (
      <Provider store={store}>
        {console.log(store)}
        {
          isLoggedIn ?
            <>
              <AdminHeader />
              <Outlet />
              <AdminFooter />
            </>
            : <Outlet />
        }
      </Provider>
    )
  }
  export default AdminLayout