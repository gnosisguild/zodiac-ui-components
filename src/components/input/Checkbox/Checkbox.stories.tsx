import React, { useState } from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import Checkbox, { FormControlLabelProps } from "./Checkbox"

export default {
  title: "Components/Input/Checkbox",
  component: Checkbox,
  args: {
    name: "checkbox",
  }
} as Meta

const Template: Story<FormControlLabelProps> = (args) =>  {
  const [enabled, setEnabled] = useState(true);
  return (
    <Checkbox
      {...args}
      checked={enabled}
      onChange={(_, checked) => setEnabled(checked)}
    />
  );
};

export const SimpleCheckbox = Template.bind({})
SimpleCheckbox.args = {label: "Some checkbox"}

export const NoLabel = Template.bind({})
NoLabel.args = {label: null, style: {marginRight: 0}}

export const FunctionCheckbox = Template.bind({})
FunctionCheckbox.args = {label: <div style={{fontFamily: "Roboto Mono"}}>revokeAdmin()</div>}