import RecipeCard from "../components/RecipeCard.jsx";

function Favourites({ recipes, favs, setFavourite }) {
  let result=recipes.filter((recipe)=>favs.includes(recipe.id));
  let total =result.reduce((sum, recipe)=>sum+recipe.cookingTime, 0);

  return (
    <section>
      <h1>Your Favourites</h1>
      {result.length===0?<h2>No favourites yet</h2>:<h3>{total} minimum cookingtime</h3>}
   {result.map((recipe) =>
    (<RecipeCard key={recipe.id} recipe={recipe} isFavourite={true} setFavourite={setFavourite} />
      ))}
    </section>
  );
}

export default Favourites;
