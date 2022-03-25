import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import Paper, { PaperProps } from "./Paper"

export default {
  title: "Components/Paper",
  component: Paper,
  args: {
    borderStyle: "double",
    style: { height: "80vmin", width: "80vmin", },
    variant: "elevation",
  }
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<PaperProps> = (args) => <Paper {...args} />

export const FilledDouble = Template.bind({})

export const FilledSingle = Template.bind({})
FilledSingle.args = { borderStyle: "single" }

export const OutlinedDouble = Template.bind({})
OutlinedDouble.args = { variant: "outlined" }

export const OutlinedSingle = Template.bind({})
OutlinedSingle.args = { borderStyle: "single", variant: "outlined" }

export const RoundedLeft = Template.bind({})
RoundedLeft.args = { rounded: "left" }

export const RoundedTop = Template.bind({})
RoundedTop.args = { rounded: "top" }

export const RoundedRight = Template.bind({})
RoundedRight.args = { rounded: "right" }

export const RoundedBottom = Template.bind({})
RoundedBottom.args = { rounded: "bottom" }

export const RoundedFull = Template.bind({})
RoundedFull.args = { rounded: "full" }