import css from './Loader.module.css';
import { Hourglass } from 'react-loader-spinner';

import React from 'react';

const Loader = () => {
  return (
    <div className={css.loadersWrapper}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        colors={['#306cce', '#72a1ed']}
      />
    </div>
  );
};

export default Loader;
