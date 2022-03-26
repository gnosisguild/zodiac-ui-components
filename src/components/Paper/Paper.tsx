import React from "react"
import classnames from "classnames"
import { Paper as MUIPaper, PaperProps as MuiPaperProps } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { colors } from "../../Theme/zodiacTheme"

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: colors.tan[100],
  },
  borderSingle: {
    "&::before": {
      content: "none",
    },
  },
  outlined: {
    background: "transparent",
  },
  roundedRight: {
    borderTopRightRadius: 9999,
    borderBottomRightRadius: 9999,
    "&::before": {
      borderTopRightRadius: 9999,
      borderBottomRightRadius: 9999,
    },
  },
  roundedLeft: {
    borderBottomLeftRadius: 9999,
    borderTopLeftRadius: 9999,
    "&::before": {
      borderBottomLeftRadius: 9999,
      borderTopLeftRadius: 9999,
    },
  },
  roundedTop: {
    borderTopLeftRadius: 9999,
    borderTopRightRadius: 9999,
    "&::before": {
      borderTopLeftRadius: 9999,
      borderTopRightRadius: 9999,
    },
  },
  roundedBottom: {
    borderBottomLeftRadius: 9999,
    borderBottomRightRadius: 9999,
    "&::before": {
      borderBottomLeftRadius: 9999,
      borderBottomRightRadius: 9999,
    },
  },
  roundedFull: {
    borderRadius: 9999,
    "&::before": {
      borderRadius: 9999,
    },
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
        borderStyle !== "double" ? classes.borderSingle : undefined,
        variant === "outlined" && classes.outlined,
        rounded === "left" && classes.roundedLeft,
        rounded === "top" && classes.roundedTop,
        rounded === "right" && classes.roundedRight,
        rounded === "bottom" && classes.roundedBottom,
        rounded === "full" && classes.roundedFull,
        props.className,
      )}
    >
      {children}
    </MUIPaper>
  )
}

export default Paper
