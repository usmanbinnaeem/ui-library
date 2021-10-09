import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
    title: "Components/Input",
    component: Input,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } as Meta;

  const Template: Story<InputProps> = (args) => <Input {...args} />;

  export const FirstName = Template.bind({});
  FirstName.args = { label: "First Name 😃", size: "small", type: "text", id: "first", name: "firstname", placeholder:"Enter First Name" };

  export const LastName = Template.bind({});
  LastName.args = { label: "Last Name 😃", size: "medium", type: "text", id: "last", name: "lastname", placeholder:"Enter Last Name" };

  export const Password = Template.bind({});
  Password.args = { label: "Password 😃", size: "small", type: "password", id: "pass", name: "password" };
