import React from "react"
import { Input as MUIInput, InputProps as MUIInputProps, makeStyles } from "@material-ui/core"
import { colors } from "../../../theme/zodiacTheme"
import classNames from "classnames"

export interface InputProps extends MUIInputProps {
  borderStyle?: "single" | "double"
}

const useStyles = makeStyles(() => ({
  root: {
    borderColor: colors.tan[300],
    paddingLeft: "0.75rem",
  },
  singleBorder: {
    "& .MuiInputBase-root": {},
  },
  doubleBorder: {
    "& .MuiInputBase-root": {
      paddingLeft: 8,

      "&::before": {
        content: '""',
        position: "absolute",
        zIndex: 1,
        inset: 2,
        border: "1px solid",

        pointerEvents: "none",
      },
    },
  },
}))

const Input = ({ borderStyle = "single", ...props }: InputProps) => {
  const { root, doubleBorder, singleBorder } = useStyles()
  return (
    <MUIInput
      disableUnderline
      className={classNames(borderStyle === "double" ? doubleBorder : singleBorder, root)}
      {...props}
    />
  )
}

export default Input
