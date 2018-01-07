import React from 'react';

import Header from './Header/Header';
import styles from './Layout.css';

const Layout = (props) => {
  return (
    <div className={styles.Layout}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;