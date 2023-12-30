import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function HomeComponent() {
  return (
    <Card sx={{ maxWidth: 500, margin: 3 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Home Component 🏡
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
