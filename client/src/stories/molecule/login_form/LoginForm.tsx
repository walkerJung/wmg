import React from "react";
import { Input } from "../../atoms/input/Input";

interface LoginFormProps {}

export const LoginForm = ({}: LoginFormProps) => {
  return (
    <form className="flex flex-col gap-[5px]">
      <Input type="text" name="userId" placeholder="아이디를 입력해주세요." />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
      />
      <Input type="submit" value="로그인 하기" />
    </form>
  );
};
