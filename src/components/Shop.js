import React, { useState } from "react";
import DonutCards from "./DonutCards";

function Shop() {
  const [donuts, setDonuts] = useState([]);
  console.log(donuts);

  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="donut-display"></div>
      <DonutCards />
    </div>
  );
}

export default Shop;
