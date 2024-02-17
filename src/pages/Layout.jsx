import React from "react";
import "./style.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./../store/store";
import Navigation from "./../components/Navigation/Navigation";
import RouteHome from "./../routes/RouteHome";
import RouteCountries from "./../routes/RouteCountries";
import RouteCountry from "./../routes/RouteCountry";

export default function Layout() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <BrowserRouter basename="/countriesApp">
          <header>
            <Navigation />
          </header>
          <main>
            <Routes>
              <Route index path="/" element={<RouteHome />} exact />
              <Route path="/countries" element={<RouteCountries />} />
              <Route path="/countries/:country" element={<RouteCountry />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
