import React from "react"
import { GridProps, FormControlProps, FormControl, Input, InputLabel, StandardTextFieldProps } from "@material-ui/core"
import classnames from "classnames"

export interface TextFieldProps extends Omit<StandardTextFieldProps, "defaultValue" | "classes" | "onBlur" | "onChange" | "onFocus" | "variant" | "label">, FormControlProps {
  label?: string
  borderStyle?: "double" | "single"
  append?: React.ReactElement | string
  AppendProps?: GridProps
}

const TextField = ({
  InputProps,
  InputLabelProps,
  label,
  append,
  AppendProps,
  ...props
}: TextFieldProps) => {
  return (
    <FormControl
      className={classnames(props.borderStyle === "double" ? "border--double" : undefined, props.className)}
      {...props}
    >
      <InputLabel
        disabled={props.disabled}
        htmlFor="mui-input"
        {...InputLabelProps}
      >
        {label}
      </InputLabel>
      <Input
        id="mui-input"
        placeholder={props.placeholder || label}
        disabled={props.disabled}
        disableUnderline
        {...InputProps}
      />
    </FormControl>
  )
}

export default TextField
