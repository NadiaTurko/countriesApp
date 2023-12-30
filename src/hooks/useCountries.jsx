import { useReducer } from "react";

import { List, ListItem, ListItemText } from "@mui/material";
import { SELECT_COUNTRY, actionCountryDelete } from "../store/actions";

import reducer from "../store/reducer";

import { INITIAL_STATE } from "../store/reducer";

const useCountries = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleCountryDelete = (capital) => {
    dispatch(actionCountryDelete(capital));
  };

  const handleCountryChange = (capital) => {
    const country = state.countries.find((c) => c.capital[0] === capital);

    dispatch({ type: SELECT_COUNTRY, payload: country });
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const generalList = (data) => {
    return (
      <List>
        {Object.entries(data).map(([key, value]) => (
          <ListItem key={key}>{handleValue(key, value)}</ListItem>
        ))}
      </List>
    );
  };
  const handleValue = (key, value) => {
    if (Array.isArray(value)) {
      return (
        <>
          <ListItemText>
            <strong>{String(capitalizeFirstLetter(key))} : </strong>
            <List>
              {value.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))}
            </List>
          </ListItemText>
        </>
      );
    } else if (typeof value === "boolean") {
      return (
        <>
          <ListItemText>
            <strong>{String(capitalizeFirstLetter(key))} : </strong>
            {value ? "Yes" : "No"}
          </ListItemText>
        </>
      );
    } else if (typeof value === "object") {
      return (
        <>
          <ListItemText>
            <strong>{String(capitalizeFirstLetter(key))} : </strong>
            {generalList(value)}
          </ListItemText>
        </>
      );
    } else {
      return (
        <>
          <ListItemText>
            <strong>{capitalizeFirstLetter(key)} : </strong>
            {value}
          </ListItemText>
        </>
      );
    }
  };

  return {
    state,
    handleCountryDelete,
    handleCountryChange,
    generalList,
  };
};

export default useCountries;
