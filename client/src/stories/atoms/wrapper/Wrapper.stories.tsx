import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Wrapper } from "./Wrapper";

export default {
  title: "Atoms/Wrapper",
  component: Wrapper,
  argTypes: {},
} as ComponentMeta<typeof Wrapper>;

const Template: ComponentStory<typeof Wrapper> = (args) => (
  <Wrapper {...args} />
);

export const DefaultWrapper = Template.bind({});
