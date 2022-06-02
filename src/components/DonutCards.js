import React from "react";
import { useHistory } from "react-router-dom";
import DonutCard from "./DonutCard";

function DonutCards({ donuts, customers, setDonuts }) {
  const history = useHistory();
  const renderDonuts = donuts.map((donut, key) => {
    return (
      <DonutCard
        donut={donut}
        key={key}
        handleDelete={handleDelete}
        customers={customers}
        handleYourNuts={handleYourNuts}
      />
    );
  });

  // ------------------------ FETCH AREA ------------------------ //

  function handleDelete(donut) {
    console.log(donut);
    fetch(`http://localhost:9292/donuts/${donut.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .catch((err) => console.log("🔥", err))
      .then(setDonuts(donuts.filter((item) => item.name !== donut.name)));
  }
  // ------------------------ FETCH AREA ------------------------ //
  function handleYourNuts(data) {
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
      .then(document.location.reload())
      .catch((err) => console.log("🤬 PATCH DONUT", err));
  }
  // ------------ FETCH AREA  ------------  //

  return <div className="render-donuts">{renderDonuts.reverse()}</div>;
}

export default DonutCards;
