import React from "react"
import { Checkbox as MUICheckbox, CheckboxProps, makeStyles } from "@material-ui/core"
import CheckMarkCheckedIcon from "../../../assets/icons/checkbox-checked.svg"
import CheckMarkUncheckedIcon from "../../../assets/icons/checkbox-unchecked.svg"
import CheckMarkIndeterminateIcon from "../../../assets/icons/checkbox-indeterminate.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    backgroundColor: "transparent !important",
    borderRadius: 0,
    margin: theme.spacing(1, 1, 1, 0),
  },
}))

export type { CheckboxProps }

const Checkbox = ({ ...props }: CheckboxProps) => {
  const classes = useStyles()

  return (
    <MUICheckbox
      disableFocusRipple
      disableRipple
      disableTouchRipple
      icon={<img src={CheckMarkUncheckedIcon} />}
      checkedIcon={<img src={CheckMarkCheckedIcon} />}
      indeterminateIcon={<img src={CheckMarkIndeterminateIcon} />}
      classes={{ root: classes.root }}
      {...props}
    />
  )
}

export default Checkbox
