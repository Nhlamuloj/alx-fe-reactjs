// EditRecipeForm.js
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './components/EditRecipeForm';
import React, { useEffect } from 'react';
im

const EditRecipeForm = ({ recipe, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title || '',
        ingredients: recipe.ingredients || '',
        instructions: recipe.instructions || '',
      });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Pass the form data back to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
