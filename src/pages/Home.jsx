import { Link } from "react-router";

function Home({ recipes, favs }) {
  let veg = recipes.filter((recipe) => recipe.type === "Veg");

  return (
    <div>
      <h1>Welcome to my aditya restaurant</h1>
      <Link to="/recipes">Explore recipes</Link>
      <h3>Total recipes: {recipes.length}</h3>
      <h3>Veg recipes: {veg.length}</h3>
      <h3>Favourite recipes: {favs.length}</h3>
    </div>
  );
}

export default Home;
