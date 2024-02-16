import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStyles } from "../../common/styles";
import { actionCountryDelete } from "../../store/actions";

export default function CountriesList() {
  const dispatch = useDispatch();

  const countries = useSelector((store) => store.countries);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm("");
  };
  const handleItemDelete = (event, name) => {
    event.stopPropagation();
    dispatch(actionCountryDelete(name));
  };

  return (
    <Box style={useStyles.root}>
      <Typography style={useStyles.header}>Countries List</Typography>
      <Box style={useStyles.inputContainer}>
        <TextField
          color="success"
          fullWidth
          style={useStyles.input}
          type="text"
          placeholder="Search country"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          style={useStyles.button}
          onClick={clearSearch}
          variant="contained"
        >
          Clear
        </Button>
      </Box>
      {filteredCountries.length ? (
        <List>
          {filteredCountries.map((country, index) => (
            <ListItem key={index}>
              <Link style={useStyles.link} to={country.name.official}>
                <ListItemText
                  style={useStyles.header}
                  primary={`${country.flag} ${country.name.official}`}
                />
              </Link>{" "}
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={(event) =>
                    handleItemDelete(event, country.name.official)
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No countries found</Typography>
      )}
    </Box>
  );
}
