import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginSignUpButon } from "./LoginSignUpButon";

export default {
  title: "molecule/LoginSignUpButon",
  component: LoginSignUpButon,
} as ComponentMeta<typeof LoginSignUpButon>;

const Template: ComponentStory<typeof LoginSignUpButon> = () => (
  <LoginSignUpButon />
);

export const Default = Template.bind({});
Default.args = {};
