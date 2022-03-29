import React from "react"
import { Checkbox as MUICheckbox, CheckboxProps } from "@material-ui/core"
import CheckMarkCheckedIcon from "../../../assets/icons/checkbox-checked.svg"
import CheckMarkUncheckedIcon from "../../../assets/icons/checkbox-unchecked.svg"
import CheckMarkIndeterminateIcon from "../../../assets/icons/checkbox-indeterminate.svg"

export type { CheckboxProps }

const Checkbox = ({ ...props }: CheckboxProps) => {

  return (
    <MUICheckbox
      disableFocusRipple
      disableRipple
      disableTouchRipple
      icon={<img src={CheckMarkUncheckedIcon} />}
      checkedIcon={<img src={CheckMarkCheckedIcon} />}
      indeterminateIcon={<img src={CheckMarkIndeterminateIcon} />}
      {...props}
    />
  )
}

export default Checkbox
