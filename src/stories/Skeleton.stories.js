import React from "react";
import Skeleton from "../components/Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    type: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    marginBottom: { control: "text" },
  },
};

const Template = (args) => (
  <>
    <Skeleton {...args} />
    <Skeleton {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  type: "text", // 'text', 'avatar'
  width: "300px",
  height: "18px",
  marginBottom: "4px", // Text multiline
};
// test