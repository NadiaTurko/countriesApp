import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { renderObjectList } from "../../common/common";

import { useSearchParams, useNavigate } from "react-router-dom";

import { actionCountryDelete } from "../../store/actions";
import { Typography, Button, Box } from "@mui/material";
import { useStyles } from "../../common/styles";

export default function CountryCard() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [searchParams] = useSearchParams();
  const searchParamTranslation = searchParams.get(`translation`);

  const { country: countryParam } = useParams();

  const countries = useSelector((state) => state.countries);
  const country = countries.find((item) => item.name.official === countryParam);

  const handleCountryDelete = (name) => {
    dispatch(actionCountryDelete(name));
    navigation("/countries");
  };

  return (
    <Box sx={useStyles.root}>
      <Typography sx={useStyles.header}>
        {searchParamTranslation
          ? country.translations[searchParamTranslation].official
          : country.name.official}
      </Typography>
      {country ? renderObjectList(country) : null}
      <Button
        variant="contained"
        type="submit"
        color="success"
        sx={useStyles.buttonForm}
        onClick={() => handleCountryDelete(country.name.official)}
      >
        Delete country
      </Button>
    </Box>
  );
}
