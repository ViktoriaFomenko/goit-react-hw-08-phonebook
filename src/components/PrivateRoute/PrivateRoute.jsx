import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'shared/api/hooks/UseAuth';

const PrivateRoute = () => {
  const isLogin = useAuth();

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
