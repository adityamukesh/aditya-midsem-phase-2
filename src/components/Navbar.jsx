import { Link } from "react-router";

function Navbar({ favouriteCount }) {
  return (
    <div className="adi1">
      <h2>Little  Recipe Book</h2>
      <div className="adi2">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/favourites">Favourites ({favouriteCount})</Link>
      </div>
    </div>
  );
}

export default Navbar;
