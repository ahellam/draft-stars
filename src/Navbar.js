import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="Links">
          <NavLink exact to="/" activeClassName="activeLink">HOME</NavLink>
          <NavLink to="/draft" activeClassName="activeLink">DRAFT</NavLink>
          <NavLink to="/create" activeClassName="activeLink">CREATE</NavLink>
        </div>
      </nav>
      <h1 className="DraftStars">DRAFT STARS</h1>
    </>
  );
}

export default Navbar;
