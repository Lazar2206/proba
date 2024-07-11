import { Link, NavLink } from 'react-router-dom';

import '../styles/Navbar.css';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Navbar = () => {
  const toggleMenu = () => {};

  return (
    <header className='row container'>
      <Link to={'/'} className='logo lobsterFont'>
        TacoTime
      </Link>
      <div className='toggleMenu' onClick={toggleMenu}></div>
      <nav className='navigation row'>
        <ul className='primary-links row'>
          <li>
            <NavLink
              to={'/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/recipes'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/about'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/favorites'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
        <ul className='secondary-links row'>
          <li>
            <Link to={'/'}>
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <FaTiktok />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;