import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginTemplate } from "./LoginTemplate";

export default {
  title: "template/LoginTemplate",
  component: LoginTemplate,
} as ComponentMeta<typeof LoginTemplate>;

const Template: ComponentStory<typeof LoginTemplate> = (args) => (
  <LoginTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {};
