import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [inBakery, setInBakery] = useState(false);

  function toBakery() {
    setInBakery(true);
    console.log("TO THE BAKERY!");
  }
  function leaveBakery() {
    setInBakery(false);
    console.log("TO THE SHOP!");
  }

  return (
    <nav className="nav">
      <NavLink className="nav-ul" to="/bakery" onClick={toBakery}>
        {inBakery === false ? <>Bakery</> : ""}
      </NavLink>
      <NavLink className="nav-ul" to="/shop" onClick={leaveBakery}>
        {inBakery === true ? <>Shop</> : ""}
      </NavLink>
    </nav>
  );
}

export default NavBar;
