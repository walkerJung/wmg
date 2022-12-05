import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

export const TextFields = ({ ...rest }: MuiTextFieldProps) => {
  return <MuiTextField {...rest} />;
};
