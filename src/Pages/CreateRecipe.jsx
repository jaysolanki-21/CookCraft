import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import styles from './CreateRecipe.module.css';
import { RecipeContext } from '../Context/RecipeContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

const CreateRecipe = ({ onSubmitRecipe }) => {
  const { recipe, setRecipe } = useContext(RecipeContext);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      category: '',
      chef: '',
      description: '',
      image: '',
      ingredients: '',
      instructions: '',
      difficulty: 'Easy',
      prepTime: '',
      cookTime: ''
    }
  });

  const onSubmit = (data) => {
    const formatted = {
      ...data,
      ingredients: data.ingredients
        .split(/\n|,/)
        .map(i => i.trim())
        .filter(i => i),
      instructions: data.instructions
        .split(/\n|,/)
        .map(i => i.trim())
        .filter(i => i),
    };
    formatted.id = nanoid();
    setRecipe([...recipe, formatted]);

    if (onSubmitRecipe) {
      onSubmitRecipe(formatted);
    }

    toast.success('Recipe added successfully!');

    reset();

    console.log('Submitted:', formatted);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2>Add New Recipe</h2>

        <input placeholder="Title" {...register("title")} className={styles.input} />
        <input placeholder="Category" {...register("category")} className={styles.input} />
        <input placeholder="Chef" {...register("chef")} className={styles.input} />
        <textarea placeholder="Description" {...register("description")} className={styles.textarea} />
        <input placeholder="Image URL" {...register("image")} className={styles.input} />

        <div className={styles.group}>
          <label>Ingredients (one per line or comma-separated)</label>
          <textarea
            placeholder="e.g.\n1 cup flour\n2 eggs\n1 tsp vanilla"
            {...register("ingredients")}
            className={styles.textarea}
          />
        </div>

        <div className={styles.group}>
          <label>Instructions (one per line or comma-separated)</label>
          <textarea
            placeholder="e.g.\nPreheat oven to 350°F\nMix ingredients\nBake for 30 minutes"
            {...register("instructions")}
            className={styles.textarea}
          />
        </div>

        <select {...register("difficulty")} className={styles.select}>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <input placeholder="Prep Time (e.g., 10 min)" {...register("prepTime")} className={styles.input} />
        <input placeholder="Cook Time (e.g., 15 min)" {...register("cookTime")} className={styles.input} />

        <button type="submit" className={styles.submitBtn}>Submit Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
