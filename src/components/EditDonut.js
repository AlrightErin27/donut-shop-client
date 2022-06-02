import React from "react";

function EditDonut() {
  function handleSubmit() {}
  function setType() {}
  function setDescription() {}

  return (
    <div className="edit-donut">
      <button>X</button>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="edit-form-item">
            <label>
              Type: <br />
            </label>
            <input type="text" onChange={(e) => setType(e.target.value)} />
          </div>

          <div className="edit-form-item">
            <label>Description: </label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
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
