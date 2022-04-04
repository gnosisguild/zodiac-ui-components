import React from "react"
import { ThemeProvider } from "styled-components"
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@material-ui/core"
import  {zodiacMuiTheme} from "../src/index"
import { theme as gnosisStyledComponentsTheme } from "@gnosis.pm/safe-react-components"

import { addDecorator } from "@storybook/react"

addDecorator((story) => (
  <MUIThemeProvider theme={zodiacMuiTheme}>
    <ThemeProvider theme={gnosisStyledComponentsTheme}>
      <CssBaseline />
      {story()}
    </ThemeProvider>
  </MUIThemeProvider>
)



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
