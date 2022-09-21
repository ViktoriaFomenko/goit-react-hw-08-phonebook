import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'shared/api/hooks/UseAuth';

const PublicRoute = () => {
  const isLogin = useAuth();

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};
export default PublicRoute;
