import React from "react"
import { ThemeProvider } from "styled-components"
import { CssBaseline, ThemeProvider as MUIThemeProvider } from "@material-ui/core"
import { TextField, zodiacMuiTheme, gnosisStyledComponentsTheme } from "../index"

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
