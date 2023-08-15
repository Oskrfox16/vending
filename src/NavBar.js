import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <nav className="NavBar">
        <div>
      <div><Link to="/">
        Machine
        </Link></div>
      <div><Link to="/snickers">
        Snickers
      </Link></div>
      <div><Link to="/coke">
        Coke
      </Link>
      </div>
      <Link to="/MandMs">
        M&Ms
      </Link>
      </div>
    </nav>
  );
}

export default NavBar;