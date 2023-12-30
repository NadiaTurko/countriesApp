import React, { useContext } from "react";
import CountriesContext from "../../contexts/CountriesContext/CountriesContext";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Button } from "@mui/material";

export default function CountriesList() {
  const { state, handleCountryDelete } = useContext(CountriesContext);

  return state.countries.length ? (
    <List sx={{ maxWidth: 500, margin: 3 }}>
      {state.countries.map((country, index) => (
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{country.flag}</ListItemIcon>
            <Link to={country.name.common}>{country.name.official}</Link>
          </ListItemButton>
          <Button onClick={() => handleCountryDelete(country.capital)}>
            DELETE
          </Button>
        </ListItem>
      ))}
    </List>
  ) : null;
}
