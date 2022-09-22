import { useDispatch } from 'react-redux';
import LoginForm from 'components/LoginForm/LoginForm';

import { login } from 'redux/auth/auth -operations';
// import { getAuthError } from 'redux/auth/auth -selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  // const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className="container">
      <h2>Sign in</h2>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
