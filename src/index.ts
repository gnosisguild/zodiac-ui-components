import zodiacMuiTheme, { colors, doubleBorder } from "./theme/zodiacTheme"
import ZodiacCheckbox from "./components/input/Checkbox"
import ZodiacPaper from "./components/Paper"
import ZodiacModal from "./components/Modal"
import ZodiacTextField from "./components/input/TextField"
import { theme as gnosisStyledComponentsTheme } from "@gnosis.pm/safe-react-components" // must expose here, to make sure ita compilable with the current version of the zodiac-ui-components

export {
  ZodiacCheckbox,
  colors,
  doubleBorder,
  ZodiacModal,
  ZodiacPaper,
  ZodiacTextField,
  zodiacMuiTheme,
  gnosisStyledComponentsTheme,
}
