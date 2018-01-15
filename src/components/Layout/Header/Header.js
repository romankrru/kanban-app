/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

const Header = (props) => {
  return (
    <header className={styles.Header}>
      <Link className={styles.Logo} to="/">Kanban React App</Link>  
    </header>
  );
};

export default Header;