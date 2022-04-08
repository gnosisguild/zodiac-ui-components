import React, { useState } from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Story } from "@storybook/react"
import Checkbox, { CheckboxProps } from "./Checkbox"

export default {
  title: "Components/Input/Checkbox",
  component: Checkbox,
} as Meta

// Create a master template for mapping args to render the Checkbox component
const Template: Story<CheckboxProps> = (args) =>  {
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