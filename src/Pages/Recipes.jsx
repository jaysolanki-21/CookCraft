import React, { useContext, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { RecipeContext } from "../Context/RecipeContext";
import styles from "./Recipe.module.css";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const { recipe } = useContext(RecipeContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;

  const totalPages = Math.ceil(recipe.length / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const currentRecipes = recipe.slice(startIndex, startIndex + recipesPerPage);

  return (
    <div className={styles.allrecipes}>
      <div>
        <h1>Find Your Next Meal</h1>
      </div>

      <div className={styles.recipelist}>
        {currentRecipes.map((item) => (
          <RecipeCard
            key={item.id}
            item={item}
            onClick={() => navigate(`/recipes/${item.id}`)}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? styles.activePage : ""}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Recipes;
