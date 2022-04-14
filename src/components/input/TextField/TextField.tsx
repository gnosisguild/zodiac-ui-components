import React from "react"
import { GridProps, StandardTextFieldProps, TextField as MUITextField } from "@material-ui/core"
import classnames from "classnames"

export interface TextFieldProps extends Omit<StandardTextFieldProps, "variant" | "label"> {
  label?: string
  borderStyle?: "double" | "single"
  append?: React.ReactElement | string
  AppendProps?: GridProps
}

const TextField = ({
  borderStyle = "single",
  InputProps,
  InputLabelProps,
  label,
  append,
  AppendProps,
  ...props
}: TextFieldProps) => {
  return (
    <MUITextField
      focused={!props.disabled}
      label={label}
      placeholder={label}
      InputProps={{
        disableUnderline: true,
        ...InputProps,
      }}
      InputLabelProps={{
        shrink: true,
        ...InputLabelProps,
      }}
      {...props}
      className={classnames(borderStyle === "double" ? "border--double" : undefined, props.className)}
    />
  )
}

export default TextField
