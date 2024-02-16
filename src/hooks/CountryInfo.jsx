import React from "react";
import { ListItem, List } from "@mui/material";
import { toCapitalize } from "../utils"; // Припустимо, що у вас є функція toCapitalize для форматування назв властивостей

const CountryInfo = ({ country }) => {
  const renderDetails = () => {
    return Object.entries(country).map(([key, value], index) => (
      <ListItem key={index}>
        <strong>{toCapitalize(key)}:</strong> {JSON.stringify(value)}
      </ListItem>
    ));
  };

  return (
    <div>
      <h2>{country.name.common}</h2>
      <List>{renderDetails()}</List>
    </div>
  );
};

export default CountryInfo;
