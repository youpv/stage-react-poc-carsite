import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // const [isCollapsed, setIsCollapsed] = useState(true);

  // const handleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <nav className="navbar navbar-expand-md px-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          AutoCar
        </Link>
        <div className="collapse navbar-collapse" id="navbarCollapsable">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="#" className="nav-link">
                New cars
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Used cars
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <button className="btn btn-danger me-4" type="button">
            Find your car
          </button>
        </div>
        <div className="d-flex align-items-center">
          <Link to="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height="32"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </Link>
          <button
            className="navbar-toggler ms-3"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarCollapsable"
            aria-controls="navbarCollapsable"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
