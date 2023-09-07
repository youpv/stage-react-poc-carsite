import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function Filters({ filters, setFilters, handleFilterChange }) {
  const changeFilter = (filterName, filterValue) => {
    setFilters({ ...filters, [filterName]: filterValue });
    handleFilterChange({ ...filters, [filterName]: filterValue });
  };

  return (
    <div className="d-grid py-4 sticky-lg-top">
      <button
        type="button"
        className="btn btn-outline-primary btn-lg btn-labled d-md-block d-lg-none"
      >
        <span className="btn-label">
          <FontAwesomeIcon icon={faFilter} /> Filters
        </span>
      </button>
      <div className="card p-4 d-none d-lg-block">
        <div className="row">
          <div className="col">
            <h4>Filters</h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <label className="fw-bold">Price</label>
          </div>
        </div>
        <div className="row pb-2">
          <div className="col-6">
            <select
              className="form-select"
              value={filters.priceMin}
              onChange={(event) =>
                changeFilter("priceMin", parseInt(event.target.value))
              }
            >
              <option defaultValue value={"1"}>
                from
              </option>
              <option value={"2500"}>€2.500</option>
              <option value={"5000"}>€5.000</option>
              <option value={"7500"}>€7.500</option>
              <option value={"10000"}>€10.000</option>
              <option value={"12500"}>€12.500</option>
              <option value={"15000"}>€15.000</option>
              <option value={"20000"}>€20.000</option>
              <option value={"25000"}>€25.000</option>
              <option value={"50000"}>€50.000</option>
              <option value={"75000"}>€75.000</option>
              <option value={"100000"}>€100.000</option>
            </select>
          </div>
          <div className="col-6">
            <select
              className="form-select"
              value={filters.priceMax}
              onChange={(event) =>
                changeFilter("priceMax", parseInt(event.target.value))
              }
            >
              <option defaultValue value={"10000000"}>
                till
              </option>
              <option value={"2500"}>€2.500</option>
              <option value={"5000"}>€5.000</option>
              <option value={"7500"}>€7.500</option>
              <option value={"10000"}>€10.000</option>
              <option value={"12500"}>€12.500</option>
              <option value={"15000"}>€15.000</option>
              <option value={"20000"}>€20.000</option>
              <option value={"25000"}>€25.000</option>
              <option value={"50000"}>€50.000</option>
              <option value={"75000"}>€75.000</option>
              <option value={"100000"}>€100.000</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="fw-bold">Kilometers</label>
          </div>
        </div>
        <div className="row pb-2">
          <div className="col-6">
            <select
              className="form-select"
              value={filters.kilometerMin}
              onChange={(event) =>
                changeFilter("kilometerMin", parseInt(event.target.value))
              }
            >
              <option defaultValue value={"0"}>
                from
              </option>
              <option value={"2500"}>2.500 km</option>
              <option value={"3000"}>3.000 km</option>
              <option value={"4000"}>4.000 km</option>
              <option value={"5000"}>5.000 km</option>
              <option value={"10000"}>10.000 km</option>
              <option value={"25000"}>25.000 km</option>
              <option value={"50000"}>50.000 km</option>
              <option value={"75000"}>75.000 km</option>
              <option value={"100000"}>100.000 km</option>
            </select>
          </div>
          <div className="col-6">
            <select
              className="form-select"
              value={filters.kilometerMax}
              onChange={(event) =>
                changeFilter("kilometerMax", parseInt(event.target.value))
              }
            >
              <option defaultValue value={"1000000"}>
                till
              </option>
              <option value={"2500"}>2.500 km</option>
              <option value={"3000"}>3.000 km</option>
              <option value={"4000"}>4.000 km</option>
              <option value={"5000"}>5.000 km</option>
              <option value={"10000"}>10.000 km</option>
              <option value={"25000"}>25.000 km</option>
              <option value={"50000"}>50.000 km</option>
              <option value={"75000"}>75.000 km</option>
              <option value={"100000"}>100.000 km</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="fw-bold">Year</label>
          </div>
        </div>
        <div className="row pb-2">
          <div className="col-6">
            <select
              className="form-select"
              value={filters.yearMin}
              onChange={(event) =>
                changeFilter("yearMin", parseInt(event.target.value))
              }
            >
              <option defaultValue value={"1900"}>
                from
              </option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div className="col-6">
            <select
              className="form-select"
              value={filters.yearMax}
              onChange={(event) =>
                changeFilter("yearMax", parseInt(event.target.value))
              }
            >
              <option defaultValue value={"2030"}>
                till
              </option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="fw-bold">Color</label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <select
              className="form-select"
              value={filters.color}
              onChange={(event) => changeFilter("color", event.target.value)}
            >
              <option defaultValue value={""}>
                select a color
              </option>
              <option value={"Green"}>Green</option>
              <option value={"Blue"}>Blue</option>
              <option value={"Black"}>Black</option>
              <option value={"White"}>White</option>
              <option value={"Red"}>Red</option>
              <option value={"Yellow"}>Yellow</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
