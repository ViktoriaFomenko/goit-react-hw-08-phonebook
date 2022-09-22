import { Link } from 'react-router-dom';
// import NavbarMenu from './NavBarMenu/NavBarMenu';
import NavbarAuth from './NavBarAuth/NavBarAuth';
import NavBarUser from './NavBarUser/NavBarUser';
import useAuth from 'shared/api/hooks/UseAuth';
import css from './NavBar.module.css';
import Button from '@mui/material/Button';
import HouseIcon from '@mui/icons-material/House';

const Navbar = () => {
  const isLogin = useAuth();
  return (
    <div className={css.container}>
      <Link className={css.logo} to="/">
        <Button type="submit" variant="contained" startIcon={<HouseIcon />}>
          Home
        </Button>
      </Link>
      {/* {isLogin && <NavbarMenu />} */}
      {isLogin ? <NavBarUser /> : <NavbarAuth />}
    </div>
  );
};

export default Navbar;
