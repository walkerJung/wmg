import React from "react";
import { Button } from "../atom/Button";
import { Box } from "../atom/Box";

export const LoginSignUpButon = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <Button label="로그인" variant="contained" />
      <Button label="회원가입" variant="contained" />
    </Box>
  );
};
