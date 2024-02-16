import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useStyles } from "../../common/styles";

export default function CapitalForm() {
  const navigation = useNavigate();
  const countries = useSelector((store) => store.countries);
  const [translations, setTranslations] = useState(
    countries.length ? Object.keys(countries[0].translations) : []
  );
  const [country, setCountry] = useState(
    countries.length ? countries[0].name.official : ""
  );
  const [translation, setTranslation] = useState(
    translations.length ? translations[0] : ""
  );

  const handleSelectCapital = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    const selectedCountryTranslations = countries.find(
      (country) => country.name.official === selectedCountry
    ).translations;
    const selectedCountryTranslationKeys = Object.keys(
      selectedCountryTranslations
    );
    setTranslations(selectedCountryTranslationKeys);
    setTranslation(selectedCountryTranslationKeys[0]);
  };

  const handleSelectTranslation = (e) => setTranslation(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`/countries/${country}?translation=${translation}`);
  };

  return countries.length ? (
    <Box sx={useStyles.root}>
      <Typography>Capital Form Component</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={useStyles.formControl}>
          <InputLabel sx={useStyles.inputLabel}>Select Capital</InputLabel>
          <Select
            sx={useStyles.select}
            value={country}
            onChange={handleSelectCapital}
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={country.name.official}>
                {country.flag} {country.capital[0]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={useStyles.formControl}>
          <InputLabel sx={useStyles.inputLabel}>Select Translation</InputLabel>
          <Select
            sx={useStyles.select}
            value={translation}
            onChange={handleSelectTranslation}
          >
            {translations.map((key, index) => (
              <MenuItem key={index} value={key}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button sx={useStyles.buttonForm} type="submit">
          Read more about {country}
        </Button>
      </form>
    </Box>
  ) : null;
}
