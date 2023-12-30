import React from "react";

import Navigation from "../components/Navigation/Navigation";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteHome from "../routes/RouteHome";
import RouteCountries from "../routes/RouteCountries";
import RouteCountry from "../routes/RouteCountry";

import useCountries from "../hooks/useCountries";
import CountriesContext from "../contexts/CountriesContext/CountriesContext";

export default function Layout() {
  const { state, handleCountryDelete, generalList, handleCountryChange } =
    useCountries();

  return (
    <BrowserRouter>
      <header>
        <Navigation />
      </header>
      <main>
        <CountriesContext.Provider
          value={{
            state,
            generalList,
            handleCountryDelete,
            handleCountryChange,
          }}
        >
          <Routes>
            <Route index path={"/"} element={<RouteHome />}></Route>
            <Route path={"countries"} element={<RouteCountries />}></Route>
            <Route path={"countries/:name"} element={<RouteCountry />}></Route>
          </Routes>
        </CountriesContext.Provider>
      </main>
    </BrowserRouter>
  );
}
