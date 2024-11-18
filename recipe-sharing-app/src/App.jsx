
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import HomePage from './HomePage'; 
import AddRecipeForm from './components/AddRecipeForm'; 
import RecipeList from './components/RecipeList'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path='' element= {<AddRecipeForm/>}/>
        <Route path='' element= {<RecipeList/>}/>
      </Routes>
    </Router>
  );
}

export default App;

