import React from "react";
import CountryCard from "../components/CountryCard/CountryCard";

import { useNavigate } from "react-router-dom";

// import CountriesContext from "../contexts/CountriesContext/CountriesContext";
// import useCountries from "../hooks/useCountries";
import Button from "@mui/material/Button";

export default function RouteCountry() {
  // const { state, generalList, handleCountryDelete } = useCountries();
  const navigation = useNavigate();
  return (
    <>
      {/* <CountriesContext.Provider
      value={{ state, generalList, handleCountryDelete }}
    > */}
      <CountryCard />
      <Button
        sx={{ ml: 4, mt: 4, mb: 2 }}
        variant="outlined"
        onClick={() => navigation("/countries")}
      >
        Back to Countries
      </Button>
      {/* </CountriesContext.Provider> */}
    </>
  );
}
