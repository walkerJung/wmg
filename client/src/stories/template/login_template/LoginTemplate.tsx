import React from "react";

import { Wrapper } from "../../atoms/wrapper/Wrapper";
import { LoginOrganism } from "../../organism/login_organism/LoginOrganism";

interface LoginTemplateProps {}

export const LoginTemplate = ({}: LoginTemplateProps) => {
  return (
    <Wrapper>
      <LoginOrganism />
    </Wrapper>
  );
};
