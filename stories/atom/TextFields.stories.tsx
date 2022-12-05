import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextFields } from "./TextFields";

export default {
  title: "atom/TextFields",
  component: TextFields,
} as ComponentMeta<typeof TextFields>;

const Template: ComponentStory<typeof TextFields> = (args) => (
  <TextFields {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Test!!!!!",
};
