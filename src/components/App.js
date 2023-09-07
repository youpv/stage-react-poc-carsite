// export default App;
import React, { useState } from "react";

import CarList from "./CarList";
import Header from "./Header";
import Filters from "./Filters";
import Footer from "./Footer";
import { useQueryState } from "../hooks/useQueryState";

function App() {
  const [filterKilometerMin, setFilterKilometerMin] = useQueryState("km-min");
  const [filterKilometerMax, setFilterKilometerMax] = useQueryState("km-max");
  const [filterPriceMin, setFilterPriceMin] = useQueryState("price-min");
  const [filterPriceMax, setFilterPriceMax] = useQueryState("price-max");
  const [filterYearMin, setFilterYearMin] = useQueryState("year-min");
  const [filterYearMax, setFilterYearMax] = useQueryState("year-max");
  const [filterColor, setFilterColor] = useQueryState("color");

  const [filters, setFilters] = useState({
    priceMin: filterPriceMin || 1,
    priceMax: filterPriceMax || 10000000,
    kilometerMin: filterKilometerMin || 1,
    kilometerMax: filterKilometerMax || 10000000,
    yearMin: filterYearMin || 1950,
    yearMax: filterYearMax || 2030,
    color: filterColor || "",
  });

  const handleFilterChange = (filters) => {
    // console.log(filters);
    // console.log(" HIER ZIJN DE FILTERS ");
    setFilterPriceMin(filters.priceMin || filterPriceMin || null);
    setFilterPriceMax(filters.priceMax || filterPriceMax || null);
    setFilterKilometerMin(filters.kilometerMin || filterKilometerMin || null);
    setFilterKilometerMax(filters.kilometerMax || filterKilometerMax || null);
    setFilterYearMin(filters.yearMin || filterYearMin || null);
    setFilterYearMax(filters.yearMax || filterYearMax || null);
    setFilterColor(filters.color || filterColor || null);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 order-lg-1">
            <Filters
              filters={filters}
              setFilters={setFilters}
              handleFilterChange={handleFilterChange}
            />
          </div>
          <div className="col-lg-8 order-lg-2 py-lg-4">
            <CarList filters={filters} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
