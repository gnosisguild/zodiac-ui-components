import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import Slider from "./Slider"
import { Box, SliderProps } from "@material-ui/core"

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
  return (
    <Box sx={{ width: 400 }}>
      <Slider label="Slider label" id="slider" hasInput />
    </Box>
  )
}
