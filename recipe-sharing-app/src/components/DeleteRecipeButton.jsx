// DeleteRecipeButton.jsx
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();  // Get the navigate function from react-router-dom

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');  // Redirect to the homepage (or any other page after deletion)
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
