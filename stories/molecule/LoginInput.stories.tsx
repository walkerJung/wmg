import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginInput } from "./LoginInput";

export default {
  title: "molecule/LoginInput",
  component: LoginInput,
} as ComponentMeta<typeof LoginInput>;

const Template: ComponentStory<typeof LoginInput> = (args) => (
  <LoginInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  error: true,
  helperText: "로그인 정보를 확인해주세요!",
};
