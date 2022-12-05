import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box } from "./Box";

export default {
  title: "atom/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  sx: {
    width: 300,
    height: 300,
    backgroundColor: "primary.dark",
    "&:hover": {
      backgroundColor: "primary.main",
      opacity: [0.9, 0.8, 0.7],
    },
  },
};
