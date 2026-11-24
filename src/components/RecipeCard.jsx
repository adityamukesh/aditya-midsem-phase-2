import { Link } from "react-router";

function RecipeCard({ recipe, isFavourite, setFavourite }) {
  return (
    <article className="adi3">
      <div className="adi4">{recipe.emoji}</div>
      <p className="adi5">{recipe.cuisine}</p>
      <h2 className="adi6">{recipe.name}</h2>
      <p>{recipe.cookingTime} min - {recipe.difficulty}</p>
      <p>{recipe.type}{recipe.cookingTime <= 20 ? " - Quick" : ""}</p>
      <Link to={`/recipes/${recipe.id}`}>View recipe</Link>
      <br />
      <button onClick={() => setFavourite(recipe.id)}>
        {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
      </button>
    </article>
  );
}

export default RecipeCard;
