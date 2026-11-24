import { useState } from "react";
import RecipeCard from "../components/RecipeCard.jsx";

function Recipes({ recipes, favs, setFavourite }) {
  const [typeFilter, setTypeFilter] = useState("All");
  const [sort, setSort] = useState("low");

  let result = recipes.filter((recipe) => {
    return typeFilter==="All" ||recipe.type===typeFilter;
  });

  result = [...result];
  if (sort === "low") {
    result.sort((a, b)=>a.cookingTime-b.cookingTime);} else {
    result.sort((a, b)=>b.cookingTime-a.cookingTime);
  }

  return (
    <div>
      <h1>Recipes for every kind of day</h1> 
      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
    <option value="All">all</option>
  <option value="Veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>
      </select>

      <select value={sort}onChange={(e)=>setSort(e.target.value)}>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      <h3>Recipes:{result.length}</h3>

      {result.length === 0 ? (
        <h2>No recipes found</h2>
      ) : (
        <div className="adi7">
       {result.map((recipe) => (
            <RecipeCard key={recipe.id}
              recipe={recipe}
          isFavourite={favs.includes(recipe.id)}
                       setFavourite={setFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Recipes;
