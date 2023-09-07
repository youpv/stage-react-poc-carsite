import React from "react";

import CarList from "./CarList";
import Header from "./Header";
import Filters from "./Filters";
import Footer from "./Footer";
import { useQueryState } from "../hooks/useQueryState";

function App() {
//   const [filterData, setFilterData] = useState("");

  // Retrieves data from the filter child and makes sure the state updates.
//   const handleFilterData = (data) => {
//     setFilterData(data);
//     console.log(data);
//   };

  const [filterMake, setFilterMake] = useQueryState('makes');

  const handleMakeFilter = (option) => {
    console.log(option)
    setFilterMake(option || "");
  };

  return (
    <>
      <Header />
      <Filters handleFilterData={handleMakeFilter} setActiveFilter={filterMake} />
      <CarList handleFilterData={filterMake} />
      <Footer />
    </>
  );
}

export default App;
