import RecipeCard from "../components/RecipeCard.jsx";

function Favourites({ recipes, favs, setFavourite }) {
  let result = recipes.filter((recipe) => {
    return favs.includes(recipe.id);
  });

  let total = 0;
  result.map((recipe) => {
    total=total+recipe.cookingTime;
  });

  return (
    <section>
      <h1>Your Favourites</h1>
      {result.length > 0 ? <h3>{total} min total cooking time</h3> : null}

      {result.length === 0 ? (
        <h2>No favourites</h2>
      ) :(
        <div className="adi7">
          {result.map((recipe) => ( <RecipeCard key={recipe.id}
              recipe={recipe}
                 isFavourite={true}
              setFavourite={setFavourite}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favourites;
