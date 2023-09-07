import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// TODO:
// 1. Implement skeleton loading or similiar stuff to prevent content shifting on load.

function CarDetails() {
  const { id } = useParams();
  const [carInfo, setCarInfo] = useState([]);

  useEffect(() => {
    const fetchCarsDetails = () => {
      fetch("https://site--cars-express-app--gbmmwqlm6cfw.code.run/cars?limit=24")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCarInfo(data.data[id]);
          console.log(data.data[id]);
        });
    };

    fetchCarsDetails();
  }, [id]);

  if (!carInfo) {
    return <h1>No Car Found!</h1>;
  }

  return (
    <div>
    <Link to='/'>Back to home!</Link>
      <h1>{carInfo.make}</h1>
      <p>Model: {carInfo.model}</p>
      <p>Price: ${carInfo.price}</p>
      <p>Year: {carInfo.year}</p>
      <p>Kilometer: {carInfo.kilometer} km</p>
      <p>Fuel Type: {carInfo.fuel_type}</p>
      <p>Transmission: {carInfo.transmission}</p>
      <p>Location: {carInfo.location}</p>
      <p>Color: {carInfo.color}</p>
      <p>Owner: {carInfo.owner}</p>
      <p>Seller Type: {carInfo.seller_type}</p>
      <p>Engine: {carInfo.engine}</p>
      <p>Max Power: {carInfo.max_power}</p>
      <p>Max Torque: {carInfo.max_torque}</p>
      <p>Drivetrain: {carInfo.drivetrain}</p>
      <p>Car Length: {carInfo.car_length} mm</p>
      <p>Width: {carInfo.width} mm</p>
      <p>Height: {carInfo.height} mm</p>
      <p>Seating Capacity: {carInfo.seating_capacity}</p>
      <p>Fuel Tank Capacity: {carInfo.fuel_tank_capacity} liters</p>
    </div>
  );
}

export default CarDetails;
