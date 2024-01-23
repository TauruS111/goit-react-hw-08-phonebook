import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuth } from 'slice/auth/selectors';
import AuthNav from 'components/AuthNav/AuthNav';

const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};

export default AppBar;
