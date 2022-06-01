import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <NavLink className="nav-ul" to="/bakery">
        <>Bakery</>
      </NavLink>
      <NavLink className="nav-ul" to="/shop">
        <>Shop</>
      </NavLink>
    </nav>
  );
}

export default NavBar;
