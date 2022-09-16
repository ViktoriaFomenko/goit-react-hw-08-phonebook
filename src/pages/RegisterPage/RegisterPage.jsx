import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signup } from '../../redux/auth/auth -operations';
import { getAuthError, isAuth } from '../../redux/auth/auth -selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const { status, message } = useSelector(getAuthError);

  const isLogin = useSelector(isAuth);
  const onRegistration = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }

  return (
    <div className="container">
      <h2>Register Page</h2>
      <RegisterForm onSubmit={onRegistration} />
      {status && <p style={{ color: 'blue' }}>{message}</p>}
    </div>
  );
};

export default RegisterPage;
