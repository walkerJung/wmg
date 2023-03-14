import React from "react";

import { LoginForm } from "../../molecule/login_form/LoginForm";
import { H1 } from "../../atoms/h1/h1";

interface LoginOrganismProps {}

export const LoginOrganism = ({}: LoginOrganismProps) => {
  return (
    <div className="m-[14px] flex flex-col gap-[14px]">
      <H1 contents="반가워요, 우리는 풀과 함께 살아갑니다" />
      <LoginForm />
    </div>
  );
};
