import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import Checkbox, { CheckboxProps } from "./Checkbox"

export default {
  title: "Components/Input/Checkbox",
  component: Checkbox,
} as Meta

// Create a master template for mapping args to render the Checkbox component
const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Checked = Template.bind({})
Checked.args = { checked: true }

export const UnChecked = Template.bind({})
UnChecked.args = { checked: false }
