import React, { useEffect, useState } from "react";
import CarItem from "./CarItem";

// import { Link } from "react-router-dom";

// TODO:
// 1. Implement Pagination with the ?offset and ?limit query in the API.
// 2. Implement data caching so I don't fetch new data every time I visit the page.
// 3. * If images are added, add skeleton loading for the entries.

function CarList({ handleFilterData }) {


  const [cars, setCars] = useState([]);

  const fetchCarsData = () => {
    fetch(
      `https://site--cars-express-app--gbmmwqlm6cfw.code.run/cars?limit=24&make=${handleFilterData}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCars(data.data);
      });
  };

  useEffect(() => {
    fetchCarsData();
    // waits for handleFilterData from sibling component, passed via parent, and refreshes the results.
  }, [handleFilterData]);

  if (!cars) return <h3>No Cars Found!</h3>;

  return (
    <div className="container px-4">
      {cars.map((car, index) => (
        <CarItem key={index} index={index} car={car} />
      ))}
    </div>
  );

  // return (
  //   <div>
  //     <h1>Cars</h1>
  //     {cars.length > 0 && (
  //       <ul>
  //         {cars.map((car, index) => (
  //           <li key={car.id}>
  //             <Link to={`/car/${index}`}>
  //               <h3>{car.make}</h3>
  //               <span>{car.model}</span>
  //             </Link>
  //           </li>
  //           // <li key={car.id}>
  //           //     <h3>{car.make}</h3>
  //           //     <span>{car.model}</span>
  //           // </li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );
}

export default CarList;
