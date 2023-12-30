import React from "react";
import CountriesList from "../components/CountriesList/CountriesList";
// import CountriesContext from "../contexts/CountriesContext/CountriesContext";

// import useCountries from "../hooks/useCountries";

export default function RouteCountries() {
  // let { state, handleCountryDelete } = useCountries();

  return (
    // <CountriesContext.Provider value={{ state, handleCountryDelete }}>
    <>
      <CountriesList />
    </>

    // </CountriesContext.Provider>
  );
}
