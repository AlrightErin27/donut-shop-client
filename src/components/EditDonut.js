import React, { useState } from "react";

function EditDonut({ donut, handleYourNuts }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function setType(e) {
    console.log(e.target.value, "TYPE");
    setName(e.target.value);
  }
  function setDescription(e) {
    console.log(e.target.value, "DESC");
    setDesc(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      id: donut.id,
      name: name,
      description: desc,
    };
    handleYourNuts(data);
  }

  return (
    <div className="edit-donut">
      <button>X</button>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="edit-form-item">
            <label>
              Type: <br />
            </label>
            <input type="text" onChange={setType} />
          </div>

          <div className="edit-form-item">
            <label>Description: </label>
            <input type="text" onChange={setDescription} />
          </div>

          <div>
            <input type="submit" className="edit-form-submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditDonut;
