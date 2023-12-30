import React, { useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";
import CountriesContext from "../../contexts/CountriesContext/CountriesContext";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function CountryCard() {
  const navigation = useNavigate();
  const { name } = useParams();

  const {
    state: { countries },
    generalList,
    handleCountryDelete,
  } = useContext(CountriesContext);

  let countryData = countries.find((item) => item.name.common === name);
  const handleDelete = (capital) => {
    handleCountryDelete(capital);
    navigation("/countries");
  };

  return countryData ? (
    <div>
      <Card sx={{ ml: 4, maxWidth: 500 }}>
        <Typography sx={{ ml: 1, mt: 1, mb: 1 }} component="div" variant="h5">
          {countryData.name.common}
        </Typography>
        {generalList(countryData)}
        <Button
          sx={{ ml: 4, mt: 4, mb: 2 }}
          variant="outlined"
          onClick={() => handleDelete(countryData.capital)}
        >
          Delete country
        </Button>
      </Card>
    </div>
  ) : null;
}
