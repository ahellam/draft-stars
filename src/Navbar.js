import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <h1>DRAFT STARS</h1>
        <div className="links">
            <Link exact to="/">HOME </Link>
            <Link to="/draft">DRAFT </Link>
            <Link to="/create">CREATE </Link>

        </div>
    </nav>
  )
}

export default Navbar