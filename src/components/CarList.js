import React, { useEffect, useState } from "react";
import CarItem from "./CarItem";
import Pagination from "./Pagination";
import { useQueryState } from "../hooks/useQueryState";

function CarList({ filters }) {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageUrl, setCurrentPageUrl] = useQueryState("page");
  const [carsPerPage] = useState(24);

  const fetchCarsData = (filters) => {
    let url =
      "https://site--cars-express-app--gbmmwqlm6cfw.code.run/cars?limit=2059";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let filteredData = data.data.map((car, index) => ({ ...car, index }));
        // console.log(filteredData);
        if (filters.priceMin && filters.priceMax) {
          filteredData = filteredData.filter(
            (car) =>
              car.price / 100 >= filters.priceMin &&
              car.price / 100 <= filters.priceMax
          );
        }
        if (filters.kilometerMin && filters.kilometerMax) {
          filteredData = filteredData.filter(
            (car) =>
              car.kilometer >= filters.kilometerMin &&
              car.kilometer <= filters.kilometerMax
          );
        }
        if (filters.yearMin && filters.yearMax) {
          filteredData = filteredData.filter(
            (car) => car.year >= filters.yearMin && car.year <= filters.yearMax
          );
        }
        if (filters.color) {
          filteredData = filteredData.filter(
            (car) => car.color === filters.color
          );
        }
        setCars(filteredData);
      })
      .catch((error) => {
        alert("There has been an error with loading the cars. Please try again later.")
        // refresh the page

        // handle the error here, e.g. show an error message to the user
      });
  };

  useEffect(() => {
    fetchCarsData(filters);
    setCurrentPageUrl(1);
  }, [filters]);

  useEffect(() => {
    setCurrentPage(currentPageUrl || 1);
  }, [currentPageUrl]);

  // Get current cars
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentPageUrl(pageNumber);
  };

  if (!cars || cars.length < 1) return <h3>No Cars Found!</h3>;

  return (
    <>
      {currentCars.map((car, index) => (
        <div className="row" key={index}>
          <div className="col">
            <CarItem index={index} car={car} />
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col">
          <Pagination
            currentPage={currentPage}
            currentPageUrl={currentPageUrl}
            carsPerPage={carsPerPage}
            totalCars={cars.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}

export default CarList;
