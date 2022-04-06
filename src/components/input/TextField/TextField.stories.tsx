import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import TextField, { TextFieldProps } from "./TextField"
import { InputAdornment } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'

export default {
  title: "Components/Input/TextField",
  component: TextField,
  args: {
    InputLabelProps: {shrink: true}
  }
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<TextFieldProps> = (args) => <TextField {...args} />

export const Primary = Template.bind({})
Primary.args = { borderStyle: "double", label: "Textfield" }

export const SingleBorder = Template.bind({})
SingleBorder.args = { label: "Single Border" }

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

export const DoubleDisabled = Template.bind({})
DoubleDisabled.args = { borderStyle: "double", disabled: true, label: "Double Disabled" }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true, label: "Disabled" }

export const DisabledSearch = Template.bind({})
DisabledSearch.args = {
  placeholder: "Filter token list",
  disabled: true,
  InputProps: {
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
  },
}