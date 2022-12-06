import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoadingButton } from "./LoadingButton";

export default {
  title: "atom/LoadingButton",
  component: LoadingButton,
} as ComponentMeta<typeof LoadingButton>;

const Template: ComponentStory<typeof LoadingButton> = (args) => (
  <LoadingButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Default Loading Button",
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
