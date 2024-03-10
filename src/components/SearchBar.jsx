import React from "react";

function SearchBar() {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <label for="inputArama1" className="form-label">
            Buradan arama yapabilirsiniz
          </label>
          <input
            id="inputArama1"
            className="form-control me-2 col-8"
            type="search"
            placeholder="Arama yapın"
            aria-label="Search"
          />
        </div>
        <div className="col-12">
          <br />
          <button className="btn btn-outline-success" type="submit">
            Ara
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
