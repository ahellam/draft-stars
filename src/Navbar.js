import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="Links">
          <Link exact to="/">
            {" "}
            HOME{" "}
          </Link>
          <Link to="/draft"> DRAFT </Link>
          <Link to="/create"> CREATE </Link>
        </div>
      </nav>
      <h1 className="DraftStars">DRAFT STARS</h1>
    </>
  );
}

export default Navbar;
