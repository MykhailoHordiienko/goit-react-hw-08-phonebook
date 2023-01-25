import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <header>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <Outlet />
    </header>
  );
};
