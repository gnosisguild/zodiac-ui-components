import { createTheme } from "@material-ui/core"
import MUIShadows from "@material-ui/core/styles/shadows"
import createPalette from "@material-ui/core/styles/createPalette"

import avertaFont from "@gnosis.pm/safe-react-components/dist/fonts/averta-normal.woff2"
import avertaBoldFont from "@gnosis.pm/safe-react-components/dist/fonts/averta-bold.woff2"

import RobotoMonoRegularWoff from "../assets/fonts/RobotoMono/roboto-mono-v13-latin-regular.woff2"
import RobotoMonoRegularWoff2 from "../assets/fonts/RobotoMono/roboto-mono-v13-latin-regular.woff"

import SpectralRegularWoff from "../assets/fonts/Spectral/spectral-v7-latin-regular.woff"
import SpectralRegularWoff2 from "../assets/fonts/Spectral/spectral-v7-latin-regular.woff2"

import ZodiacBackground from "../assets/images/zodiac-bg.svg"

const colors = {
  tan: {
    100: "rgba(217, 212, 173, 0.1)",
    300: "rgba(217, 212, 173, 0.3)",
    600: "rgba(217, 212, 173, 0.3)",
    1000: "rgba(217, 212, 173, 1)",
  },
  sepia: {
    100: "rgba(224, 197, 173, 0.1)",
    1000: "rgba(224, 197, 173, 1)",
  },
  blue: {
    500: "rgba(34, 50, 101, 1)",
  },
  gray: {
    200: "rgba(105, 112, 117, 0.2)",
  }
}

const palette = createPalette({
  type: "dark",
  background: {
    default: colors.sepia[100],
    paper: colors.tan[100],
  },
  text: {
    secondary: colors.tan[1000],
  },
})

palette.primary = palette.augmentColor({
  500: "#30312C",
})
palette.secondary = palette.augmentColor({
  500: colors.blue[500],
})

const averta = {
  fontFamily: 'Averta',
  src: `local('Averta'), local('Averta Bold'), url(${avertaFont}) format('woff2'), url(${avertaBoldFont}) format('woff')`,
};
const roboto = {
  fontFamily: 'Roboto Mono',
  fontStyle: "normal",
  fontWeight: 400,
  src: `local(''), url(${RobotoMonoRegularWoff2}) format('woff2'), url(${RobotoMonoRegularWoff}) format('woff')`,
};
const spectral = {
  fontFamily: 'Spectral',
  fontStyle: "normal",
  fontWeight: 400,
  src: `local(''), url(${SpectralRegularWoff2}) format('woff2'), url(${SpectralRegularWoff}) format('woff')`,
}

const shadows = MUIShadows
shadows[1] = "0px 2px 4px rgba(105, 112, 117, 0.2)"
shadows[2] = "0px 4px 4px rgba(0, 0, 0, 0.25)"
shadows[3] = "0px 4px 10px rgba(105, 112, 117, 0.2)"

const zodiacTheme = createTheme({
  palette,
  shadows,
  typography: {
    fontFamily: "Spectral",
    h4: {
      fontSize: 24,
      fontWeight: "normal",
    },
    h5: {
      fontSize: 20,
      fontWeight: "normal",
    },
    h6: {
      fontSize: 14,
      fontWeight: "normal",
    },
    body2: {
      fontSize: 12,
    },
    subtitle1: {
      fontSize: 12,
      color: palette.common.white,
    },
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiPaper: {
      root: {
        borderRadius: "0 !important",
        border: "1px solid",
        borderColor: colors.tan[300],
        position: "relative",
        "&::before": {
          content: '" "',
          position: "absolute",
          zIndex: 1,
          top: "2px",
          left: "2px",
          right: "2px",
          bottom: "2px",
          border: `1px solid ${colors.tan[100]}`,
          pointerEvents: "none",
        },
      },
    },
    MuiCssBaseline: {
      "@global": {
        ":root": {
          "--scrollbarWidth": 6,
        },
        "@font-face": [averta, roboto, spectral],
        "html": {
          height: "100%"
        },
        body: {
          margin: 0,
          padding: 0,
          background: `url(${ZodiacBackground}) 0 0% / cover fixed`,
          "&:before": {
            content: `""`,
            position: "absolute",
            inset: 0,
            background: `linear-gradient(108.86deg,
              rgba(26, 33, 66, 0.85) 6.24%,
              rgba(12, 19, 8, 0.85) 53.08%,
              rgba(37, 6, 4, 0.85) 96.54%)`,
            zIndex: 0,
          },
        },
        a: {
          cursor: "pointer",
          textDecoration: "none",
        },
        /* Works on Firefox*/
        "*": {
          scrollbarWidth: "thin",
          scrollbarColor: `${colors.tan[600]} ${colors.tan[100]}`,
        },
        /* Works on Chrome, Edge, and Safari */
        "*::-webkit-scrollbar": {
          width: `var(--scrollbarWidth)`,
        },
        "*::-webkit-scrollbar-track": {
          background: "none",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: colors.tan[100],
          borderRadius: 0,
        },
        ".MuiFormControl-root, .MuiInputBase-root": {
          width: "100%",
        },
        "aside.bn-onboard-custom": {
          zIndex: 2,
        },
      },
    },
    MuiTypography: {
      gutterBottom: { marginBottom: 8 },
    },
    MuiChip: {
      root: {
        padding: "4px 8px",
        height: "auto",
        backgroundColor: colors.tan[100],
        border: `1px solid ${colors.tan[300]}`,
      },
      avatar: {
        display: "contents !important",
      },
      label: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    MuiButton: {
      root: {
        lineHeight: 1.4,
        textTransform: "none",
        position: "relative",
        borderRadius: 0,
        cursor: "pointer",
        "&::before": {
          content: '" "',
          position: "absolute",
          zIndex: 1,
          top: -4,
          left: -4,
          right: -4,
          bottom: -4,
          border: `1px solid ${colors.tan[300]}`,
          pointerEvents: "none",
        },
        "&:hover": {
          opacity: 0.9,
        },
      },
      contained: {
        boxShadow: "none",
        border: `1px solid ${colors.tan[300]}`,
      },
      containedSizeSmall: {
        padding: "4px 8px",
      },
      outlinedSecondary: {
        border: `1px solid ${colors.tan[300]}`,
        color: "#fff",
        "&:hover": {
          backgroundColor: `1px solid ${colors.tan[300]}`,
          border: `1px solid ${colors.tan[300]}`,
        },
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        color: "#ffffff",
        "&$checked": {
          color: "#ffffff",
        },
      },
    },
    MuiInputBase: {
      root: {
        borderRadius: 0,
        border: `1px solid ${colors.tan[300]}`,
        padding: "8px 4px",
        position: "relative",
      },
      input: {
        padding: 0,
      },
    },
    MuiPopover: {
      paper: {
        backgroundColor: "rgb(16, 16, 16)",
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: 16,
      },
    },
    MuiTableCell: {
      root: {
        fontSize: 16,
      },
      footer: {
        color: "",
      },
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
      },
    },
  },
})

export default zodiacTheme
