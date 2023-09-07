import React from "react";
import { Link } from "react-router-dom";

function CarItem(props) {
  return (
    <div className="card mb-5">
      <div className="row g-0">
        <div className="col-md-4 order-md-1 d-flex align-items-center">
          <img
            className="card-img-top pb-0"
            src="https://placehold.co/320x160.png"
            alt="CAR"
          />
        </div>
        <div className="col-md-8 order-md-2">
          <div className="card-body p-4">
            <h5 className="card-title">
              {props.car.make} {props.car.model}
            </h5>
            <div className="row row-cols-2 row-cols-md-3 car-card-details pt-1">
              <div className="col">
                <p>Kilometers</p>
                <p>{props.car.kilometer} km</p>
              </div>
              <div className="col">
                <p>Transmission</p>
                <p>{props.car.transmission}</p>
              </div>
              <div className="col">
                <p>Year</p>
                <p>{props.car.year}</p>
              </div>
              <div className="col">
                <p>Intake</p>
                <p>{props.car.fuel_type}</p>
              </div>
              <div className="col">
                <p>Power kW (PK)</p>
                <p>{props.car.max_power}</p>
              </div>
              <div className="col">
                <p>Color</p>
                <p>{props.car.color}</p>
              </div>
              <div className="col">
                <p>Price</p>
                <p>€ {(props.car.price / 100).toFixed(2)}</p>
              </div>
              <div className="col">
                <Link
                  to={`/car/${props.car.index}`}
                  className="btn btn-outline-danger mt-3 text-center border-2 fw-bold"
                >
                  View car
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
