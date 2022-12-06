import React from "react";
import { Container } from "../atom/Container";
import { LoginForm } from "../organism/LoginForm";

export const LoginTemplate = ({ ...rest }) => {
  return (
    <Container maxWidth={"sm"}>
      <LoginForm />
    </Container>
  );
};
