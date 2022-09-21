import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth -operations';
import Navbar from './NavBar/NavBar';
import UserRoutes from '../UserRoutes';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <UserRoutes />
    </>
  );
};
