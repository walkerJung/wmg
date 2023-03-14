import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginForm } from "./LoginForm";

export default {
  title: "Molecule/LoginForm",
  component: LoginForm,
  argTypes: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const DefaultLoginForm = Template.bind({});
