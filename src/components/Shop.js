import React, { useEffect, useState } from "react";
import DonutCards from "./DonutCards";
import { NavLink } from "react-router-dom";

function Shop() {
  const [donuts, setDonuts] = useState([]);
  const [customers, setCustomers] = useState([]);

  function handleYourNuts(data) {
    // console.log(data);
    const { id, name, description } = data;

    fetch(`http://localhost:9292/donuts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    })
      .then((r) => r.json())
      .catch((err) => console.log("🤬 PATCH DONUT", err));
  }

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
      .catch((err) => console.log("💀 GET DONUT", err));
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
      .catch((err) => console.log("💀 GET CUSTOMER", err));
  }, []);

  // ------------ FETCH AREA  ------------  //
  // useEffect(() => {
  //   fetch(`http://localhost:9292/donuts/${donut.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       description: description,
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then(setDonuts)
  //     .catch((err) => console.log("🤬 PATCH DONUT", err));
  // }, []);
  // ------------ FETCH AREA  ------------  /

  return (
    <div className="shop">
      <h1>Shop</h1>
      <NavLink className="nav-link" exact to="/bakery" />
      <div className="donut-display"></div>
      <DonutCards
        donuts={donuts}
        customers={customers}
        setDonuts={setDonuts}
        handleYourNuts={handleYourNuts}
      />
    </div>
  );
}

export default Shop;
