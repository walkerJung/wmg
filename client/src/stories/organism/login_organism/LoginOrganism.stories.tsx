import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginOrganism } from "./LoginOrganism";

export default {
  title: "Organism/LoginOrganism",
  component: LoginOrganism,
  argTypes: {},
} as ComponentMeta<typeof LoginOrganism>;

const Template: ComponentStory<typeof LoginOrganism> = (args) => (
  <LoginOrganism {...args} />
);

export const DefaultLoginOrganism = Template.bind({});
