import React, { useContext } from "react";
import CountriesContext from "../../contexts/CountriesContext/CountriesContext";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Link } from "react-router-dom";

export default function CapitalFormComponent() {
  const { state, handleCountryChange } = useContext(CountriesContext);

  return state.countries.length ? (
    <>
      <Card sx={{ maxWidth: 500, margin: 3 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Capital Form Component
            </Typography>
            <FormControl sx={{ minWidth: 500 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Select Capital
              </InputLabel>
              <Select
                sx={{ maxWidth: 250 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Capital"
                value={undefined}
                onChange={(e) => handleCountryChange(e.target.value)}
              >
                {state.countries.map((country) => (
                  <MenuItem
                    key={country.name.common}
                    value={country.capital[0]}
                  >
                    {" "}
                    {country.flag}
                    {country.capital[0]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 250, mt: 1 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Select Translation
              </InputLabel>
              <Select
                sx={{ maxWidth: 250 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label=" Select Translation"
              >
                {state.selectedCountry &&
                  Object.entries(state.selectedCountry.translations).map(
                    (translation) => (
                      <MenuItem key={translation} value={translation}>
                        {translation[0]}
                      </MenuItem>
                    )
                  )}
              </Select>
            </FormControl>
          </CardContent>
        </CardActionArea>
        <Link to={`/countries/${state.selectedCountry?.name.common}`}>
          <Button sx={{ margin: 2 }} color="success" variant="outlined">
            Read more about{" "}
            {state.selectedCountry ? state.selectedCountry.name.common : ""}
          </Button>
        </Link>
      </Card>
    </>
  ) : null;
}
