import {useState } from "react";
import RecipeCard from "../components/RecipeCard.jsx";

function Recipes({ recipes, favs, setFavourite }) {
  const[typeFilter, setTypeFilter] = useState("All");
  const[sort, setSort] = useState("low");

  let result=recipes.filter((recipe)=>typeFilter==="All"||recipe.type===typeFilter);
  result = [...result];
  result.sort
  ((a, b)=>sort==="low"?a.cookingTime-b.cookingTime:b.cookingTime - a.cookingTime);

  return (
    <div>
      <h1>Recipes</h1>
      <select value={typeFilter}onChange={(e)=>setTypeFilter(e.target.value)}>
           <option value="All">all</option>
        <option value="Veg">Veg</option>
    <option value="Non-Veg">Non-Veg</option>
      </select>

      <select value={sort} onChange={(e)=>setSort(e.target.value)}>
        <option value="low">Low - High</option>
        <option value="high">High - Low</option>
      </select>

      <h3>Recipes: {result.length}</h3>
      {result.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe}isFavourite={favs.includes(recipe.id)} setFavourite={setFavourite} />
      ))}
    </div>
  );
}

export default Recipes;
