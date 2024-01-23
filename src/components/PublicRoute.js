import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'slice/auth/selectors';

function PublicRoute({ component: Component, redirectTo = '/' }) {
  const { isLoggedIn } = useSelector(selectAuth);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

export default PublicRoute;
