import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth -operations';
import { getUser } from 'redux/auth/auth -selectors';

const NavBarUser = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  return (
    <div>
      <span>{email}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
export default NavBarUser;
