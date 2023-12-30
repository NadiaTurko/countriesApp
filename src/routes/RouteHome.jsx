import React from "react";
import HomeComponent from "../components/HomeComponent/HomeComponent";
import CapitalFormComponent from "../components/CapitalFormComponent/CapitalFormComponent";

// import useCountries from "../hooks/useCountries";
// import CountriesContext from "../contexts/CountriesContext/CountriesContext";
export default function RouteHome() {
  // let { state, handleCountryChange } = useCountries();
  return (
    <>
      <HomeComponent />
      {/* <CountriesContext.Provider value={{ state, handleCountryChange }}> */}
      <CapitalFormComponent />
      {/* </CountriesContext.Provider> */}
    </>
  );
}
