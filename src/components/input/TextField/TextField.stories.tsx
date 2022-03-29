import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import TextField, { TextFieldProps } from "./TextField"

export default {
  title: "Components/Input/TextField",
  component: TextField,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<TextFieldProps> = (args) => <TextField {...args} />

export const DoubleBorder = Template.bind({})
DoubleBorder.args = { label: "Text filed label", borderStyle: "double" }

export const SingleBorder = Template.bind({})
SingleBorder.args = { label: "Another label" }
