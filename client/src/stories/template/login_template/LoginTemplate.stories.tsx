import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginTemplate } from "./LoginTemplate";

export default {
  title: "Template/LoginTemplate",
  component: LoginTemplate,
  argTypes: {},
} as ComponentMeta<typeof LoginTemplate>;

const Template: ComponentStory<typeof LoginTemplate> = (args) => (
  <LoginTemplate {...args} />
);

export const DefaultLoginTemplate = Template.bind({});
