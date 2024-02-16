import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { useStyles } from "../../common/styles";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <List>
      <ListItem style={useStyles.listItem} component={NavLink} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem style={useStyles.listItem} component={NavLink} to="/countries">
        <ListItemText primary="Countries" />
      </ListItem>
    </List>
  );
}
