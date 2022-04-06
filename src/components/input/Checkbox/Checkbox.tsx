import React from "react"
import { 
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
  FormControlLabel,
  FormControlLabelProps as MUIFormControlLabelProps,
  } from "@material-ui/core"
import CheckMarkCheckedIcon from "../../../assets/icons/checkbox-checked.svg"
import CheckMarkUncheckedIcon from "../../../assets/icons/checkbox-unchecked.svg"
import CheckMarkIndeterminateIcon from "../../../assets/icons/checkbox-indeterminate.svg"

export interface FormControlLabelProps extends Omit<MUIFormControlLabelProps, "control"> {
  CheckboxProps?: MUICheckboxProps
  control?: React.ReactElement<any, any>;
}

const Checkbox = ({ label, CheckboxProps, ...props }: FormControlLabelProps) => {
  console.log(label)
  return (
    <FormControlLabel
      label={label}
      {...props}
      control={
        props.control ? props.control : (
          <MUICheckbox
            disableFocusRipple
            disableRipple
            disableTouchRipple
            icon={<img src={CheckMarkUncheckedIcon} />}
            checkedIcon={<img src={CheckMarkCheckedIcon} />}
            indeterminateIcon={<img src={CheckMarkIndeterminateIcon} />}
            {...CheckboxProps}
          />
        )
      }
    />
  )
}

export default Checkbox
