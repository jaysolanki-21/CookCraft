import React from "react";
import styles from "../Pages/Home.module.css";

const RecipeCard = ({ item }) => {
  return (
    <div className={styles.recipe}>
      <div className={styles.recipeimage}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.recipedetails}>
        <h2>{item.title}</h2>
        <p>
          <b>Category </b> : {item.category}
        </p>
        <p>
          <b>Chef</b> : {item.chef}
        </p>
        <p>
          <b>Difficulty</b> : {item.difficulty}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
