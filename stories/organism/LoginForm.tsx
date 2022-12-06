import React from "react";
import { Box } from "../atom/Box";
import { LoginInput } from "../molecule/LoginInput";
import { LoginSignUpButon } from "../molecule/LoginSignUpButon";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";

export const LoginForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <LoginInput />
        <LoginSignUpButon />
      </Box>
    </ThemeProvider>
  );
};
