import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../common/styles";

export default function Home() {
  return (
    <Box style={useStyles.root}>
      <Typography>Home Component 🏡</Typography>
    </Box>
  );
}
