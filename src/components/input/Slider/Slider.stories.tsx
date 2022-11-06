import React, { useState } from "react"
import { Meta } from "@storybook/react/types-6-0"
import Slider from "./Slider"
import Input from "../Input"
import { Box, Grid, SliderProps, Typography } from "@material-ui/core"

export default {
  title: "Components/Input/Slider",
  component: Slider,
} as Meta

export const SimpleSlider = (): SliderProps => (
  <Box sx={{ width: 400 }}>
    <Slider defaultValue={4} aria-label="Default" valueLabelDisplay="auto" />
  </Box>
)

export const SliderWithInput = (): SliderProps => {
  const [value, setValue] = useState<number | string | Array<number | string>>(4)

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value))
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if ((event.key === "ArrowUp" || event.key === "ArrowRight") && typeof value == "number") {
      setValue(Number(value) + 1)
    }
    if ((event.key === "ArrowDown" || event.key === "ArrowLeft") && typeof value == "number") {
      setValue(Number(value) - 1)
    }
  }

  const handleBlur = () => {
    if (value < 0) {
      setValue(0)
    } else if (value > 100) {
      setValue(100)
    }
  }

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="slider-with-input" gutterBottom>
        Label
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9}>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="slider-with-input"
          />
        </Grid>
        <Grid item xs={3}>
          <Input value={value} onChange={handleInputChange} onBlur={handleBlur} onKeyDown={handleKeyDown} />
        </Grid>
      </Grid>
    </Box>
  )
}
