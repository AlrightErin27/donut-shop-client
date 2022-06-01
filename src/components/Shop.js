import React, { useEffect, useState } from "react";
import DonutCards from "./DonutCards";

function Shop() {
  const [donuts, setDonuts] = useState([]);

  // function handleDeleteDonut(donut) {
  //   console.log(donut.name, "DELETED");
  // }

  // ------------ FETCH AREA  ------------  //
  useEffect(() => {
    fetch("http://localhost:9292/donuts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setDonuts)
      .catch((err) => console.log("💀", err));
  }, []);

  // ------------ FETCH AREA  ------------  //
  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="donut-display"></div>
      <DonutCards donuts={donuts} />
    </div>
  );
}

export default Shop;
