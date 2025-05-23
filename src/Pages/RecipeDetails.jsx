import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RecipeContext } from '../Context/RecipeContext';
import styles from './RecipeDetails.module.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipe } = useContext(RecipeContext);

  const selectedRecipe = recipe.find((item) => item.id === id);

  if (!selectedRecipe) {
    navigate('/recipes');
  }

  return (
    <div className={styles.detailWrapper}>
      <div className={styles.card}>
        
        <img src={selectedRecipe.image} alt={selectedRecipe.title} className={styles.image} />

        <div className={styles.content}>
          <h1>{selectedRecipe.title}</h1>
          <p className={styles.description}><em>{selectedRecipe.description}</em></p>
          <p><strong>👨‍🍳 Chef:</strong> {selectedRecipe.chef}</p>
          <p><strong>📊 Difficulty:</strong> {selectedRecipe.difficulty}</p>
          <p><strong>🕒 Time:</strong> {selectedRecipe.prepTime} prep | {selectedRecipe.cookTime} cook</p>

          <hr />

          <h3>🧂 Ingredients</h3>
          <ul>
            {selectedRecipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>

          <h3>👨‍🍳 Instructions</h3>
          <ol>
            {selectedRecipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>

          <button className={styles.backBtn} onClick={() => navigate(-1)}>← Back</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
