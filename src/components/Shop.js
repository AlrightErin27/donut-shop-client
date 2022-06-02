import React, { useEffect, useState } from "react";
import DonutCards from "./DonutCards";

function Shop() {
  const [donuts, setDonuts] = useState([]);
  const [customers, setCustomers] = useState([]);

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
  useEffect(() => {
    fetch("http://localhost:9292/customers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setCustomers)
      .catch((err) => console.log("💀", err));
  }, []);

  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="donut-display"></div>
      <DonutCards donuts={donuts} customers={customers} />
    </div>
  );
}

export default Shop;
