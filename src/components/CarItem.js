import React from "react";
import { Link } from "react-router-dom";

const CarItem = (props) => {
  console.log(props);
  return (
    // <div className="car-item">
    //   <div className="car-item-image">AFBEELDING</div>
    //   <h5>
    //     {props.car.make} {props.car.model}
    //   </h5>
    //   <div className="car-item-details">
    //     <div>
    //       <p>Milage</p>
    //       <p>{props.car.kilometer} km</p>
    //     </div>
    //     <div>
    //       <p>Transmission</p>
    //       <p>{props.car.transmission}</p>
    //     </div>
    //     <div>
    //       <p>Year</p>
    //       <p>{props.car.year}</p>
    //     </div>
    //     <div>
    //       <p>Intake</p>
    //       <p>{props.car.fuel_type}</p>
    //     </div>
    //     <div>
    //       <p>Power kW (PK)</p>
    //       <p>{props.car.max_power}</p>
    //     </div>
    //     <div>
    //       <p>Color</p>
    //       <p>{props.car.color}</p>
    //     </div>
    //   </div>
    //   <Link to={`/car/${props.index}`}>
    //     <button>View Car</button>
    //   </Link>
    // </div>
    <div className="card mb-5">
      <img
        className="card-img-top p-4 pb-0"
        src="https://placehold.co/320x160.png"
        alt="CAR"
      />
      <div className="card-body p-4">
        <h5 className="card-title">
          {props.car.make} {props.car.model}
        </h5>
        <div className="row row-cols-2 car-card-details pt-1">
          <div className="col">
            <p>Milage</p>
            <p>{props.car.kilometer}</p>
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
          <div className="col"></div>
          <Link to={`/car/${props.index}`} className="btn btn-outline-primary mt-2">
            View car
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CarItem;
