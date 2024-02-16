import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../../common/styles";

export default function BackButton({ path, text }) {
  const navigation = useNavigate();
  const handleClick = () => navigation(path);
  return (
    <Button sx={useStyles.buttonForm} onClick={handleClick}>
      {text}
    </Button>
  );
}
