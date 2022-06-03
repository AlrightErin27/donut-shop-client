import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [inBakery, setInBakery] = useState(false);

  function toBakery() {
    setInBakery(true);
  }
  function leaveBakery() {
    setInBakery(false);
  }

  return (
    <nav className="nav">
      <NavLink className="nav-ul" to="/bakery" onClick={toBakery}>
        {inBakery === false ? <p>bakery</p> : ""}
      </NavLink>
      <NavLink className="nav-ul" to="/shop" onClick={leaveBakery}>
        {inBakery === true ? <p>shop</p> : ""}
      </NavLink>
    </nav>
  );
}

export default NavBar;
