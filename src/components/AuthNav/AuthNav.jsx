import React from 'react';
import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <>
      <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </>
  );
}

export default AuthNav;
