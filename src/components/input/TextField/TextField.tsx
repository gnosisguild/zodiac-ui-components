import React from "react"
import { GridProps, StandardTextFieldProps, TextField as MUITextField, makeStyles } from "@material-ui/core"
import classnames from "classnames"

const useStyles = makeStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      position: "relative",
      transform: "none",
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(1),
    },
    "& .MuiInputBase-root": {
      marginTop: 0,
      minHeight: "37px",
    },
    "& .MuiInputBase-root input": {
      fontFamily: "Roboto Mono",
      fontSize: "14px",
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "transparent",
    },
  },
  borderSingle: {
    "&::before": {
      content: "none",
    },
  },
}))

export interface TextFieldProps extends Omit<StandardTextFieldProps, "variant" | "label"> {
  label?: string
  borderStyle?: "double" | "single"
  append?: React.ReactElement | string
  AppendProps?: GridProps
}

const TextField = ({
  borderStyle = "double",
  InputProps,
  InputLabelProps,
  label,
  append,
  AppendProps,
  ...props
}: TextFieldProps) => {
  const classes = useStyles()
  return (
    <MUITextField
      className={classnames(borderStyle !== "double" ? classes.borderSingle : undefined, props.className)}
      classes={{ root: classes.root }}
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
    />
  )
}

export default TextField
