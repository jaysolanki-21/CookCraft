import React, { useContext } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../Context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
const Home = () => {
  const { recipe } = useContext(RecipeContext);
  const naigate = useNavigate();
  console.log(recipe);
  return (
    <div className={styles.homecontainer}>
      <div className={styles.lefthome}></div>
      <div className={styles.righthome}>
        <div className={styles.titlecontainer}>
          <h1 className={styles.hometitle}>Explore Our Recipe Collection</h1>
        </div>
        <div className={styles.recipecontainer}>
          
          {recipe.slice(0, 4).map((item, index) => (
            <RecipeCard key={index} item={item} />
          ))}
         
        </div>
        <button
          onClick={() => naigate("/recipes")}
          className={styles.exploreButton}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Home;
