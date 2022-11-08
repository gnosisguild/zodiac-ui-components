import React, { useEffect, useState } from "react"
import { Grid, Slider as MUISlider, SliderProps as MUISliderProps, makeStyles, Typography } from "@material-ui/core"
import TextField from "../TextField"
import { colors } from "../../../theme/zodiacTheme"
import { MaximizeSharp } from "@material-ui/icons"

interface SliderProps extends MUISliderProps {
  hasInput?: boolean
  id?: string
  label?: string
  onChangeSlider?: (value: number | string | Array<number | string>) => void
}

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
  sliderGrid: {
    flexGrow: 1,
  },
  inputGrid: {
    width: 80,
  },
  input: {
    border: `1px solid ${colors.tan[300]}`,
    textAlign: "center",
  },
}))

const Slider = ({ hasInput, id, label, onChangeSlider, ...props }: SliderProps) => {
  const classes = useStyles()

  const min = props.min || 0
  const max = props.max || 100

  if (hasInput) {
    const [value, setValue] = useState<number | string | Array<number | string>>(props.defaultValue ?? 4)

    const handleSliderChange = (_: Event, value: number | number[]) => {
      setValue(value)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value === "" ? "" : Number(event.target.value))
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if ((event.key === "ArrowUp" || event.key === "ArrowRight") && typeof value == "number") {
        if (value < max) {
          setValue(Number(value) + 1)
        }
      }
      if ((event.key === "ArrowDown" || event.key === "ArrowLeft") && typeof value == "number") {
        if (value > min) {
          setValue(Number(value) - 1)
        }
      }
    }

    const handleBlur = () => {
      if (value < min) {
        setValue(min)
      } else if (value > max) {
        setValue(max)
      }
    }

    useEffect(() => {
      if (onChangeSlider) {
        onChangeSlider(value)
      }
    }, [onChangeSlider, value])

    return (
      <>
        {label && (
          <Typography id={id} gutterBottom>
            {label}
          </Typography>
        )}
        <Grid container spacing={3} alignItems="center">
          <Grid item className={classes.sliderGrid}>
            <Slider
              value={typeof value === "number" ? value : 0}
              //@ts-ignore
              onChange={handleSliderChange}
              aria-labelledby={id}
              {...props}
            />
          </Grid>
          <Grid item className={classes.inputGrid}>
            <TextField
              InputProps={{ className: classes.input }}
              value={value}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onKeyDown={(event) => handleKeyDown(event)}
            />
          </Grid>
        </Grid>
      </>
    )
  }
  return <MUISlider className={classes.root} {...props} />
}

export default Slider
