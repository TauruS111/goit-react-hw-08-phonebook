import React from 'react';
import css from './Loader.module.css';
import { Watch } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.loadersWrapper}>
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="blue"
        ariaLabel="watch-loading"
      />
    </div>
  );
};

export default Loader;
