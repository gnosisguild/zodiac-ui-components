import React, { useState } from "react"
import { Meta } from "@storybook/react/types-6-0"
import Checkbox from "./Checkbox"
import { FormControl, FormControlLabel } from "@material-ui/core"

export default {
  title: "Components/Input/Checkbox",
  component: Checkbox,
} as Meta

export const SimpleCheckbox = (): React.ReactElement => {
  const [enabled, setEnabled] = useState(true);
  return (
    <Checkbox
      name="checkbox"
      checked={enabled}
      onChange={(_, checked) => setEnabled(checked)}
    />
  );
};

export const CheckboxWithLabel = (): React.ReactElement => {
  const [enabled, setEnabled] = useState(true);
  return (
    <FormControl>
      <FormControlLabel 
        control={<Checkbox name="checkbox" checked={enabled} onChange={(_, checked) => setEnabled(checked)}/>}
        label="Checkbox with a label"
      />
    </FormControl>
  );
};