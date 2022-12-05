import React from "react";
import {
  CssBaseline as MuiCssBaseline,
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
} from "@mui/material";

export const Container = ({}: MuiContainerProps) => {
  return (
    <>
      <MuiCssBaseline />
      <MuiContainer></MuiContainer>
    </>
  );
};
