import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.content}>
        <h1>About Us</h1>
        <p>
          Welcome to our recipe website, your go-to destination for discovering easy,
          delicious, and inspiring meals. Whether you're a beginner cook or a seasoned chef,
          our platform helps you find the perfect recipe for any occasion.
        </p>
        <p>
          Our mission is to bring people together through food. We believe that every meal tells a story
          and we’re here to help you create your next one with recipes that are simple, tasty, and
          family-friendly.
        </p>
        <p>
          Thank you for joining us on this flavorful journey. Happy cooking!
        </p>
      </div>
    </div>
  );
};

export default About;
