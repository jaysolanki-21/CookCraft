import React from 'react';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Oops! Recipe Not Found</h1>
      <p className={styles.text}>
        Looks like someone ate the page you're looking for. 🍽️<br />
        Don’t worry, you can always go back home and cook something else!
      </p>
      <Link to="/" className={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
