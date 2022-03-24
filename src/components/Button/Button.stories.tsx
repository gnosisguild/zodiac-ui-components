import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import Button, { ButtonProps } from "./Button"
import { CircularProgress } from "@material-ui/core"
import { Add, ArrowForward } from '@material-ui/icons'

export default {
  title: "Components/Button",
  component: Button,
  args: {
    // Default arguments
    color: "secondary",
    size: "medium",
    variant: "contained",
  }
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Contained = Template.bind({})
Contained.args = {
  label: "Contained Button",
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: "Outlined Button",
  variant: "outlined",
}

export const Large = Template.bind({})
Large.args = {
  label: "Large Button",
  size: "large",
}

export const Medium = Template.bind({})
Medium.args = {
  label: "Medium Button",
}

export const Small = Template.bind({})
Small.args = {
  label: "Small Button",
  size: "small",
}

export const StartIcon = Template.bind({})
StartIcon.args = {
  label: "Icon Button",
  startIcon: <Add/>,
}

export const EndIcon = Template.bind({})
EndIcon.args = {
  endIcon: <ArrowForward/>,
  label: "Icon Button",
}

export const Loading = Template.bind({})
Loading.args = {
  disabled: true,
  label: "Loading...",
  startIcon: <CircularProgress color="inherit" size={18}/>,
}