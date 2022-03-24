import React from "react"

import { addDecorator } from "@storybook/react"
import { ThemeProvider } from "styled-components"
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@material-ui/core"
import { zodiacMuiTheme ,gnosisStyledComponentsTheme } from "../src/index"

addDecorator((story) => (
  <MUIThemeProvider theme={zodiacMuiTheme}>
    <ThemeProvider theme={gnosisStyledComponentsTheme}>
      <CssBaseline />
      {story()}
    </ThemeProvider>
  </MUIThemeProvider>
))

export const parameters = {
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
