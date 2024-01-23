import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'slice/auth/selectors';

function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const { isLoggedIn, isRefreshing } = useSelector(selectAuth);
  const shutRedirect = !isLoggedIn && !isRefreshing;
  return shutRedirect ? <Navigate to={redirectTo} /> : Component;
}

export default PrivateRoute;
