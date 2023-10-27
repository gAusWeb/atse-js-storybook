import React from "react";
// import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonClick } from "./ButtonClick";

export default {
  title: "1-Atoms/Buttons/default",
  component: ButtonClick,
  argTypes: {
    btnStyle: {
      options: ["primary", "secondary", "dark"],
      defaultValue: "primary",
      control: { type: "select" },
    },
    btnSize: {
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      control: { type: "select" },
    },
  },
};

const Template = (args) => {
  return <ButtonClick>{args.label}</ButtonClick>;
};

export const Default = Template.bind({});
Default.args = {
  label: "Default button",
};

// export const SecondaryButton = Template.bind({});
// SecondaryButton.args = {
//     btnStyle: "secondary",
//     label: "Default button",
// };

// export const DarkButton = Template.bind({});
// DarkButton.args = {
//     btnStyle: "dark",
//     label: "Default button",
// };
