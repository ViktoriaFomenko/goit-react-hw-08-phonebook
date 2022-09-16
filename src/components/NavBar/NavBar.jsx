import { Link } from 'react-router-dom';
import NavbarMenu from './NavBarMenu/NavBarMenu';
import NavbarAuth from './NavBarAuth/NavBarAuth';
import css from './NavBar.module.css';

const Navbar = () => {
  return (
    <div className={css.container}>
      <Link className={css.logo} to="/">
        Logo
      </Link>
      <NavbarMenu />
      <NavbarAuth />
    </div>
  );
};

export default Navbar;
