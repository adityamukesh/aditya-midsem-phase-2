import { Link, useParams } from "react-router";
import RecipeCard from "../components/RecipeCard.jsx";

function RecipeDetails({ recipes, favs, setFavourite }) {
  const {id}=useParams();
  const recipe=recipes.find((item)=>String(item.id)===id);

  if (!recipe) { return (
      <div className="adi8">
        <h1>not able to find the recipe.</h1>
        <Link to="/recipes">Back to recipes</Link>
      </div>
    );
  }

  const ingredients = recipe.ingredients || [];

  return (
    <section className="adi11"> <Link  to="/recipes"> All recipes</Link>
      <div className="adi12">
        <div className="adi13" >{recipe.emoji }</div>
    <div>
             <p className="adi14">{recipe.cuisine}</p>
          <h1>{recipe.name}</h1>
          <p>{recipe.cookingTime} minutes · {recipe.difficulty} · {recipe.type}</p>
          </div>
      </div>

      <div className="adi15">
        <div className="adi16">
          <p className="adi14">Gather these</p>
          <h2>Ingredients</h2>
          <p className="adi18">{ingredients.length} ingredients</p>
          {ingredients.length > 0 ? (
            <ul className="adi19">
              {ingredients.map((ingredient, index) => (
                <li key={`${ingredient}-${index}`}>
                  <b className="adi20" aria-hidden="true">•</b>
                  {ingredient}
                </li>
              ))}
            </ul>
          ) : (
            <p className="adi18">No ingredients listed .</p>
          )}
        </div>
        <div className="adi21">
          <RecipeCard
            recipe={recipe}
        isFavourite={favs.includes(recipe.id)}
            setFavourite={setFavourite}
          />
        </div>
      </div>
    </section>
  );
}

export default RecipeDetails;
