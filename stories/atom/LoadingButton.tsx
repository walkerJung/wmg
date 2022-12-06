import React from "react";
import {
  LoadingButton as MuiLoadingButton,
  LoadingButtonProps as MuiLoadingButtonProps,
} from "@mui/lab";

interface LoadingButtonProps extends MuiLoadingButtonProps {
  label: string;
}

export const LoadingButton = ({ label, ...rest }: LoadingButtonProps) => {
  return <MuiLoadingButton {...rest}>{label}</MuiLoadingButton>;
};
