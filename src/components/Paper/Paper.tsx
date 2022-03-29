import React from "react"
import classnames from "classnames"
import { Paper as MUIPaper, PaperProps as MuiPaperProps } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { colors } from "../../Theme/zodiacTheme"

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: colors.tan[100],
  },
  outlined: {
    background: "transparent",
  },
}))

export interface PaperProps extends MuiPaperProps {
  borderStyle?: "double" | "single"
  rounded?: "left" | "top" | "right" | "bottom" | "full"
}

const Paper = ({
  borderStyle = "double",
  variant = "elevation",
  elevation = 0,
  rounded,
  children,
  ...props
}: PaperProps) => {
  const classes = useStyles()

  return (
    <MUIPaper
      variant="outlined"
      elevation={elevation}
      {...props}
      className={classnames(
        borderStyle === "double" ? 'border--double' : undefined,
        rounded === "left" && "roundedLeft",
        rounded === "top" && "roundedTop",
        rounded === "right" && "roundedRight",
        rounded === "bottom" && "roundedBottom",
        rounded === "full" && "roundedFull",
        variant === "outlined" && classes.outlined,
        props.className,
      )}
    >
      {children}
    </MUIPaper>
  )
}

export default Paper
