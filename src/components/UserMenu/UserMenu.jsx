import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'slice/auth/selectors';
import { logOutThunk } from 'slice/auth/thunk';
import css from './User.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div className={css.logOut}>
      <p className={css.userEmail}>{user.email}</p>
      <button className={css.btnLogOut} onClick={handleLogOut} type="button">
        Logout
      </button>
    </div>
  );
};
