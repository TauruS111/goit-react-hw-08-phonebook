import css from './Author.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'slice/auth/thunk';

function LogIn() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = e.currentTarget.elements;
    dispatch(
      logInThunk({
        email: email.value,
        password: password.value,
      })
    );
  };
  return (
    <div>
      <div className={css.author}>
        <form onSubmit={handleSubmit} className={css.form} name="client-form">
          <div className={css.formDiv}>
            <div className={css.formContainer}>
              <label className={css.formLabel} htmlFor="e-mail"></label>
              <div className={css.formWrapper}>
                <input
                  className={css.formInput}
                  type="email"
                  id="e-mail"
                  name="email"
                  placeholder="EMAIL"
                />
              </div>
            </div>

            <div className={css.formContainer}>
              <label className={css.formLabel} htmlFor="password"></label>
              <div className={css.formWrapper}>
                <input
                  className={css.formInput}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="PASSWORD"
                />
              </div>
            </div>
          </div>
          <div className={css.btnDiv}>
            <button className={css.submit} type="submit">
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
