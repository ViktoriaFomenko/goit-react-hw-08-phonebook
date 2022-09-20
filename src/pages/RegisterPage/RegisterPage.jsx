import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth -operations';
import { getAuthError } from 'redux/auth/auth -selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const { status, message } = useSelector(getAuthError);

  const onRegistration = data => {
    dispatch(signup(data));
  };

  return (
    <div className="container">
      <h2>Register Page</h2>
      <RegisterForm onSubmit={onRegistration} />
      {status && <p style={{ color: 'blue' }}>{message}</p>}
    </div>
  );
};

export default RegisterPage;
