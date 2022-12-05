import React from "react";
import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";

export const Box = ({ ...rest }: MuiBoxProps) => {
  return <MuiBox {...rest} />;
};
