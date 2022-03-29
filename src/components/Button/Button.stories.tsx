import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import { Button, ButtonProps, CircularProgress } from "@material-ui/core"
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
  children: "Contained Button",
}

export const Outlined = Template.bind({})
Outlined.args = {
  children: "Outlined Button",
  variant: "outlined",
}

export const Large = Template.bind({})
Large.args = {
  children: "Large Button",
  size: "large",
}

export const Medium = Template.bind({})
Medium.args = {
  children: "Medium Button",
}

export const Small = Template.bind({})
Small.args = {
  children: "Small Button",
  size: "small",
}

export const StartIcon = Template.bind({})
StartIcon.args = {
  children: "Icon Button",
  startIcon: <Add/>,
}

export const EndIcon = Template.bind({})
EndIcon.args = {
  endIcon: <ArrowForward/>,
  children: "Icon Button",
}

export const Loading = Template.bind({})
Loading.args = {
  disabled: true,
  children: "Loading..",
  startIcon: <CircularProgress color="inherit" size={18}/>,
}