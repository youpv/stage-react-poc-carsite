import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-5 bg-dark text-white mt-5">
      <div className="container px-4">
        <div className="row">
          <div className="col-5">
            <Link to="#" className="navbar-brand fw-bold">
              AutoCar
            </Link>
          </div>
          <div className="row">
            <div className="col-5">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="col-7 my-auto">
              <div className="row text-center">
                <Link to="#" className="col nav-link">
                  New Cars
                </Link>
                <Link to="#" className="col nav-link">
                  Used Cars
                </Link>
                <Link to="#" className="col nav-link">
                  About us
                </Link>
                <Link to="#" className="col nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
