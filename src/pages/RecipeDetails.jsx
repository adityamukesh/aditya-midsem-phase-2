import { Link, useParams } from "react-router";
import RecipeCard from "../components/RecipeCard.jsx";

function RecipeDetails({ recipes, favs, setFavourite }) {
  const { id }=useParams();
  const recipe=recipes.find((item)=>item.id===Number(id));

  if (!recipe){
    return<h2>Recipe not found</h2>;
  }

  return (
    <div>
   <Link to="/recipes">Back</Link><h1>{recipe.emoji} {recipe.name}</h1>
     <p>{recipe.cuisine} - {recipe.cookingTime} min - {recipe.difficulty}</p>
      <h3>Ingredients:{recipe.ingredients.length}</h3>
   {recipe.ingredients.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <RecipeCard recipe={recipe}isFavourite={favs.includes(recipe.id)} setFavourite={setFavourite} />
    </div>
  );
}

export default RecipeDetails;
