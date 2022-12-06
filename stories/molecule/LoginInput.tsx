import React from "react";
import { TextFields } from "../atom/TextFields";
import { Box } from "../atom/Box";
import {
  TextFieldProps as MuiTextFieldProps,
  BoxProps as MuiBoxProps,
} from "@mui/material";

export const LoginInput = ({ ...rest }: MuiTextFieldProps & MuiBoxProps) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <TextFields
        label="아이디"
        placeholder="이메일 형식의 아이디를 입력해주세요."
        {...rest}
      />
      <TextFields
        label="비밀번호"
        placeholder="비밀번호는 영문 + 숫자 + 특수문자 조합입니다."
        type="password"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        {...rest}
      />
    </Box>
  );
};
