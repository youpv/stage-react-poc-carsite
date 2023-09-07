import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// TODO:
// 1. Implement skeleton loading or similiar stuff to prevent content shifting on load.

function CarDetails() {
  const { id } = useParams();
  const [carInfo, setCarInfo] = useState([]);

  useEffect(() => {
    const fetchCarsDetails = () => {
      fetch(
        "https://site--cars-express-app--gbmmwqlm6cfw.code.run/cars?limit=2059"
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCarInfo(data.data[id]);
          // console.log(data.data[id]);
        });
    };

    fetchCarsDetails();
  }, [id]);

  if (!carInfo) {
    return <h1>No Car Found!</h1>;
  }

  const properties = [
    { name: "make", displayName: "Brand" },
    { name: "model", displayName: "Model" },
    { name: "price", displayName: "Price" },
    { name: "year", displayName: "Year" },
    { name: "kilometer", displayName: "Kilometers" },
    { name: "fuel_type", displayName: "Fuel Type" },
    { name: "transmission", displayName: "Transmission" },
    { name: "location", displayName: "Location" },
    { name: "color", displayName: "Color" },
    { name: "owner", displayName: "Owner" },
    { name: "seller_type", displayName: "Seller Type" },
    { name: "engine", displayName: "Engine" },
    { name: "max_power", displayName: "Max Power" },
    { name: "max_torque", displayName: "Max Torque" },
    { name: "drivetrain", displayName: "Drivetrain" },
    { name: "car_length", displayName: "Car Length" },
    { name: "width", displayName: "Width" },
    { name: "height", displayName: "Height" },
    { name: "seating_capacity", displayName: "Seating Capacity" },
    { name: "fuel_tank_capacity", displayName: "Fuel Tank Capacity" },
  ];

  return (
    <div className="container px-4">
      <Link to="/">Back to home!</Link>
      <h1>{carInfo.make ?? "Unknown"}</h1>
      {properties.map((property) => (
        <p key={property.name}>
          {property.displayName}: {carInfo[property.name] ?? "Unknown"}
        </p>
      ))}
    </div>
  );
}

export default CarDetails;
