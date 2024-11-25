
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import AddRecipeForm from './components/AddRecipeForm'; 
import RecipeList from './components/RecipeList'; 
import RecipeDetails from "./RecipeDetails";


function App() {
  return (
    <Router>
      <Routes>
  
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path='' element= {<AddRecipeForm/>}/>
        <Route path='' element= {<RecipeList/>}/>
      </Routes>
    </Router>
  );
}

export default App;

