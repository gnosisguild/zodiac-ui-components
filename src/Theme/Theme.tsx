import React from "react"
import { ThemeProvider } from "styled-components"
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@material-ui/core"
import zodiacMuiTheme from "../Theme/zodiacTheme"
import { theme as gnosisStyledComponentsTheme } from "@gnosis.pm/safe-react-components"

interface ThemeProps {
  children: React.ReactChild
}

const Theme = ({ children }: ThemeProps) => (
  <MUIThemeProvider theme={zodiacMuiTheme}>
    <ThemeProvider theme={gnosisStyledComponentsTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </MUIThemeProvider>
)

export default Theme
