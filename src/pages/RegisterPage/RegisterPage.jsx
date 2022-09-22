import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth -operations';
// import { getAuthError } from 'redux/auth/auth -selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();

  // const { status, message } = useSelector(getAuthError);

  const onRegistration = data => {
    dispatch(signup(data));
  };

  return (
    <div className="container">
      <h2>Sign in</h2>
      <RegisterForm onSubmit={onRegistration} />
    </div>
  );
};

export default RegisterPage;
