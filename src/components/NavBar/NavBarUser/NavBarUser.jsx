import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth -operations';
import { getUser } from 'redux/auth/auth -selectors';
import Button from '@mui/material/Button';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import css from '../NavBarUser/NavBarUser.module.css';

const NavBarUser = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  return (
    <div className={css.bar_menu}>
      <span className={css.email}>{email} | </span>

      <Button
        onClick={onLogout}
        variant="contained"
        startIcon={<DirectionsRunIcon />}
      >
        Logout
      </Button>
    </div>
  );
};
export default NavBarUser;
