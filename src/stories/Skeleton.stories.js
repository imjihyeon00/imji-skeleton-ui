import React from "react";
import Skeleton from "../components/Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
    borderRadius: { control: "text" },
  },
};

const Template = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: "100px",
  height: "20px",
  borderRadius: "4px",
};
