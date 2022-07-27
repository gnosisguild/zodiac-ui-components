import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import TextField, { TextFieldProps } from "./TextField"
import { InputAdornment } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

export default {
  title: "Components/Input/TextField",
  component: TextField,
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<TextFieldProps> = (args) => <TextField {...args} />

export const DoubleBorder = Template.bind({})
DoubleBorder.args = { label: "Text filed label", borderStyle: "double" }

export const CustomBorderColor = Template.bind({})
CustomBorderColor.args = { label: "Text filed label", borderStyle: "double", borderColor: "#fff" }

export const Prefix = Template.bind({})
Prefix.args = { label: "Text filed label", borderStyle: "double", prefix: "ETH" }

export const Tooltip = Template.bind({})
Tooltip.args = { label: "Text filed label", borderStyle: "double", tooltipMsg: "Test" }

export const SingleBorder = Template.bind({})
SingleBorder.args = { label: "Another label" }

export const Search = Template.bind({})
Search.args = {
  placeholder: "Filter token list",
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
  },
}

export const SearchDoubleBorder = Template.bind({})
SearchDoubleBorder.args = {
  borderStyle: "double",
  placeholder: "Filter token list",
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
  },
}
