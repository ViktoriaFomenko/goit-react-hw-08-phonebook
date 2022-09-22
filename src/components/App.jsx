import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth -operations';
import Navbar from './NavBar/NavBar';
import UserRoutes from '../UserRoutes';
import { ToastContainer } from 'react-toastify';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <>
      <ToastContainer autoClose={2000} position="top-center" closeOnClick />
      <Navbar />
      <UserRoutes />
    </>
  );
};
