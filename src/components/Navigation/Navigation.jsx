import React from "react";

import { NavLink } from "react-router-dom";
import { Paper, MenuList, MenuItem } from "@mui/material";

export default function Navigation() {
  return (
    <div>
      <Paper sx={{ maxWidth: 500, margin: 3 }}>
        <MenuList>
          <MenuItem>
            <NavLink
              to="/"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Home
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="countries"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Countries
            </NavLink>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}
