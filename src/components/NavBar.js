import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [inBakery, setInBakery] = useState(false);

  function intoBakery() {
    setInBakery(true);
  }
  function leaveBakery() {
    setInBakery(false);
  }

  return (
    <nav className="nav">
      <NavLink className="nav-ul" to="/bakery" onClick={intoBakery}>
        {inBakery === false ? <>Bakery</> : ""}
      </NavLink>
      <NavLink className="nav-ul" to="/shop" onClick={leaveBakery}>
        {inBakery === true ? <>Shop</> : ""}
      </NavLink>
    </nav>
  );
}

export default NavBar;
