import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

interface ButtonProps extends MuiButtonProps {
  label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return <MuiButton {...rest}>{label}</MuiButton>;
};
