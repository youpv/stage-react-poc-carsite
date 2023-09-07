import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function Filters({ handleFilterData, setActiveFilter }) {
  // Change this to a brand to change the brand filtering in the sibling component.
  // Future rplace this with a list of all the brands in the JSON data.
  const options = ["BMW", "Honda", "Hyundai", "Toyota", "Mercedes-Benz"];

  return (
    <div className="container px-4 py-5">
      <div className="d-grid">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg btn-labled"
        >
          <span className="btn-label">
            <FontAwesomeIcon icon={faFilter} /> Filters
          </span>
        </button>
        <select value={setActiveFilter} onChange={(event) => handleFilterData(event.target.value)}>
          <option key={0} value={""}>Choose a car brand</option>
          {options.map((make, index) => {
            return <option key={index}>{make}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Filters;
