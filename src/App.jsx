import { useState } from "react";
import { Route, Routes } from "react-router";
import { recipes } from "./data/recipes.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import Favourites from "./pages/Favourites.jsx";

function App() {
  const [favs, setFavs] = useState([]);

  function setFavourite(id) {
    if (favs.includes(id)) {
      setFavs(favs.filter((item) => item !== id));
    } else {
      setFavs([...favs, id]);
    }
  }

  return (
    <div>
      <Navbar favouriteCount={favs.length} />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} favs={favs} />} />
        <Route path="/recipes" element={<Recipes recipes={recipes} favs={favs} setFavourite={setFavourite} />} />
        <Route path="/recipes/:id" element={<RecipeDetails recipes={recipes} favs={favs} setFavourite={setFavourite} />} />
        <Route path="/favourites" element={<Favourites recipes={recipes} favs={favs} setFavourite={setFavourite} />} />
      </Routes>
    </div>
  );
}

export default App;
