import React, { useEffect, useState } from "react"
import { Slider as MUISlider, SliderProps, makeStyles } from "@material-ui/core"
import { colors } from "../../../theme/zodiacTheme"

export type { SliderProps }

const useStyles = makeStyles(() => ({
  root: {
    color: colors.tan[300],
    height: 8,
    "& .MuiSlider-rail": {
      backgroundColor: colors.tan[100],
      border: `1px solid ${colors.tan[300]}`,
      height: 8,
    },
    "& .MuiSlider-track": {
      margin: `1px 0 0 1px`,
      height: 8,
    },
    "& .MuiSlider-thumb": {
      height: 20,
      width: 20,
      backgroundColor: colors.tan[1000],
    },
  },
}))

const Slider = ({ ...props }: SliderProps) => {
  const classes = useStyles()

  return <MUISlider className={classes.root} {...props} />
}

export default Slider
