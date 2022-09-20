import { Link } from 'react-router-dom';
import NavbarMenu from './NavBarMenu/NavBarMenu';
import NavbarAuth from './NavBarAuth/NavBarAuth';
import NavBarUser from './NavBarUser/NavBarUser';
import useAuth from 'shared/api/hooks/UseAuth';
import css from './NavBar.module.css';

const Navbar = () => {
  const isLogin = useAuth();
  return (
    <div className={css.container}>
      <Link className={css.logo} to="/">
        Logo
      </Link>
      {isLogin && <NavbarMenu />}
      {isLogin ? <NavBarUser /> : <NavbarAuth />}
    </div>
  );
};

export default Navbar;
