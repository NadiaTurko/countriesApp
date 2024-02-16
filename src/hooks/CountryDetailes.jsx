import React from "react";
import { ListItem, List, Typography } from "@mui/material";
import { useStyles } from "../common/styles";

const CountryDetails = ({ country }) => {
  const toCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderDetails = () => {
    return Object.entries(country).map(([key, value], index) => (
      <ListItem key={index}>
        <strong>{toCapitalize(key)}:</strong> {JSON.stringify(value)}
      </ListItem>
    ));
  };

  const listStyle = {
    paddingTop: 0,
    paddingBottom: 0,
  };

  return (
    <Box>
      <Typograph sx={useStyles.header}>{country.name.common}</Typograph>
      <List sx={listStyle}>{renderDetails()}</List>
    </Box>
  );
};

export default CountryDetails;
